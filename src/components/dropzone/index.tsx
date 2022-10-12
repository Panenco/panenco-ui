import * as cx from 'classnames';

import { Icon, Loader, Text, icons, IconType } from 'components';
import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { useTheme } from 'utils/hooks';

import { InputPropsType, WrapperProps } from '../../utils/types';
import { StyledDropzone } from './style';

export interface DropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  error?: string;
  icon?: IconType | keyof typeof icons.sm;
  iconClassName?: string;
  inputProps?: InputPropsType;
  loader?: JSX.Element;
  loading?: boolean;
  loadingText?: string;
  // will be removed in next versions
  options?: DropzoneOptions;
  textContent?: string;
  textContentOnDrag?: string;
  wrapperProps?: WrapperProps;
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
    const { getRootProps, getInputProps, isDragActive } = useDropzone(options);

    let textContentInBlock = '';
    let iconImage: typeof icon = 'upload';
    if (error) {
      textContentInBlock = error;
      iconImage = 'xCircle';
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
        loading={loading}
        isDragActive={isDragActive}
        error={error}
      >
        {loading ? (
          <>
            {loader || <Loader color={theme.colors.base700} />}
            <Text className='contentLoading'>{loadingText}</Text>
          </>
        ) : (
          <>
            <input {...getInputProps()} {...inputProps} {...props} />

            {React.isValidElement(iconImage) ? (
              iconImage
            ) : (
              <Icon icon={iconImage} size='sm' className={cx('icon', iconClassName)} />
            )}

            <Text className='content'>{textContentInBlock}</Text>
          </>
        )}
        {children && <div className='additionalContent'>{children}</div>}
      </StyledDropzone>
    );
  },
);
