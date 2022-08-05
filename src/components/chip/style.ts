import styled from 'styled-components';
import { PUITheme } from 'utils/types';

export const StyledChip = styled.button<{
  checked?: boolean;
  theme: PUITheme;
  iconSize?: number | string;
}>`
  align-items: center;
  cursor: pointer;
  display: flex;
  justify-content: center;
  position: relative;
  transition: 0.3s;
  padding: 3px 11px;
  border-radius: 4px;
  background-color: ${(props: any): string => {
    return props.checked ? props.theme.colors.primary500 : props.theme.colors.base100;
  }};
  border: 1px solid ${(props: any): string => props.theme.colors.primary500};
  color: ${(props: any): string => {
    return props.checked ? props.theme.colors.base100 : props.theme.colors.primary500;
  }};

  &:hover,
  &:active {
    background-color: ${(props: any): string => {
      return props.checked ? props.theme.colors.primary700 : props.theme.colors.primary200;
    }};
    border: 1px solid ${(props: any): string => props.theme.colors.primary700};
    .labelTitle {
      color: ${(props: any): string => {
        return props.checked ? props.theme.colors.base100 : props.theme.colors.primary700;
      }};
    }
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
  }

  .labelTitle {
    color: inherit;
    line-height: 16px;
  }

  .svg {
    width: 16px;
    height: 16px;
    margin-left: 10px;
  }

  &.chipDisabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
