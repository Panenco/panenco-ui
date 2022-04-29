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
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
  }

  .subtitle {
    color: ${(props: any): string => props.theme.colors.base700};
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
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
      border: 1px solid ${(props: any): string => props.theme.colors.base700};
      border-radius: 4px;
      font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
      background-color: transparent;
      &::placeholder {
        color: ${(props: any): string => props.theme.colors.base700};
      }

      &Error {
        border-color: ${(props: any): string => props.theme.colors.error};

        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
      }

      &Disabled {
        pointer-events: none;
        /* border-color: ${(props: any): string => props.theme.colors.base400}; */
        background-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.base700) : props.theme.colors.base400};
        opacity: 0.4;
      }

      &:hover {
        border-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.primary500};
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.base700 : props.theme.colors.base900};
      }

      &:focus {
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.base900};
        outline: 0;
        z-index: 10;
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
      }

      .errorLabel {
      }

      .hidden {
        visibility: hidden;
      }
    }
  }
`;
