import * as React from 'react';
import cx from 'classnames';
import { useDropzone } from 'react-dropzone';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, Loader } from 'components';
import { ThemeMode, WrapperProps, InputPropsType } from 'utils/types';
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
}

export const Dropzone = React.forwardRef<HTMLDivElement, DropzoneProps>(
  (
    {
      style,
      loading,
      loadingText = 'Uploading',
      textContent = 'Drop your file here or click to this zone',
      textContentOnDrag = 'Drop your file here',
      // getInputProps: getOutsideInputProps,
      // getRootProps: getOutsideRootProps,
      className,
      iconClassName,
      icon,
      wrapperProps,
      inputProps,
      error,
      loader,
      ...props
    }: DropzoneProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const { getRootProps, getInputProps, isDragActive } = useDropzone();

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
        ref={ref}
        theme={theme}
        mode={mode}
        loading={loading}
        isDragActive={isDragActive}
        error={error}
        {...getRootProps()}
        {...wrapperProps}
      >
        {loading ? (
          <>
            {loader || <Loader color={mode === ThemeMode.dark ? theme.colors.light : theme.colors.secondary} />}
            <Text className="contentLoading">{loadingText}</Text>
          </>
        ) : (
          <>
            <input {...getInputProps()} {...inputProps} {...props} />
            <Icon icon={iconImage} className={cx('icon', iconClassName)} />
            <Text className="content">{textContentInBlock}</Text>
          </>
        )}
      </StyledDropzone>
    );
  },
);
