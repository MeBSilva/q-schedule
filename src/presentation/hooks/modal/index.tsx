import React, { createContext, useContext, useState } from "react";

import { Modal } from "@/presentation/components";

import { ModalContextData, ModalOptions } from "./types";

const ModalContext = createContext<ModalContextData>({} as ModalContextData);

const ModalProvider = ({
  children,
}: React.PropsWithChildren): React.ReactElement => {
  const [isVisible, setIsVisible] = useState(false);
  const [modalOptions, setModalOptions] = useState({} as ModalOptions);

  const showModal = React.useCallback(
    (options: ModalOptions = {} as ModalOptions) => {
      setModalOptions(options);
      setIsVisible(true);
    },
    []
  );

  const hideModal = () => {
    setIsVisible(false);
  };

  return (
    <ModalContext.Provider
      value={{
        showModal,
        hideModal,
      }}
    >
      <Modal
        isOpen={isVisible}
        onClickCancelButton={hideModal}
        toggleModal={() => setIsVisible(!isVisible)}
        {...modalOptions}
      />
      {children}
    </ModalContext.Provider>
  );
};

const useModal = (): ModalContextData => {
  const context = useContext(ModalContext);

  if (!context || Object.keys(context).length < 1) {
    throw new Error("useModal must be used within a ModalProvider");
  }

  return context;
};

export { ModalProvider, useModal };
