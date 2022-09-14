import React from "react";

import * as S from "./styles";

export interface ModalProps {
  children?: React.ReactNode;
  onClickCancelButton?: () => void;
  isOpen: boolean;
  toggleModal: () => void;
}

const Modal = ({
  isOpen,
  toggleModal,
  children,
  onClickCancelButton,
}: ModalProps): React.ReactElement => (
  <S.ModalContainer isOpen={isOpen} onClick={() => toggleModal()}>
    <S.ModalContent onClick={(e) => e.stopPropagation()}>
      <S.ModalButtonContainer>
        <S.ModalCancelButton onClick={onClickCancelButton}>
          <span />
          <span />
        </S.ModalCancelButton>
      </S.ModalButtonContainer>
      {children}
    </S.ModalContent>
  </S.ModalContainer>
);

export default Modal;
