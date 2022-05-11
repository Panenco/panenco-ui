import * as React from 'react';
import cx from 'classnames';
import { Icon, Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { InputComponent, WrapperProps, InputPropsType, ThemeMode } from 'utils/types';
import { StyledTextInput } from './style';

export interface TextInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  rightSubTitle?: React.ReactElement;
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<HTMLInputElement>;
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType; // will be removed in next versions
}

export const TextInput = React.forwardRef<HTMLDivElement, TextInputProps>(
  (
    {
      id,
      maxLength,
      className,
      type = 'text',
      title,
      subTitle,
      rightSubTitle,
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

    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;

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
        <div className='titleContainer'>
          <div className='leftTitleContainer'>
            {title && (
              <Text weight={theme.typography.weights.bold} size={theme.typography.sizes.m} className='inputTitle'>
                {title}
              </Text>
            )}

            {subTitle && (
              <Text size={theme.typography.sizes.xs} className=' mb-4 inputSubTitle inputSubTitleLeft'>
                {subTitle}
              </Text>
            )}
          </div>
          {rightSubTitle && <div className='mb-4 rightTitleContainer'>{rightSubTitle}</div>}
        </div>

        <div className='fieldWrapper'>
          <div className={cx('inputField', error && 'inputFieldError', disabled && 'inputFieldDisabled')}>
            {iconBefore && (
              <label className='iconBefore' htmlFor={defaultId}>
                {React.isValidElement(iconBefore) ? iconBefore : <Icon icon={iconBefore} />}
              </label>
            )}
            <input
              type={type}
              aria-label={`${title || ''}${subTitle || ''}`}
              className='input'
              placeholder={placeholder}
              onChange={handleChange}
              disabled={disabled}
              maxLength={maxLength}
              ref={inputRef}
              id={defaultId}
              {...inputProps}
              {...props}
            />
            {iconAfter && (
              <label className='iconAfter' htmlFor={defaultId}>
                {React.isValidElement(iconAfter) ? iconAfter : <Icon icon={iconAfter} />}
              </label>
            )}
          </div>
        </div>
        {error || maxLength ? (
          <div className='counterWrapper'>
            <Text
              component='span'
              size={theme.typography.sizes.xs}
              color={mode === ThemeMode.dark ? theme.colors.base100 : theme.colors.error}
              className='inputErrorLabel'
            >
              {error}
            </Text>
            {maxLength && (
              <Text component='span' size={theme.typography.sizes.xs} color={theme.colors.base700} className='counter'>
                {counter}/{maxLength}
              </Text>
            )}
          </div>
        ) : null}
      </StyledTextInput>
    );
  },
);
