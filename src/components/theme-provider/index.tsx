/* eslint-disable react/require-default-props */
import * as React from 'react';
import defaultTheme from 'themes/default';
import { PUIThemeContext } from 'utils/context';
import { PUITheme, ThemeMode } from 'utils/types';

interface ThemeProviderProps {
  children: React.ReactNode;
  theme?: PUITheme;
  mode?: ThemeMode;
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you don't want to override PUI's styles, set this prop to false.
   */
  injectStylesFirst?: boolean;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: themeToUse = defaultTheme,
  mode: initialMode = ThemeMode.light,
  injectStylesFirst = true,
}: ThemeProviderProps) => {
  if (injectStylesFirst && typeof window !== 'undefined') {
    const { head } = document;
    if (!head.querySelector('[data-styled="active"]')) {
      const injectFirstNode = document.createElement('style');
      injectFirstNode.setAttribute('data-styled', 'active');
      head.insertBefore(injectFirstNode, head.firstChild);
    }
  }

  const [mode, setMode] = React.useState(initialMode);

  const theme = {
    ...themeToUse,
    colors: new Proxy(themeToUse.colors, {
      get(target, prop: string, receiver): string {
        if (target[`${mode}Mode`][prop]) {
          return target[`${mode}Mode`][prop];
        }
        return Reflect.get(target, prop, receiver);
      },
    }),
  };

  return <PUIThemeContext.Provider value={{ theme, mode, setMode }}>{children}</PUIThemeContext.Provider>;
};
