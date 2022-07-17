import styled from 'styled-components';
// import { ReactChild } from 'react';
// import { ToastContainer, ToastContainerProps } from 'react-toastify';
import { ThemeMode, PUITheme } from 'utils/types';

export const StyledNotificationContainer = styled.div<{
  theme: PUITheme;
  mode: ThemeMode;
  className?: string;
}>`
  padding: 0;
  width: 420px;
  color: ${(props: any): string => props.theme.colors.base900};

  .body {
    display: flex;

    &Content {
      align-items: flex-start;
      display: flex;
      flex-direction: column;

      &Undo {
        background: transparent;
        border: none;
        border-bottom: 1px solid transparent;
        cursor: pointer;
        margin-top: 4px;

        &:hover {
          border-bottom: 1px solid ${(props: any): string => props.theme.colors.primary500};
          border-bottom-style: dashed;
        }

        &:focus {
          outline: 2px solid ${(props: any): string => props.theme.colors.base900};
        }
      }
    }
  }

  .Toastify__toast {
    min-height: 74px;
    box-shadow: none;
    border: 1px solid ${(props: any): string => props.theme.colors.base700};
    border-radius: 4px;
    position: relative;

    padding: 0;
    border-left: 4px solid ${(props: any): string => props.theme.colors.success};
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base900 : props.theme.colors.base100};

    &--info {
      border-left: 4px solid ${(props: any): string => props.theme.colors.base900};

      .Toastify__toast-body--icon {
        color: ${(props: any): string => props.theme.colors.base900};
      }
      .Toastify__progress-bar {
        background: ${(props: any): string => props.theme.colors.base900};
      }
    }
    &--warning {
      border-left: 4px solid ${(props: any): string => props.theme.colors.alert};

      .Toastify__toast-body--icon {
        color: ${(props: any): string => props.theme.colors.alert};
      }
      .Toastify__progress-bar {
        background: ${(props: any): string => props.theme.colors.alert};
      }
    }
    &--error {
      border-left: 4px solid ${(props: any): string => props.theme.colors.error};

      .Toastify__toast-body--icon {
        color: ${(props: any): string => props.theme.colors.error};
      }
      .Toastify__progress-bar {
        background: ${(props: any): string => props.theme.colors.error};
      }
    }
  }

  .Toastify__toast-body {
    display: flex;
    align-items: center;
    padding: 16px 16px 12px 16px;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    cursor: default;

    &--content {
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.base100 : props.theme.colors.base900};
    }

    &--icon {
      display: flex;
      flex-shrink: 0;
      width: 16px;
      height: 16px;
      color: ${(props: any): string => props.theme.colors.success};
      margin-right: 12px;
    }
  }

  .Toastify__close {
    &-button {
      flex-shrink: 0;
      background: transparent;
      outline: none;
      border: none;
      padding: 0;
      cursor: pointer;
      opacity: 0.7;
      transition: 0.3s ease;
      -ms-flex-item-align: start;
      align-self: flex-start;
      width: 16px;
      height: 16px;
      margin-right: 16px;
      margin-top: 16px;
      color: ${(props: any): string => props.theme.colors.base700};
      &--icon {
        width: 100%;
        height: 100%;
      }
      &:focus {
        outline: 2px solid ${(props: any): string => props.theme.colors.base900};
      }

      &:hover {
        color: ${(props: any): string => props.theme.colors.primary500};
      }
    }
  }
  .Toastify__progress-bar {
    opacity: 1;
    background: ${(props: any): string => props.theme.colors.success};
  }
  /* .Toastify__toast--error {
  }
  .Toastify__toast--warning {
  }
  .Toastify__toast--success {
  } */
`;
