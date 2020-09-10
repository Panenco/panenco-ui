import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

export const StyledButtonIcon = styled.button`
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
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover700};
    }
  }

  &:focus {
    outline: 2px solid ${(props: any): string => props.theme.colors.outline};
  }

  & .iconClass {
    color: ${(props: any): string => props.theme.colors.secondary};
    height: 15px;
    width: 15px;
    transition: 0.3s;
  }

  & .buttonIconTitle {
    color: ${(props: any): string => props.theme.colors.secondary};
    font-weight: ${(props: any): string => props.theme.typography.weights.regular};
    font-size: ${(props: any): string => props.theme.typography.sizes.s.textSize};
    line-height: ${(props: any): string => props.theme.typography.sizes.s.lineHeight};
    transition: 0.3s;
  }

  &.buttonIconLeft {
    flex-direction: row;

    & .container {
      margin-bottom: 0;
      margin-right: 5px;
    }
  }
`;
