// import { PUITheme, ThemeMode } from 'utils/types';
import { styled } from 'linaria/react';

export const StyledFirstDisableOption = styled.div`
  color: ${(props: any): string => props.theme.colors.secondary};
  background-color: ${(props: any): string => props.theme.colors.border};
  padding: 18px 0 18px 25px;
`;
