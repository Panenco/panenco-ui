import * as React from 'react';
import defaultTheme from 'themes/default';

import { PUITheme, ThemeMode } from '../types';

export type PUIThemeContext = {
  theme: PUITheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
};

export const PUIThemeContext = React.createContext<PUIThemeContext>({
  theme: defaultTheme,
  mode: ThemeMode.light,
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  setMode: (mode: ThemeMode) => {},
});
