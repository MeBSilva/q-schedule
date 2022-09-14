import styled, { keyframes } from "styled-components";

const spinner1 = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const spinner2 = keyframes`
  0% {
    transform: translate(0, 0);
  }

  100% {
    transform: translate(2.2em, 0);
  }  
`;

const spinner3 = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

type Spinner = {
  type: "primary" | "secondary";
};

export const Spinner = styled.div<Spinner>`
  display: flex;
  flex: 1;
  position: relative;
  min-width: 5em;
  min-height: 1em;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    width: 0.6em;
    height: 0.6em;
    border-radius: 50%;
    background: ${({ theme, type }) =>
      type === "primary"
        ? theme.colors.primary.blue
        : theme.colors.primary.white};
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      animation: ${spinner1} 0.5s infinite;
    }

    &:nth-child(2) {
      position: absolute;
      animation: ${spinner2} 0.5s infinite;
    }

    &:nth-child(3) {
      animation: ${spinner2} 0.5s infinite;
    }

    &:nth-child(4) {
      animation: ${spinner3} 0.5s infinite;
    }
  }
`;
