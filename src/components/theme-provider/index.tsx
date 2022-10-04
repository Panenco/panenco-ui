/* eslint-disable react/require-default-props */
import * as React from 'react';
import defaultTheme from 'themes/default';
import { PUIThemeContext } from 'utils/context';
import { PUITheme } from 'utils/types';

interface ThemeProviderProps {
  children: React.ReactNode;
  /**
   * By default, the styles are injected last in the <head> element of the page.
   * As a result, they gain more specificity than any other style sheet.
   * If you don't want to override PUI's styles, set this prop to false.
   */
  injectStylesFirst?: boolean;
  theme?: PUITheme;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({
  children,
  theme: themeToUse = defaultTheme,
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

  const theme = {
    ...themeToUse,
    colors: new Proxy(themeToUse.colors, {
      get(target, prop: string, receiver): string {
        return Reflect.get(target, prop, receiver);
      },
    }),
  };

  return <PUIThemeContext.Provider value={{ theme }}>{children}</PUIThemeContext.Provider>;
};
