import { Container } from "@/presentation/styles";
import styled from "styled-components";

export const ModalContainer = styled.div<{ isOpen: boolean }>`
  z-index: 2;
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
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
  justify-content: space-evenly;
  flex: 0;
  margin-top: auto;
`;
