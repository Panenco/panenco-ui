import { styled } from 'linaria/react';
import { ThemeMode } from 'utils/types';
import { ToastContainer } from 'react-toastify';

export const StyledNotificationContainer = styled(ToastContainer)`
  padding: 0;
  width: 420px;
  color: ${(props: any): string => props.theme.colors.primary};

  .Toastify__toast {
    min-height: 74px;
    box-shadow: none;
    border: 1px solid ${(props: any): string => props.theme.colors.secondary};
    border-radius: 4px;
    position: relative;

    padding: 0;
    border-left: 4px solid ${(props: any): string => props.theme.colors.success};
    background-color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.dark : props.theme.colors.light};

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
    padding: 12px 16px 12px 8px;
    color: ${(props: any): string =>
      props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
    cursor: default;

    &--content {
      color: ${(props: any): string =>
        props.mode === ThemeMode.dark ? props.theme.colors.light : props.theme.colors.primary};
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
      color: ${(props: any): string => props.theme.colors.secondary};
      &--icon {
        width: 100%;
        height: 100%;
      }
      &:focus {
        outline: 2px solid ${(props: any): string => props.theme.colors.outline}
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
