import { useContext } from 'react';
import { PUITheme, ThemeMode } from 'utils/types';
import { PUIThemeContext } from 'utils/context';

export const useTheme = (): PUITheme => {
  const { theme } = useContext(PUIThemeContext);
  return theme;
};

export const useMode = (): { mode: ThemeMode; setMode: (mode: ThemeMode) => void } => {
  const { mode, setMode } = useContext(PUIThemeContext);
  return { mode, setMode };
};
