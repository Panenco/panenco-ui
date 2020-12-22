import { useContext } from 'react';
import { PUIThemeContext } from 'utils/context';
import { PUITheme, ThemeMode } from '../types';

export const useTheme = (): PUITheme => {
  const { theme } = useContext(PUIThemeContext);
  return theme;
};

export const useMode = (): { mode: ThemeMode; setMode: (mode: ThemeMode) => void } => {
  const { mode, setMode } = useContext(PUIThemeContext);
  return { mode, setMode };
};
