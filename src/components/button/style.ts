import { darken } from 'polished';
import styled from 'styled-components';
import { ButtonVariantType } from 'utils/types';

export const StyledButton = styled.button<{
  color?: string;
  to?: string;
  variant?: ButtonVariantType;
}>`
  position: relative;
  border: 2px solid
    ${({ variant, color, theme: { colors } }): string =>
      variant === 'text' ? 'transparent' : color || colors.primary500};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px ${({ variant }): string => (variant === 'text' ? '0' : '22px')};
  -webkit-appearance: none;
  min-height: 40px;
  border-radius: 4px;
  transition: 0.3s;
  font-weight: ${({ theme }) => theme.typography.weights.bold};
  background-color: ${({ variant, color, theme: { colors } }): string =>
    variant === 'contained' ? color || colors.primary500 : 'transparent'};
  color: ${({ variant, color, theme: { colors } }): string =>
    variant === 'contained' ? colors.base100 : color || colors.primary500};
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

  &:disabled,
  &.isDisabled {
    opacity: 0.4;
    pointer-events: none !important;
  }
  &.iconLeft {
    padding: 10px 22px 10px 16px;
  }
  &.iconRight {
    padding: 10px 16px 10px 22px;
  }

  &:focus-visible {
    box-shadow: 0 0 0 2px ${({ theme }): string => theme.colors.base900};
    z-index: 10;
  }

  &:hover {
    color: ${({ variant, color, theme: { colors } }): string =>
      variant === 'contained' ? colors.base100 : (color && darken(0.1, color)) || colors.primary700};
    background-color: ${({ variant, color, theme: { colors } }): string =>
      variant === 'contained' ? (color && darken(0.1, color)) || colors.primary700 : 'transparent'};
    border-color: ${({ variant, color, theme: { colors } }): string =>
      variant === 'outlined' ? (color && darken(0.1, color)) || colors.primary700 : 'transparent'};
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
