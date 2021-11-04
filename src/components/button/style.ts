import { styled } from 'linaria/react';
import { ButtonVariantType, PUITheme, ThemeMode } from 'utils/types';

export const StyledButton = styled.button<{
  theme: PUITheme;
  mode: ThemeMode;
  to?: string;
  variant?: ButtonVariantType;
  // as: HTMLElement;
}>`
  position: relative;
  border: 2px solid ${({ variant, theme: { colors } }: any): string =>
    variant === 'text' ? 'transparent' : colors.primary500};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px ${({ variant }: any): string => (variant === 'text' ? '0' : '22px')}};
  -webkit-appearance: none;
  min-height: 40px;
  border-radius: 4px;
  transition: 0.3s;
  font-weight: ${(props: any): any => props.theme.typography.weights.bold};
  background-color: ${({ variant, mode, theme: { colors } }: any): string =>
    variant === 'contained' ? colors.primary500 : 'transparent'};
  color:  ${({ variant, mode, color, theme: { colors } }: any): string =>
    color || (variant === 'contained' ? colors.base100 : colors.primary500)};
  cursor: pointer;
  overflow: hidden;

  .content {
    align-items: center;
    display: flex;
    justify-content: center;
    overflow: hidden;

    &Invisible {
      visibility: hidden;
    }
  }

  &:disabled {
    opacity: 0.4;
    pointer-events: none !important;
  }
  &.iconLeft {
    padding: 10px 22px 10px 16px;
  }
  &.iconRight {
    padding: 10px 16px 10px 22px;
  }

  &:focus {
    box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
    z-index: 10;
  }

  &:hover {
    color: ${({ variant, theme: { colors } }: any): string =>
      variant === 'contained' ? colors.base100 : colors.primary700};
    background-color: ${({ variant, theme: { colors } }: any): string =>
      variant === 'contained' ? colors.primary700 : 'transparent'};
    border-color: ${({ variant, theme: { colors } }: any): string =>
      variant === 'outlined' ? colors.primary700 : 'transparent'};
  }

  &:active {
    outline: none;
  }

  .buttonTitle {
    color: inherit;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
