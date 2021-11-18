import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';

export const StyledStepperInput = styled.div<{
  mode: ThemeMode;
  theme: PUITheme;
}>`
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  max-width: 160px;
  position: relative;

  .fieldWrapper {
    display: flex;
    width: 100%;
  }

  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type='number'] {
    -moz-appearance: textfield;
  }

  .stepperInput {
    border: none;
    border-bottom: 1px solid ${(props: any): string => props.theme.colors.base700};
    border-top: 1px solid ${(props: any): string => props.theme.colors.base700};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base700 : props.theme.colors.base900};
    text-align: center;
    width: 100%;

    &::placeholder {
      color: ${(props: any): string => props.theme.colors.base700};
    }
  }

  .stepperButton {
    align-items: center;
    background: transparent;
    border: 2px solid ${(props: any): string => props.theme.colors.primary500};
    cursor: pointer;
    display: flex;
    justify-content: center;
    height: 48px;
    min-width: 48px;

    &Decrement {
      border-radius: 4px 0 0 4px;
    }

    &Increment {
      border-radius: 0 4px 4px 0;
    }

    &Icon {
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.primary500};
    }

    &.disabled {
      opacity: 0.4;
      pointer-events: none !important;
    }

    &:hover {
      background: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.primary700};
      border: 2px solid ${(props: any): string => props.theme.colors.primary700};

      .stepperButtonIcon {
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100};
      }
    }

    &:focus {
      box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
    }
  }

  .inputTitle {
    color: ${(props: any): string => props.theme.colors.base700};
    margin-bottom: 4px;
  }

  .inputField {
    width: 100%;
    display: flex;
    align-items: center;
    color: ${(props: any): string => props.theme.colors.base700};
    border: 1px solid ${(props: any): string => props.theme.colors.base700};
    border-radius: 4px;
    position: relative;

    &Error {
      border-color: transparent;
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
      &:hover {
        box-shadow: none;
      }
    }

    &Disabled {
      pointer-events: none;
      opacity: 0.4;
    }

    &:hover {
      border: 1px solid
        ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};
    }

    &:focus-within {
      border-color: transparent;
      box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
    }
  }

  .inputError {
    bottom: -16px;
    display: flex;
    flex-direction: column;
    position: absolute;

    &Label {
      margin-top: 4px;
    }
  }
`;
