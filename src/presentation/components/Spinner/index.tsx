import React from "react";

import * as S from "./styles";

type Props = {
  type: "primary" | "secondary";
} & React.HTMLAttributes<HTMLElement>;

const Spinner = ({ type, ...props }: Props): React.ReactElement => (
  <S.Spinner type={type} {...props} data-testid="spinner">
    <div />
    <div />
    <div />
    <div />
  </S.Spinner>
);

export default Spinner;
