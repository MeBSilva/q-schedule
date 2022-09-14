import React from "react";

import * as S from "./styles";

export type Props = {
  styleType?: "primary" | "secondary";
} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLElement>;

const Button = ({
  styleType,
  children,
  ...rest
}: Props): React.ReactElement => (
  <S.Button styleType={styleType || "primary"} {...rest}>
    {children}
  </S.Button>
);

export default Button;
