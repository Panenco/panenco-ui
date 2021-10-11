import * as React from 'react';
import cx from 'classnames';
import { PrimaryButton, Text, Icon, Loader, ButtonIcon } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';
import { ThemeMode, InputPropsType, WrapperProps } from '../../utils/types';
import { StyledFileUploader } from './style';

export interface FileUploaderProps extends React.InputHTMLAttributes<HTMLInputElement> {
  title?: string;
  placeholder?: string;
  buttonText?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingText?: string;
  loader?: JSX.Element;
  error?: string;
  inputProps?: InputPropsType; // will be removed in next version
  icon?: HTMLObjectElement;
  iconClassName?: string;
  wrapperProps?: WrapperProps;
  inputRef?: React.Ref<any>;
}

export const FileUploader = React.forwardRef<HTMLDivElement, FileUploaderProps>(
  (
    {
      id,
      title,
      placeholder = 'Upload file here',
      disabled,
      buttonText = 'Upload',
      loadingText = 'Uploading...',
      loading,
      error,
      loader,
      inputProps,
      wrapperProps,
      icon,
      iconClassName,
      inputRef,
      ...props
    }: FileUploaderProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;
    const [fileInput, setName] = React.useState({
      fileName: null,
      key: uniqueID,
    }) as any;

    const refInput = React.useRef(null);
    const combinedRef = useCombinedRefs(refInput, inputRef);

    const updateFileName = (e): void => {
      setName({
        fileName: e.target.files[0].name,
        key: fileInput.key,
      });
    };

    const handleClick = (): void => {
      combinedRef.current.click();      
    };

    const handleIconClick = (e: React.UIEvent): void => {
      e.preventDefault();

      setName({
        fileName: '',
        key: uniqueID,
      });
    };
    const { fileName, key } = fileInput;
    let renderStatusIcons = null as JSX.Element | null;
    let renderPlaceholder = placeholder;
    if (loading) {
      renderPlaceholder = loadingText;
      renderStatusIcons = loader || (
        <Loader
          color={mode === ThemeMode.dark ? theme.colors.light : theme.colors.secondary}
          className="placeholderBoxIcon"
        />
      );
    } else if (fileName) {
      renderPlaceholder = fileName;
      renderStatusIcons = (
        <ButtonIcon
          icon={icon || Icon.icons.x}
          type="reset"
          className={cx('placeholderBoxIcon', iconClassName)}
          onClick={handleIconClick}
        />
      );
    } else if (error) {
      renderStatusIcons = <Icon icon={icon || Icon.icons.close} className={cx('placeholderBoxIcon', iconClassName)} />;
    }

    return (
      <StyledFileUploader
        theme={theme}
        mode={mode}
        disabled={disabled}
        loading={loading}
        hasContent={fileName || loading}
        error={error}
        ref={ref}
        {...wrapperProps}
      >
        {title && (
          <Text weight={theme.typography.weights.bold} className="title">
            {title}
          </Text>
        )}
        <label className="uploader" htmlFor={id || defaultId}>
          <div className={error ? 'placeholderBoxError' : 'placeholderBox'}>
            <input
              className="uploaderInput"
              type="file"
              id={id || defaultId}
              disabled={disabled || loading}
              onChange={updateFileName}
              ref={combinedRef}
              key={key}
              {...inputProps}
              {...props}
            />
            <Text className="placeholderBoxTitle">{renderPlaceholder}</Text>
            {renderStatusIcons}
          </div>

          <PrimaryButton type="submit" className="uploaderBtn" disabled={disabled || loading} onClick={handleClick}>
            {buttonText}
          </PrimaryButton>
        </label>

        {error && (
          <Text className="error" color={theme.colors.error} size={theme.typography.sizes.xs}>
            {error}
          </Text>
        )}
      </StyledFileUploader>
    );
  },
);
