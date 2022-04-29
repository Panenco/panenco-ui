import { PUITheme, ThemeMode } from 'utils/types';
import { styled } from 'linaria/react';
import { transparentize } from 'polished';

export const StyledFileUploader = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  disabled?: boolean;
  loading?: boolean;
  hasContent?: boolean;
  error?: string;
}>`
  width: 100%;
  display: flex;
  flex-direction: column;

  pointer-events: ${(props: any): string => (props.disabled ? 'none' : 'auto')};
  opacity: ${(props: any): string | number => (props.disabled ? 0.4 : 1)};

  .title {
    padding-left: 2px;
    margin-bottom: 4px;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
  }

  .uploader {
    align-items: center;
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? transparentize(0.4, props.theme.colors.base700) : props.theme.colors.base300};
    border-radius: 4px;
    border: 1px solid #757575;
    display: flex;
    height: 48px;
    justify-content: space-between;
    position: relative;
    transition: 0.3s;
    width: 100%;

    &Error {
      border: 2px solid ${(props: any): string => props.error && props.theme.colors.error};
    }

    &:hover {
      cursor: ${(props: any): string => (props.loading ? 'auto' : 'pointer')};
    }

    &Input {
      width: 0.1px;
      height: 0.1px;
      opacity: 0;
      overflow: hidden;
      position: absolute;
      z-index: -1;
    }

    &Btn {
      margin-right: -1px;
    }

    .placeholderBox,
    .placeholderBoxError {
      display: flex;
      justify-content: space-between;
      flex-grow: 1;
      overflow: hidden;
      height: 100%;
      align-items: center;
      border: 2px solid transparent;
      border-radius: 4px 0 0 4px;

      &:focus-within {
        border: 2px solid ${(props: any): string => props.theme.colors.base900};
        border-right-color: transparent;
      }

      &Title {
        color: ${(props: any): string => {
          if (props.hasContent) {
            return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900;
          }
          return props.theme.colors.base700;
        }};
        white-space: nowrap;
        overflow: hidden;
        margin-right: 20px;
        text-overflow: ellipsis;
        padding-left: 20px;
      }

      &Icon {
        display: flex;
        flex-shrink: 0;
        width: 16px;
        height: 16px;
        color: ${(props: any): string => {
          if (props.error) {
            return props.theme.colors.error;
          }
          return props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base700;
        }};
        margin-right: 16px;
        > div {
          display: inherit;
          align-items: center;
          justify-content: center;
        }
      }
    }
  }
  .error {
    margin-left: 2px;
  }
`;
