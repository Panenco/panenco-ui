import cx from 'classnames';
import { Icon, Loader, Text } from 'components';
import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { useMode, useTheme } from 'utils/hooks';

import { InputPropsType, ThemeMode, WrapperProps } from '../../utils/types';
import { StyledDropzone } from './style';

export interface DropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  iconClassName?: string;
  loading?: boolean;
  loadingText?: string;
  textContent?: string;
  textContentOnDrag?: string;
  error?: string;
  icon?: HTMLObjectElement;
  loader?: JSX.Element;
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType; // will be removed in next versions
  options?: DropzoneOptions;
  children?: React.ReactNode;
}

export const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      loading,
      loadingText = 'Uploading',
      textContent = 'Drop your file here or click to this zone',
      textContentOnDrag = 'Drop your file here',
      // getInputProps: getOutsideInputProps,
      // getRootProps: getOutsideRootProps,
      iconClassName,
      icon,
      wrapperProps,
      inputProps,
      error,
      loader,
      options = {},
      children,
      ...props
    }: DropzoneProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

    let textContentInBlock = '';
    let iconImage = Icon.icons.upload;
    if (error) {
      textContentInBlock = error;
      iconImage = Icon.icons.close;
    } else if (isDragActive) {
      textContentInBlock = textContentOnDrag;
    } else {
      textContentInBlock = textContent;
    }

    if (icon) {
      iconImage = icon;
    }

    return (
      <StyledDropzone
        {...getRootProps()}
        {...wrapperProps}
        ref={ref}
        theme={theme}
        mode={mode}
        loading={loading}
        isDragActive={isDragActive}
        error={error}
      >
        {loading ? (
          <>
            {loader || <Loader color={mode === ThemeMode.dark ? theme.colors.base100 : theme.colors.base700} />}
            <Text className='contentLoading'>{loadingText}</Text>
          </>
        ) : (
          <>
            <input {...getInputProps()} {...inputProps} {...props} />
            <Icon icon={iconImage} className={cx('icon', iconClassName)} />
            <Text className='content'>{textContentInBlock}</Text>
          </>
        )}
        {children && <div className='additionalContent'>{children}</div>}
      </StyledDropzone>
    );
  },
);
