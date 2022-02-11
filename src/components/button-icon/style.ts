import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledButtonIcon = styled.button<{
  theme: PUITheme;
  mode: ThemeMode;
  to?: string;
}>`
  align-items: center;
  background-color: transparent;
  border: 1px solid transparent;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  outline: none;
  padding: 0;
  display: flex;
  justify-content: center;

  &:hover,
  &:active {
    & .iconClass,
    & .buttonIconTitle {
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary700};
    }
  }

  &:focus {
    outline: 2px solid ${(props: any): string => props.theme.colors.base900};
  }

  & .iconClass {
    color: ${(props: any): string => props.color || props.theme.colors.base700};
    display: flex;
    flex-shrink: 0;
    transition: 0.3s;
  }

  & .buttonIconTitle {
    color: ${(props: any): string => props.color || props.theme.colors.base700};
    font-weight: ${(props: any): string => props.theme.typography.weights.regular};
    font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
    line-height: ${(props: any): string => props.theme.typography.sizes.m.lineHeight};
    transition: 0.3s;
  }

  &.buttonIconLeft {
    flex-direction: row;
    & .iconClass {
      margin-right: 5px;
    }
  }
`;
