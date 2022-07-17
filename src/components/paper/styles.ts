import styled from 'styled-components';
import { ThemeMode, PUITheme } from '../../utils/types';

export const StyledPaper = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
}>`
  background-color: ${(props: any): string => {
    return props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100;
  }};
  border: 1px solid;
  border-color: ${(props: any): string => {
    return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base700;
  }};
  border-radius: 4px;
  padding: 24px;
`;
