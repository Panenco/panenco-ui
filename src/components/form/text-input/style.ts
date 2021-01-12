import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;

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
    width: 100%;

    .inputField {
      width: 100%;
      display: flex;
      align-items: center;
      color: ${(props: any): string => props.theme.colors.secondary};
      border: 1px solid ${(props: any): string => props.theme.colors.secondary};
      border-radius: 4px;

      & .iconBefore {
        width: 16px;
        height: 16px;
        margin-left: 16px;
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      & .iconAfter {
        width: 16px;
        height: 16px;
        margin-right: 16px;
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      & .input {
        width: 100%;
        border: none;
        border-radius: 4px;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.primary};
        background-color: transparent;
        font-size: ${(props: any): string => props.theme.typography.sizes.s.textSize};

        &::placeholder {
          color: ${(props: any): string => props.theme.colors.secondary};
        }
        padding: 14px 16px;
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
        border-color: ${(props: any): string => props.theme.colors.border};
        background-color: ${(props: any): string =>
          props.mode === ThemeMode.dark
            ? transparentize(0.4, props.theme.colors.secondary)
            : props.theme.colors.border};
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

  .inputErrorLabel {
    position: absolute;
    bottom: -20px;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
    font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
    margin-top: 4px;
  }
`;
