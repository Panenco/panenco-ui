import { styled } from 'linaria/react';
import { transparentize } from 'polished';
import { ThemeMode } from 'utils/types';

export const StyledStepperInput = styled.div`
  box-sizing: border-box;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  max-width: 160px;
  position: relative;

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
    border-bottom: 1px solid ${(props: any): string => props.theme.colors.border500};
    border-top: 1px solid ${(props: any): string => props.theme.colors.border500};
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.primary};
    text-align: center;
    width: 100%;

    &::placeholder {
      color: ${(props: any): string => props.theme.colors.secondary};
    }
  }

  .stepperButton {
    align-items: center;
    background: ${(props: any): string => props.theme.colors.accent500};
    border: none;
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
        props.mode === ThemeMode.dark ? props.theme.colors.primary : props.theme.colors.light};
    }

    &.disabled {
      opacity: 0.4;
      pointer-events: none !important;
    }
  }

  .inputTitle {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
    margin-bottom: 4px;
  }

  .inputSubtitle {
    color: ${(props: any): string => props.theme.colors.secondary};
    margin-bottom: 4px;
  }

  .fieldWrapper {
    display: flex;
    width: 100%;

    .inputField {
      width: 100%;
      display: flex;
      align-items: center;
      color: ${(props: any): string => props.theme.colors.secondary};
      border: 1px solid ${(props: any): string => props.theme.colors.secondary};
      border-radius: 4px;
      position: relative;

      &Error {
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.error};
        border-color: transparent;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
        &:hover {
          box-shadow: none;
        }
      }

      &Disabled {
        pointer-events: none;
        /* border-color: ${(props: any): string => props.theme.colors.border}; */
        background-color: ${(props: any): string =>
          props.mode === ThemeMode.dark
            ? transparentize(0.4, props.theme.colors.secondary)
            : props.theme.colors.border};
        opacity: 0.4;
      }

      &:hover {
        border: 1px solid
          ${(props: any): string =>
            props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
      }

      &:focus-within {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
      }
    }
  }

  .inputError {
    bottom: -20px;
    display: flex;
    flex-direction: column;
    position: absolute;

    &Label {
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
      font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
      margin-top: 4px;
    }
  }
`;
