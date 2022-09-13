import { ModalProps } from "@/presentation/components/Modal";

type ModalOptions = Partial<ModalProps>;

type ModalContextData = {
  showModal: (options?: ModalOptions) => void;
  hideModal: () => void;
};

export type { ModalContextData, ModalOptions };
