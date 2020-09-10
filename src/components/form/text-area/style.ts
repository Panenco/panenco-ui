import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { transparentize } from 'polished';
import { breakpoints } from 'styles';

export const StyledTextArea = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${(props: any): string =>
    props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};

  .title {
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
    margin-bottom: 4px;
    margin-right: 24px;
  }

  .subtitle {
    color: ${(props: any): string => props.theme.colors.secondary};
    margin-bottom: 4px;
    margin-right: 24px;
  }

  .withErrorWrapper {
    display: flex;
    align-items: flex-start;
    width: ${(props: any): string => {
      if (props.error) {
        return '100%';
      }
      return 'calc(100% - 24px)';
    }};

    &Icon {
      margin: 8px 0 0 8px;
      height: 16px;
      min-width: 16px;
      color: ${(props: any): string => props.theme.colors.error};
    }

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
      font-size: ${(props: any): string => props.theme.typography.sizes.s.textSize};
      background-color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};

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

  @media (max-width: ${breakpoints.l}) {
    .withErrorWrapper {
      width: 100%;
      &Icon {
        display: none;
      }
    }
    .title,
    .subtitle {
      margin-right: 0;
    }
  }
`;
