import React from "react";

import * as S from "./styles";

type Props = { styleType: "primary" | "secondary" } & React.PropsWithChildren &
  React.HTMLAttributes<HTMLElement>;

const Button = ({ children, ...rest }: Props): React.ReactElement => (
  <S.Button {...rest}>{children}</S.Button>
);

export default Button;
