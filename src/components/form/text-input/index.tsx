import * as React from 'react';
import cx from 'classnames';
import { Icon, Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { InputComponent, WrapperProps, InputPropsType } from '../../../utils/types';
import { StyledTextInput } from './style';

export interface TextInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType; // will be removed in next versions
}

export const TextInput = React.forwardRef<HTMLDivElement, TextInputProps>(
  (
    {
      maxLength,
      className,
      type = 'text',
      title,
      subTitle,
      iconBefore,
      iconAfter,
      disabled,
      error,
      wrapperProps,
      inputProps,
      placeholder = '',
      inputRef,
      onChange,
      ...props
    }: TextInputProps,
    ref,
  ): JSX.Element => {
    const [counter, setCounter] = React.useState(0);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if (maxLength) setCounter(event.target.value.length);

      if (onChange) onChange(event);
    };

    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledTextInput
        className={cx('textInput', className)}
        error={error}
        theme={theme}
        mode={mode}
        ref={ref}
        iconAfter={iconAfter}
        iconBefore={iconBefore}
        {...wrapperProps}
      >
        {title && (
          <Text weight={theme.typography.weights.bold} size={theme.typography.sizes.m} className="inputTitle">
            {title}
          </Text>
        )}
        {subTitle && (
          <Text size={theme.typography.sizes.xs} className="inputSubtitle">
            {subTitle}
          </Text>
        )}

        <div className="fieldWrapper">
          <div className={cx('inputField', error && 'inputFieldError', disabled && 'inputFieldDisabled')}>
            {iconBefore && (
              <div className="iconBefore">
                {React.isValidElement(iconBefore) ? iconBefore : <Icon icon={iconBefore} />}
              </div>
            )}
            <input
              type={type}
              aria-label={`${title || ''}${subTitle || ''}`}
              className="input"
              placeholder={placeholder}
              onChange={handleChange}
              disabled={disabled}
              maxLength={maxLength}
              ref={inputRef}
              {...inputProps}
              {...props}
            />
            {iconAfter && (
              <div className="iconAfter">{React.isValidElement(iconAfter) ? iconAfter : <Icon icon={iconAfter} />}</div>
            )}
          </div>
        </div>
        {error || maxLength ? (
          <div className="counterWrapper">
            <span className="inputErrorLabel">{error}</span>
            {maxLength && (
              <span className="counter">
                {counter}/{maxLength}
              </span>
            )}
          </div>
        ) : null}
      </StyledTextInput>
    );
  },
);
