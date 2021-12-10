import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';

export const StyledRadio = styled.label<{
  theme: PUITheme;
  mode: ThemeMode;
  error;
  pointColor?: string;
}>`
  .label {
    position: relative;
    display: flex;
    width: 100%;
    align-items: center;

    &Disabled {
      opacity: 0.4;
      pointer-events: none;
    }

    &Title {
      cursor: pointer;
      padding-left: 8px;
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }

    &:focus-within {
      & .container {
        box-shadow: 0px 0px 0px 2px ${(props: any): string => props.theme.colors.base900};
      }
    }

    & .point {
      background-color: ${(props: any): string => {
        if (props.pointColor) {
          return props.pointColor;
        }
        if (props.error) {
          return props.theme.colors.error;
        }
        return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500;
      }};
      border-radius: 50%;
      height: 10px;
      left: 50%;
      opacity: 0;
      position: absolute;
      top: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s;
      width: 10px;
    }

    &:hover,
    &:active {
      .container {
        transition: 0.3s;
        border-color: ${(props: any): string => {
          if (props.pointColor) {
            return props.pointColor;
          }
          if (props.error) {
            return props.theme.colors.error;
          }
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500;
        }};
      }
    }

    .container {
      background-color: transparent;
      border: 2px solid ${(props: any): string => props.pointColor || props.theme.colors.base700};
      border-radius: 50%;
      cursor: pointer;
      display: flex;
      flex-shrink: 0;
      height: 20px;
      position: relative;
      width: 20px;
      transition: 0.3s;

      &.error {
        border-color: ${(props: any): string => {
          return props.theme.colors.error;
        }};
      }
    }

    .radiobox {
      border: none;
      cursor: pointer;
      height: 16px;
      margin: 0;
      opacity: 0;
      position: absolute;
      width: 16px;
    }

    .radiobox:checked + .container {
      border: 2px solid
        ${(props: any): string => {
          if (props.pointColor) {
            return props.pointColor;
          }
          if (props.error) {
            return props.theme.colors.error;
          }
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500;
        }};
    }

    .radiobox:checked + .container > .point {
      opacity: 1;
    }

    .radiobox:checked {
      &:hover,
      &:active {
        & + .container {
          border: 2px solid
            ${(props: any): string => {
              if (props.pointColor) {
                return props.pointColor;
              }
              if (props.error) {
                return props.theme.colors.error;
              }
              return props.mode === ThemeMode.dark ? props.theme.colors.primary200 : props.theme.colors.primary700;
            }};

          & > .point {
            background-color: ${(props: any): string => {
              if (props.pointColor) {
                return props.pointColor;
              }
              if (props.error) {
                return props.theme.colors.error;
              }
              return props.mode === ThemeMode.dark ? props.theme.colors.primary200 : props.theme.colors.primary700;
            }};
          }
        }
      }
    }
  }

  .errorTitle {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.error};
    margin-left: 28px;
    margin-top: 5px;
  }
`;
