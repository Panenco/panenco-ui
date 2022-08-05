import * as React from 'react';
import defaultTheme from 'themes/default';

import { PUITheme } from '../types';

export type PUIThemeContext = {
  theme: PUITheme;
};

export const PUIThemeContext = React.createContext<PUIThemeContext>({
  theme: defaultTheme,
});
