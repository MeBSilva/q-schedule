import React from "react";
import Button from "../Button";

import * as S from "./styles";

export interface ModalProps {
  children?: React.ReactNode;
  cancelButtonContent?: string;
  onClickCancelButton?: () => void;
  onClickConfirmButton?: () => void;
  confirmButtonContent?: string;
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal = ({
  isOpen,
  toggleModal,
  children,
  onClickCancelButton,
  onClickConfirmButton,
  cancelButtonContent,
  confirmButtonContent,
}: ModalProps): React.ReactElement => (
  <S.ModalContainer isOpen={isOpen} onClick={() => toggleModal()}>
    <S.ModalContent onClick={(e) => e.stopPropagation()}>
      {children}
      <S.ModalButtonContainer>
        <Button styleType="secondary" onClick={onClickCancelButton}>
          {cancelButtonContent || "Cancel"}
        </Button>
        <Button styleType="secondary" onClick={onClickConfirmButton}>
          {confirmButtonContent || "Submit"}
        </Button>
      </S.ModalButtonContainer>
    </S.ModalContent>
  </S.ModalContainer>
);

export default Modal;
