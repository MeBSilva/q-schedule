import styled from "styled-components";

import { Button as DefaultButton } from "@/presentation/styles/global";

type ButtonProps = {
  styleType: "primary" | "secondary";
};

export const Button = styled(DefaultButton)<ButtonProps>`
  background-color: ${({ theme, styleType }) =>
    styleType === "primary"
      ? theme.colors.secondary.white
      : theme.colors.primary.blue};
  color: ${({ theme, styleType }) =>
    styleType === "primary"
      ? theme.colors.primary.blue
      : theme.colors.secondary.white};
`;
