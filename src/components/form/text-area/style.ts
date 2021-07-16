import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledTextArea = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .title {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
    margin-bottom: 4px;
  }

  .subtitle {
    color: ${(props: any): string => props.theme.colors.secondary};
    margin-bottom: 4px;
  }

  .withErrorWrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;

    &Content {
      width: 100%;
    }

    .input {
      resize: none;
      width: inherit;
      min-height: 86px;
      padding: 6px 12px;
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
      border: 1px solid ${(props: any): string => props.theme.colors.secondary};
      border-radius: 4px;
      font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
      background-color: transparent;
      &::placeholder {
        color: ${(props: any): string => props.theme.colors.secondary};
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
        border: 1px solid
          ${(props: any): string =>
            props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent};
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.primary};
      }

      &:focus {
        outline: 0;
        border-color: transparent;
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
      }
    }

    .counterWrapper {
      margin-top: 4px;
      display: flex;
      justify-content: space-between;
      font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
      position: absolute;
      bottom: -15px;
      width: 100%;

      .counter {
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      .errorLabel {
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
      }

      .hidden {
        visibility: hidden;
      }
    }
  }
`;
