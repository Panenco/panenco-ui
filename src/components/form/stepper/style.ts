import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledStepper = styled.div`
  display: flex;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;
  flex-direction: column;

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
    align-items: center;
    width: 164px;
    height: 48px;

    .inputField {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      color: ${(props: any): string => props.theme.colors.secondary};
      border-radius: 4px;
      position: relative;

      & .input {
        width: 100%;
        height: 100%;
        border: none;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.primary};
        background-color: transparent;
        font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
        padding: 12px 16px;
        padding-left: ${(props: any): string => {
          if (props.iconBefore) return '40px';
          return '16px';
        }};
        padding-right: ${(props: any): string => {
          if (props.iconAfter) return '40px';
          return '16px';
        }};
        text-align: center;
        border-top: 1px solid ${(props: any): string => props.theme.colors.secondary};
        border-bottom: 1px solid ${(props: any): string => props.theme.colors.secondary};

        &::placeholder {
          color: ${(props: any): string => props.theme.colors.secondary};
        }

        &:hover {
          border-color: ${(props: any): string =>
            props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
        }
      }

      & .button {
        height: 100%;
        width: 170px;
        box-sizing: border-box;
        background-color: ${(props: any): string => {
          if (props.mode === ThemeMode.dark) {
            return props.checked ? props.theme.colors.primary : props.theme.colors.light;
          }
          return props.checked ? props.theme.colors.light : props.theme.colors.accent500;
        }};
        border: 1px solid
          ${(props: any): string =>
            props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
        color: ${(props: any): string => {
          if (props.mode === ThemeMode.dark) {
            return props.checked ? props.theme.colors.light : props.theme.colors.dark;
          }

          return props.checked ? props.theme.colors.accent500 : props.theme.colors.light;
        }};
        cursor: pointer;

        &.buttonMinus {
          border-radius: 4px 0 0 4px;
        }

        &.buttonPlus {
          border-radius: 0 4px 4px 0;
        }
      }

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
        border: 0px solid
          ${(props: any): string =>
            props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent500};
      }

      &:focus-within {
        border-color: transparent;
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
      }
    }
  }

  .inputErrorLabel {
    position: absolute;
    bottom: -20px;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
    font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
    margin-top: 4px;
  }
`;
