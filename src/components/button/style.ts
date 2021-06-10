import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';

const getBackgroundColor = (variant: any, mode: ThemeMode, darkColor: string, lightColor: string): string => {
  if (variant === 'transparent') return 'transparent';
  if (mode === ThemeMode.dark) return darkColor;
  return lightColor;
};

export const StyledButton = styled.button`
  position: relative;
  border: 2px solid transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 14px 22px;
  -webkit-appearance: none;

  min-height: 40px;
  border-radius: 4px;
  transition: 0.3s;
  font-weight: ${(props: any): any => props.theme.typography.weights.bold};
  background-color: ${({ variant, mode, theme: { colors } }: any): string =>
    getBackgroundColor(variant, mode, colors.dark, colors.light)};
  color: ${(props: any): string =>
    props.color || (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500)};
  cursor: pointer;

  .content {
    align-items: center;
    display: flex;
    justify-content: center;

    &Invisible {
      visibility: hidden;
    }
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none !important;
  }
  &.iconLeft {
    padding: 14px 22px 14px 16px;
  }
  &.iconRight {
    padding: 14px 16px 14px 22px;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
  }

  &:hover {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
  }

  &:active {
    outline: none;
  }

  .buttonTitle {
    color: inherit;
  }

  .buttonIcon {
    &Right {
      margin-left: 8px;
    }

    &Left {
      margin-right: 8px;
    }

    &Default {
      right: 8px;
    }
  }

  &.buttonPrimary {
    background-color: ${({ variant, mode, theme: { colors } }: any): string =>
      getBackgroundColor(variant, mode, colors.light, colors.accent500)};

    color: ${(props: any): string =>
      props.color || (props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light)};

    &:hover {
      background-color: ${({ variant, mode, theme: { colors } }: any): string =>
        getBackgroundColor(variant, mode, colors.background50, colors.hover700)};
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};
    }

    &:active {
      background-color: ${({ variant, mode, theme: { colors } }: any): string =>
        getBackgroundColor(variant, mode, colors.background50, colors.hover700)};
    }
  }

  &.buttonSecondary {
    border: 2px solid
      ${(props: any): string => {
        return props.color || (props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500);
      }};

    &:hover {
      border: 2px solid
        ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.background50 : props.theme.colors.hover700};
      background-color: ${({ variant, mode, theme: { colors } }: any): string =>
        getBackgroundColor(variant, mode, colors.dark, colors.background50)};
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.hover700};
    }

    &:active {
      background-color: ${({ variant, mode, theme: { colors } }: any): string =>
        getBackgroundColor(variant, mode, colors.dark, colors.background50)};
    }
  }

  @keyframes load-animation {
    0% {
      -webkit-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    100% {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }

  .spinner {
    position: absolute;
    left: 50%;
    top: 50%;
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: -10px;
    margin-top: -10px;
    text-indent: -9999em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
    -webkit-animation: load-animation 2s infinite linear;
    animation: load-animation 2s infinite linear;
    border-top-color: rgba(black, 0.2);
    border-right-color: rgba(black, 0.2);
    border-bottom-color: rgba(black, 0.2);
    border-left-color: white;
  }
`;
