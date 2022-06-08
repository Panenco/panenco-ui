import cx from 'classnames';
import { Icon, Loader, Text } from 'components';
import * as React from 'react';
import { DropzoneOptions, useDropzone } from 'react-dropzone';
import { useMode, useTheme } from 'utils/hooks';

import { InputPropsType, ThemeMode, WrapperProps } from '../../utils/types';
import { StyledDropzone } from './style';

export interface DropzoneProps extends React.HTMLAttributes<HTMLDivElement> {
  // these props not deleted cause save compatibility with projects where it uses
  icon?: React.SVGProps<SVGSVGElement>;
  iconClassName?: string;
  loadingText?: string;
  textContent?: string;
  textContentOnDrag?: string;
  inputProps?: InputPropsType; // will be removed in next versions
  mode?: 'default' | 'custom';
  //
  error?: string;
  loading?: boolean;
  loader?: JSX.Element;
  wrapperProps?: WrapperProps;
  options?: DropzoneOptions;
  children?: React.ReactNode;
}

const mergeRefs = (...refs) => {
  return (node) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const ref of refs) {
      if (ref) {
        ref.current = node;
      }
    }
  };
};

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
      mode: componentMode = 'default',
      ...props
    }: DropzoneProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const { getRootProps, getInputProps, ...rest } = useDropzone(options);

    let textContentInBlock = '';
    let iconImage = Icon.icons.upload;
    if (error) {
      textContentInBlock = error;
      iconImage = Icon.icons.close;
    } else if (rest.isDragActive) {
      textContentInBlock = textContentOnDrag;
    } else {
      textContentInBlock = textContent;
    }

    if (icon) {
      iconImage = icon;
    }
    // possibility to have access for events out of the component
    const childrenEl = typeof children === 'function' ? children(rest) : children;

    return (
      <StyledDropzone
        {...getRootProps()}
        {...wrapperProps}
        theme={theme}
        mode={mode}
        loading={loading}
        isDragActive={rest.isDragActive}
        error={error}
        // we have to merge refs to avoid inconsistency between refs (from hook and props)
        ref={mergeRefs(ref, rest.rootRef)}
      >
        {loading ? (
          <>
            {loader || <Loader color={mode === ThemeMode.dark ? theme.colors.base100 : theme.colors.base700} />}
            {componentMode === 'default' && <Text className='contentLoading'>{loadingText}</Text>}
            {/* make possible to add extra things if needed for particular case */}
            {childrenEl}
          </>
        ) : (
          <>
            <input {...getInputProps()} {...inputProps} {...props} />
            {componentMode === 'default' && (
              <>
                <Icon icon={iconImage} className={cx('icon', iconClassName)} />
                <Text className='content'>{textContentInBlock}</Text>
              </>
            )}

            {childrenEl}
          </>
        )}
      </StyledDropzone>
    );
  },
);
