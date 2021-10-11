import { Icon, Text } from 'index';
import * as React from 'react';
import {
  toast as toastify,
  ToastContainer,
  ToastOptions,
  ToastContainerProps,
  ToastContent,
  ToastContentProps,
  TypeOptions,
} from 'react-toastify';
import { colors, sizes } from 'styles';
import { useMode, useTheme } from 'utils/hooks';
import 'react-toastify/dist/ReactToastify.css';

import { StyledNotificationContainer } from './style';

type AdditionalOptions = { undo?: () => void; icon?: string };

export type NotificationContainerProps = ToastContainerProps & { className?: string };

const CloseButton = ({ closeToast }: { closeToast: () => void }): JSX.Element => {
  return (
    <button type="button" className="Toastify__close-button" onClick={closeToast}>
      <Icon icon={Icon.icons.delete} className="Toastify__close-button--icon" />
    </button>
  );
};

type BodyProps = AdditionalOptions & {
  children: React.ReactNode | string;
  status?: TypeOptions;
  closeToast: ToastContentProps['closeToast'];
  icon?: string;
};

const statusToIconMap = {
  [toastify.TYPE.ERROR]: 'exclude',
  [toastify.TYPE.INFO]: 'info',
  [toastify.TYPE.WARNING]: 'info',
};

const NotifyBody = ({ children, status, undo, icon: iconProp, closeToast }: BodyProps): JSX.Element => {
  const getIcon = (): React.ReactElement => {
    // if was passed from props - return it
    if (iconProp) return Icon.icons[iconProp];

    if (status && statusToIconMap[status]) return Icon.icons[statusToIconMap[status]];

    // default - success
    return Icon.icons.checkCircle;
  };

  const handleUndo = (): void => {
    if (undo) {
      undo();
      closeToast?.();
    }
  };

  return (
    <div className="body">
      <Icon icon={getIcon()} className="Toastify__toast-body--icon" />
      <div className="bodyContent">
        {typeof children === 'string' ? <Text className="Toastify__toast-body--content">{children}</Text> : children}

        {undo && (
          <button className="bodyContentUndo" onClick={handleUndo} type="button">
            <Text size={sizes.m} color={colors.accent}>
              Undo
            </Text>
          </button>
        )}
      </div>
    </div>
  );
};

const baseOptions: ToastOptions = {
  closeButton: (props) => <CloseButton {...props} />,
  draggable: false,
  closeOnClick: true,
  hideProgressBar: true,
};

export const toast = Object.assign(
  (content: ToastContent, options?: ToastOptions & AdditionalOptions): React.ReactText => {
    const renderToast = toastify(
      ({ closeToast }) => (
        <NotifyBody icon={options?.icon} undo={options?.undo} closeToast={closeToast}>
          {content}
        </NotifyBody>
      ),
      {
        ...baseOptions,
        ...options,
      },
    );

    return renderToast;
  },
  // merge all properties from toastify
  toastify,
  // override toast.success(), toast.error() etc.
  Object.values(toastify.TYPE).reduce(
    (acc, val) => ({
      ...acc,
      [val]: (content, options?: ToastOptions & AdditionalOptions): React.ReactText =>
        toastify[val](
          ({ closeToast }: ToastContentProps) => (
            <NotifyBody icon={options?.icon} undo={options?.undo} status={val} closeToast={closeToast}>
              {content}
            </NotifyBody>
          ),
          {
            ...baseOptions,
            ...options,
          },
        ),
    }),
    {},
  ),
);

export const NotificationContainer = ({ className, ...props }: NotificationContainerProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();
  return (
    <StyledNotificationContainer theme={theme} mode={mode} className={className}>
      <ToastContainer {...props} />
    </StyledNotificationContainer>
  );
};
