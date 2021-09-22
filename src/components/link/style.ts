import { styled } from 'linaria/react';
import { Link } from 'react-router-dom';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledLink = styled(Link)<{
  theme: PUITheme;
  mode: ThemeMode;
  tabIndex?: number;
}>`
  color: ${(props: any): string => props.theme.colors.accent};
  padding: 3px;
  white-space: nowrap;

  &:hover {
    border-bottom: 1px dashed ${(props: any): string => props.theme.colors.accent};
  }

  &:focus {
    outline: 2px solid ${(props: any): string => props.theme.colors.outline};
    border-bottom: 1px dashed transparent;
  }

  &.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
