import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { PUITheme } from '../types';

export interface ThemeWrappedComponent {
  theme: PUITheme;
}

export const withTheme = <T extends ThemeWrappedComponent>(WrappedComponent: React.ComponentType<T>): React.FC<T> => {
  const ComponentWithTheme = (props: T): React.ReactElement<T> => {
    const theme = useTheme();
    return React.createElement<T>(WrappedComponent, {
      ...props,
      theme,
    });
  };

  ComponentWithTheme.displayName = `withTheme(${WrappedComponent.displayName || WrappedComponent.name || 'Component'})`;

  return ComponentWithTheme;
};
