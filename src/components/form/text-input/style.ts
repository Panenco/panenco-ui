import { styled } from 'linaria/react';
import { ThemeMode, PUITheme } from 'utils/types';
import { transparentize } from 'polished';

export const StyledTextInput = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  error;
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
}>`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: transparent;
  position: relative;

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
      position: relative;

      & .iconBefore {
        position: absolute;
        left: 16px;
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      & .iconAfter {
        position: absolute;
        right: 16px;
        top: calc(50% - 8px);
        width: 16px;
        height: 16px;
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      & .input {
        width: 100%;
        border: none;
        border-radius: 4px;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.primary};
        background-color: transparent;
        font-size: ${(props: any): string => props.theme.typography.sizes.m.textSize};
        padding: 13px 16px;
        padding-left: ${(props: any): string => {
          if (props.iconBefore) return '40px';
          return '16px';
        }};
        padding-right: ${(props: any): string => {
          if (props.iconAfter) return '40px';
          return '16px';
        }};

        &::placeholder {
          color: ${(props: any): string => props.theme.colors.secondary};
        }
      }

      &Error {
        border-color: ${(props: any): string => props.theme.colors.error};
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
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
        border-color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.accent};
      }

      &:focus-within {
        box-shadow: 0 0 0 2px ${(props: any): string => props.theme.colors.outline};
      }
    }
  }

  .inputTitle {
    color: ${(props: any): string => props.theme.colors.primary};
  }

  .inputSubtitle {
    color: ${(props: any): string => props.theme.colors.secondary};
    margin-bottom: 4px;
  }

  .inputErrorLabel {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
    font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
    height: 16px;
    line-height: 1.3;
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

    .hidden {
      visibility: hidden;
    }
  }
`;
