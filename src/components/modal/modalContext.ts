import { createContext } from 'react';

interface ModalContextInterface {
  /**
   * Callback function to hide the modal.
   * */
  onHide: (() => void) | undefined;
}

export const ModalContext = createContext<ModalContextInterface>({ onHide: undefined });
