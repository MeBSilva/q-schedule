import styled from "styled-components";

import { Container } from "@/presentation/styles";

export const InputContainer = styled(Container)`
  gap: 0.5em;
  margin-bottom: 0.5em;

  input {
    background-color: ${({ theme }) => theme.colors.primary.white};
    flex: 1;
    border-radius: 3px;
    border: 1px solid ${({ theme }) => theme.colors.primary.blue};

    line-height: 2rem;
    padding: 0px 3em 0px 0.5em;
    opacity: 0.6;

    &:focus {
      outline: none;
      opacity: 1;
    }
  }

  label {
    color: ${({ theme }) => theme.colors.primary.black};
    cursor: text;
  }

  p {
    margin: 0;
    color: ${({ theme }) => theme.colors.primary.red};
  }
`;
