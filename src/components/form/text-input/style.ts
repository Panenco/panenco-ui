import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';
import { breakpoints } from 'styles';

export const StyledTextInput = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};

  .inputTitle {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
    margin-bottom: 4px;
    margin-right: 24px;
  }

  .inputSubtitle {
    color: ${(props: any): string => props.theme.colors.secondary};
    margin-bottom: 4px;
    margin-right: 24px;
  }

  .fieldWrapper {
    display: flex;
    align-items: center;
    width: ${(props: any): string => {
      if (props.error) {
        return '100%';
      }
      return 'calc(100% - 24px)';
    }};

    .inputField {
      width: 100%;
      display: flex;
      align-items: center;
      color: ${(props: any): string => props.theme.colors.secondary};
      border: 1px solid ${(props: any): string => props.theme.colors.secondary};
      border-radius: 4px;
      padding: 14px 16px;

      & .iconBefore {
        width: 16px;
        height: 16px;
        margin-right: 10px;
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      & .iconAfter {
        width: 16px;
        height: 16px;
        margin-left: 10px;
        color: ${(props: any): string => props.theme.colors.secondary};
      }

      & .input {
        width: 100%;
        border: none;
        color: ${(props: any): string =>
          props.mode === ThemeMode.dark ? props.theme.colors.secondary : props.theme.colors.primary};
        background-color: transparent;
        font-size: ${(props: any): string => props.theme.typography.sizes.s.textSize};

        &::placeholder {
          color: ${(props: any): string => props.theme.colors.secondary};
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
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.error};
    font-size: ${(props: any): string => props.theme.typography.sizes.xs.textSize};
    margin-top: 4px;
  }

  .errorIconWrapper {
    align-items: center;
    display: flex;
    min-width: 24px;
    padding-left: 8px;
    flex-shrink: 0;
  }

  .errorIcon {
    color: ${(props: any): string => props.theme.colors.error};
    height: 16px;
    width: 16px;
  }

  @media (max-width: ${breakpoints.l}) {
    .errorIconWrapper {
      display: none;
    }
    .fieldWrapper {
      width: 100%;
    }
    .inputTitle,
    .inputSubtitle {
      margin-right: 0;
    }
  }
`;
