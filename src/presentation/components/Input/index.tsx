import React from "react";

import * as S from "./styles";

type Props = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  value: string;
  setValue: (value: string) => void;
  error?: string;
  touched?: boolean;
  setTouched?: () => void;
  setError?: (error: string) => void;
  label?: string;
};

const Input = ({
  value,
  setValue,
  error,
  touched,
  setTouched,
  ...props
}: Props): React.ReactElement => (
  <S.InputContainer>
    <label>{props.label}</label>
    <input
      onBlur={setTouched}
      maxLength={50}
      {...props}
      value={value}
      onChange={(e) => {
        setValue(e.target.value);
      }}
    />
    {error && touched ? <p>{error}</p> : null}
  </S.InputContainer>
);

export default Input;
