import { createContext } from 'react';

interface PopupContextInterface {
  onHide: () => void;
}

export const PopupContext = createContext<PopupContextInterface | null>(null);
