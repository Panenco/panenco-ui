import * as React from 'react';
import { useTheme, useMode } from 'utils/hooks';
import { PUITheme, ThemeMode } from 'utils/types';

export interface ThemeWrappedComponent {
  theme: PUITheme;
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

export const withTheme = <T extends ThemeWrappedComponent>(
  WrappedComponent: React.ComponentType<T>,
): React.FC<T> => {
  const ComponentWithTheme = (props: T): React.ReactElement<T> => {
    const { mode, setMode } = useMode();
    const theme = useTheme();
    return React.createElement<T>(WrappedComponent, {
      ...props,
      theme,
      mode,
      setMode,
    });
  };

  ComponentWithTheme.displayName = `withTheme(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    'Component'})`;

  return ComponentWithTheme;
};
