import React from "react";

import { LoadSchedules, AddSchedule } from "@/domain/usecases";

import { Button } from "@/presentation/components";
import { useModal } from "@/presentation/hooks/modal";
import { Validation } from "@/presentation/protocols";

import { AddScheduleForm, ScheduleGrid } from "./components";

import * as S from "./styles";

type Props = {
  loadScheduleList: LoadSchedules;
  addSchedule: AddSchedule;
  validation: Validation;
};

const ScheduleList = ({
  loadScheduleList,
  addSchedule,
  validation,
}: Props): React.ReactElement => {
  const { showModal } = useModal();

  React.useEffect(() => {
    const load = async () => {
      await loadScheduleList.load();
    };

    load();
  }, [loadScheduleList]);

  const handleModal = (children: React.ReactNode) => {
    showModal({
      children,
    });
  };

  return (
    <S.ScheduleListContainer>
      <ScheduleGrid />
      <Button
        styleType="secondary"
        onClick={() =>
          handleModal(
            <AddScheduleForm
              validation={validation}
              addSchedule={addSchedule}
            />
          )
        }
      >
        Create a schedule
      </Button>
    </S.ScheduleListContainer>
  );
};

export default ScheduleList;
