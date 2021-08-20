import { styled } from 'linaria/react';
import { Link } from 'react-router-dom';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledLink = styled(Link)<{
  theme: PUITheme;
  mode: ThemeMode;
  tabIndex?: number;
}>`
  padding: 3px;
  color: ${(props: any): string => props.theme.colors.accent};

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
