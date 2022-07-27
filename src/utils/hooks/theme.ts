import { useContext } from 'react';
import { PUIThemeContext } from 'utils/context';
import { PUITheme } from '../types';

export const useTheme = (): PUITheme => {
  const { theme } = useContext(PUIThemeContext);
  return theme;
};
