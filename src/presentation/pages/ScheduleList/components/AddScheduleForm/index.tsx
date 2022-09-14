import React, { useState } from "react";

import { AddSchedule } from "@/domain/usecases";

import { Input, Spinner } from "@/presentation/components";
import { Validation } from "@/presentation/protocols";
import { useModal } from "@/presentation/hooks/modal";
import { assertError } from "@/presentation/utils";

import * as S from "./styles";

type Props = {
  addSchedule: AddSchedule;
  validation: Validation;
};

const AddScheduleForm = ({
  addSchedule,
  validation,
}: Props): React.ReactElement => {
  const { hideModal } = useModal();

  const [formData, setFormData] = useState<{
    [key in "title" | "endTime" | "startTime"]: string;
  }>({
    title: "",
    endTime: "",
    startTime: "",
  });

  const [formDataTouchedFields, setFormDataTouchedFields] = useState<{
    [key in "title" | "endTime" | "startTime"]: boolean;
  }>({
    title: false,
    endTime: false,
    startTime: false,
  });

  const [formDataErrors, setFormDataErrors] = useState<{
    [key in "title" | "endTime" | "startTime"]: string | undefined;
  }>({
    title: undefined,
    endTime: undefined,
    startTime: undefined,
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (
    event: React.FormEvent<HTMLFormElement>
  ): Promise<void> => {
    try {
      event.preventDefault();
      if (
        isLoading ||
        Object.values(formDataErrors).some((field) => field !== undefined)
      ) {
        return;
      }

      setIsLoading(true);

      await addSchedule.add({
        endTime: new Date(formData.endTime),
        startTime: new Date(formData.startTime),
        title: formData.title,
      });

      setIsLoading(false);

      resetForm();
      hideModal();
    } catch (err) {
      setIsLoading(false);

      if (assertError(err)) alert(err.message);
    }
  };

  const validate = React.useCallback(
    (field: string) => {
      setFormDataErrors((previous) => ({
        ...previous,
        [`${field}`]: validation.validate(field, formData),
      }));
    },
    [formData, validation]
  );

  React.useEffect(() => {
    validate("title");
  }, [formData.title, validate]);

  React.useEffect(() => {
    validate("startTime");
  }, [formData.startTime, validate]);

  React.useEffect(() => {
    validate("endTime");
  }, [formData.endTime, validate]);

  const resetForm = () => {
    setFormData({ title: "", endTime: "", startTime: "" });
    setFormDataTouchedFields({
      title: false,
      endTime: false,
      startTime: false,
    });
  };

  return (
    <S.FormContainer onSubmit={handleSubmit}>
      <Input
        value={formData.title}
        setValue={(value) =>
          setFormData((previous) => ({ ...previous, title: value }))
        }
        label="Title"
        name="title"
        error={formDataErrors.title}
        touched={formDataTouchedFields.title}
        setTouched={() =>
          setFormDataTouchedFields((previous) => ({
            ...previous,
            title: true,
          }))
        }
      />
      <Input
        name="startTime"
        value={formData.startTime}
        setValue={(value) =>
          setFormData((previous) => ({ ...previous, startTime: value }))
        }
        label="Start time"
        type={"datetime-local"}
        max="9999-12-31T23:59:59"
        error={formDataErrors.startTime}
        touched={formDataTouchedFields.startTime}
        setTouched={() =>
          setFormDataTouchedFields((previous) => ({
            ...previous,
            startTime: true,
          }))
        }
      />
      <Input
        name="endTime"
        value={formData.endTime}
        setValue={(value) =>
          setFormData((previous) => ({ ...previous, endTime: value }))
        }
        label="End time"
        type={"datetime-local"}
        max="9999-12-31T23:59:59"
        error={formDataErrors.endTime}
        touched={formDataTouchedFields.endTime}
        setTouched={() =>
          setFormDataTouchedFields((previous) => ({
            ...previous,
            endTime: true,
          }))
        }
      />
      <S.Submit data-testid="submit" type="submit" styleType="secondary">
        {isLoading ? <Spinner type="secondary" /> : "Submit"}
      </S.Submit>
    </S.FormContainer>
  );
};

export default AddScheduleForm;
