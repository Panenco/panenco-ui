import styled from 'styled-components';

export const StyledCheckbox = styled.div<{
  borderColor?: string;
  borderWidth?: string | number;
  color?: string;
}>`
  position: relative;

  & .label {
    align-items: center;
    display: flex;
    position: relative;

    &:focus-within {
      & .container {
        box-shadow: 0px 0px 0px 2px ${({ theme }) => theme.colors.base900};
      }
    }

    &:hover {
      cursor: pointer;

      .container {
        border: ${({ borderWidth }) => {
            if (borderWidth) {
              return `${borderWidth}px`;
            }
            return '2px';
          }}
          solid
          ${({ color, theme }) => {
            if (color) {
              return color;
            }
            return theme.colors.primary700;
          }};
      }

      .container.error {
        border-color: ${({ theme }) => {
          return theme.colors.error;
        }};
      }
    }

    &.labelDisabled {
      opacity: 0.4;
      pointer-events: none;
    }

    .labelTitle {
      align-items: center;
      display: flex;
      margin-left: 8px;
      vertical-align: middle;
      color: ${({ theme }) => theme.colors.base900};
    }
  }

  .error {
    position: absolute;
    left: 28px;
    color: ${({ theme }) => theme.colors.error};
  }

  .checkbox {
    border: none;
    height: 20px;
    margin: 0;
    opacity: 0;
    position: absolute;
    width: 20px;
  }

  .container.error {
    position: relative;
    left: unset;
    color: unset;
    border-color: ${({ theme }) => theme.colors.error};
  }

  .container {
    background-color: transparent;
    border: ${({ borderWidth }) => {
        if (borderWidth) {
          return `${borderWidth}px`;
        }
        return '2px';
      }}
      solid
      ${({ borderColor, theme }) => {
        if (borderColor) {
          return borderColor;
        }
        return theme.colors.base700;
      }};
    border-radius: 4px;
    box-sizing: border-box;
    position: relative;
    vertical-align: middle;
    width: 20px;
    height: 20px;
    display: flex;
    flex-shrink: 0;

    .checkbox {
      border: none;
      height: 20px;
      margin: 0;
      opacity: 0;
      position: absolute;
      width: 20px;
    }
  }

  .tick {
    color: ${({ theme }) => theme.colors.base100};
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
  }

  & .checkbox:checked + .container {
    background-color: ${({ color, theme }) => {
      if (color) {
        return color;
      }
      return theme.colors.primary500;
    }};
    border: ${({ borderWidth }) => {
        if (borderWidth) {
          return `${borderWidth}px`;
        }
        return '2px';
      }}
      solid
      ${({ color, theme }) => {
        if (color) {
          return color;
        }
        return theme.colors.primary500;
      }};
  }

  & .checkbox:checked + .container.error {
    background-color: ${({ theme }) => {
      return theme.colors.error;
    }};
    border-color: ${({ theme }) => {
      return theme.colors.error;
    }};
  }

  & .checkbox:checked {
    &:hover,
    &:active {
      & + .container {
        background-color: ${({ color, theme }) => {
          if (color) {
            return color;
          }
          return theme.colors.primary700;
        }};
        border: ${({ borderWidth }) => {
            if (borderWidth) {
              return `${borderWidth}px`;
            }
            return '2px';
          }}
          solid
          ${({ color, theme }) => {
            if (color) {
              return color;
            }
            return theme.colors.primary700;
          }};
      }

      & + .container.error {
        background-color: ${({ theme }) => {
          return theme.colors.error;
        }};
        border-color: ${({ theme }) => {
          return theme.colors.error;
        }};
      }
    }
  }
`;
