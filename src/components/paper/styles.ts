import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from '../../utils/types';

export const StyledPaper = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
}>`
  background-color: ${(props: any): string => {
    return props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light;
  }};
  border: 1px solid;
  border-color: ${(props: any): string => {
    return props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.secondary;
  }};
  border-radius: 4px;
  padding: 24px;
`;
