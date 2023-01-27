import { createContext } from 'react';

interface PopupContextInterface {
  /**
   * Callback function to hide the popup.
   * */
  onHide: (() => void) | undefined;
}

export const PopupContext = createContext<PopupContextInterface>({ onHide: undefined });
