import { createContext } from 'react';

interface PopupContextInterface {
  onHide: (() => void) | undefined;
}

export const PopupContext = createContext<PopupContextInterface>({ onHide: undefined });
