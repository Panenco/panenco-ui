import { Icon, Text } from 'index';
import * as React from 'react';
import { toast as toastify, ToastContainerProps } from 'react-toastify';
import { colors, sizes } from 'styles';
import { useMode, useTheme } from 'utils/hooks';

import { StyledNotificationContainer } from './style';

export type NotificationContainerProps = ToastContainerProps & { undo: any };

const CloseButton = ({ closeToast }: any): JSX.Element => {
  return (
    <button type="button" className="Toastify__close-button" onClick={closeToast}>
      <Icon icon={Icon.icons.delete} className="Toastify__close-button--icon" />
    </button>
  );
};

const NotifyBody = ({ children, status, undo, closeToast }: any): JSX.Element => {
  let icon = Icon.icons.success;
  if (status === toastify.TYPE.ERROR) {
    icon = Icon.icons.close;
  }

  if (status === toastify.TYPE.INFO || status === toastify.TYPE.WARNING) {
    icon = Icon.icons.info;
  }

  const handleUndo = (): void => {
    undo();
    closeToast();
  };

  return (
    <div className="body">
      <Icon icon={icon} className="Toastify__toast-body--icon" />
      <div className="bodyContent">
        {typeof children === 'string' ? <Text className="Toastify__toast-body--content">{children}</Text> : children}

        {undo ? (
          <button className="bodyContentUndo" onClick={handleUndo} type="button">
            <Text size={sizes.m} color={colors.accent500}>
              Undo
            </Text>
          </button>
        ) : null}
      </div>
    </div>
  );
};

const baseOptions = {
  closeButton: <CloseButton />,
  draggable: false,
  closeOnClick: false,
  onChange: (): void => {},
  // progress: 1,
  // autoClose: false as false,
  hideProgressBar: true,
};

export const toast = (content: string | React.ReactNode | { (): void }, options): number | string => {
  const renderToast = toastify(<NotifyBody options={options}>{content}</NotifyBody>, {
    ...baseOptions,
    ...options,
  });

  return renderToast;
};

toast.isActive = toastify.isActive;
toast.dismiss = toastify.dismiss;
toast.onChange = toastify.onChange;
toast.update = toastify.update; // should be check
toast.done = toastify.done; // should be check
toast.configure = toastify.configure;
toast.TYPE = toastify.TYPE;
toast.POSITION = toastify.POSITION;

/* eslint-disable */
for (const t in toastify.TYPE) {
  const status = toastify.TYPE[t].toLowerCase();
  if (toast.TYPE[t] !== toast.TYPE.DEFAULT) {
    toast[status] = (content, options) =>
      toastify[status](
        <NotifyBody status={status} undo={options?.undo}>
          {content}
        </NotifyBody>,
        {
          ...baseOptions,
          ...options,
        },
      );
  }
}
/* eslint-enable */

export const NotificationContainer = ({ className, ...props }: ToastContainerProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();
  return <StyledNotificationContainer theme={theme} mode={mode} className={className} {...props} />;
};
