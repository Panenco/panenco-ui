import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

export const StyledChip = styled.button`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  transition: 0.3s;
  padding: 10px 15px;
  border-radius: 4px;
  background-color: ${(props: any): string => {
    if (props.mode === ThemeMode.dark) {
      return props.checked ? props.theme.colors.light : props.theme.colors.dark;
    }

    return props.checked ? props.theme.colors.accent : props.theme.colors.light;
  }};
  border: 1px solid
    ${(props: any): string => (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent)};
  color: ${(props: any): string => {
    if (props.mode === ThemeMode.dark) {
      return props.checked ? props.theme.colors.primary : props.theme.colors.light;
    }
    return props.checked ? props.theme.colors.light : props.theme.colors.accent;
  }};

  &:hover,
  &:active {
    background-color: ${(props: any): string => {
      if (props.mode === ThemeMode.dark) {
        return props.checked ? props.theme.colors.highlight : props.theme.colors.dark;
      }
      return props.checked ? props.theme.colors.hover : props.theme.colors.highlight;
    }};
    border: 1px solid
      ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.highlight : props.theme.colors.hover};
    .labelTitle {
      color: ${(props: any): string => {
        if (props.mode === ThemeMode.dark) {
          return props.checked ? props.theme.colors.primary : props.theme.colors.light;
        }
        return props.checked ? props.theme.colors.light : props.theme.colors.hover;
      }};
    }
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  .labelTitle {
    color: inherit;
  }

  & > svg {
    width: ${(props: any): string => (props.iconSize ? `${props.iconSize}px` : '16px')};
    height: ${(props: any): string => (props.iconSize ? `${props.iconSize}px` : '16px')};
    margin-left: 10px;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};
  }

  &.chipDisabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
