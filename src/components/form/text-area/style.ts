import { styled } from 'linaria/react';
import { PUITheme, ThemeMode } from 'utils/types';
import { transparentize } from 'polished';

export const StyledTextArea = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  loading?: boolean;
  isDragActive?: boolean;
  error?: string;
}>`
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: transparent;

  .title {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
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
      display: flex;
      flex-direction: column;
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
        border: 2px solid ${(props: any): string => props.theme.colors.error};

        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};

        .input {
          margin: -2px;
        }

        &:hover {
          padding: 7px 13px;
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
      bottom: -16px;
      display: flex;
      justify-content: space-between;
      font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
      position: absolute;
      width: 100%;

      .counter {
        color: ${(props: any): string => props.theme.colors.secondary};
        line-height: 1.3;
      }

      .errorLabel {
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
        line-height: 1.3;
      }

      .hidden {
        visibility: hidden;
      }
    }
  }
`;
