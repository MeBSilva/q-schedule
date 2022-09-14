import { Container } from "@/presentation/styles";
import styled from "styled-components";
import Button from "../Button";

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  z-index: 2;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: fixed;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
`;

export const ModalContent = styled.div`
  background: ${({ theme }) => theme.colors.secondary.white};
  max-width: 50%;
  min-height: 20em;
  display: flex;
  flex-direction: column;
  flex: 1;
  border-radius: 10px;
  padding: 1em;
  color: rgba(0, 0, 139, 0.7);
`;

export const ModalButtonContainer = styled(Container)`
  flex-direction: row;
  justify-content: flex-end;
  flex: 0;
`;

export const ModalCancelButton = styled(Button)`
  background-color: red;
  padding: 0;
  min-width: 2em;
  min-height: 2em;

  > span {
    position: absolute;
    display: flex;
    width: 1em;
    border: 2px solid ${({ theme }) => theme.colors.secondary.white};
    border-radius: 2px;

    &:first-child {
      rotate: 50deg;
    }

    &:last-child {
      rotate: 310deg;
    }
  }
`;
