import cx from 'classnames';

import { Icon, Loader, Text, icons, IconType } from 'components';
import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { useTheme } from 'styled-components';

import { InputPropsType, WrapperProps } from '../../utils/types';
import { StyledDropzone } from './style';

export interface DropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Additional content
   * */
  children?: React.ReactNode;
  /**
   * Error message
   * */
  error?: string;
  /**
   * Icon
   * */
  icon?: IconType | keyof typeof icons.sm;
  /**
   * Icon class name
   * */
  iconClassName?: string;
  /**
   * Input props
   * */
  inputProps?: InputPropsType;
  /**
   * Loader component
   * */
  loader?: JSX.Element;
  /**
   * Loading state
   * */
  loading?: boolean;
  /**
   * Loading text
   * */
  loadingText?: string;
  /**
   * Dropzone options
   * */
  options?: DropzoneOptions;
  /**
   * Text content
   * */
  textContent?: string;
  /**
   * Text content on drag
   * */
  textContentOnDrag?: string;
  /**
   * Wrapper props
   * */
  wrapperProps?: WrapperProps;
}

export const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      loading,
      loadingText = 'Uploading',
      textContent = 'Drop your file here or click to this zone',
      textContentOnDrag = 'Drop your file here',
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
