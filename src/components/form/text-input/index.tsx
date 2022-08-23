import * as React from 'react';
import cx from 'classnames';
import { Icon, icons, Text, IconType } from 'components';
import { useTheme } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { InputComponent, WrapperProps, InputPropsType } from 'utils/types';
import { StyledTextInput } from './style';

export interface TextInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  rightSubTitle?: React.ReactElement;
  iconBefore?: IconType | keyof typeof icons.sm;
  iconAfter?: IconType | keyof typeof icons.sm;
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

    return (
      <StyledTextInput
        className={cx('textInput', className)}
        error={error}
        theme={theme}
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
                {React.isValidElement(iconBefore) ? iconBefore : <Icon size='sm' icon={iconBefore} />}
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
                {React.isValidElement(iconAfter) ? iconAfter : <Icon size='sm' icon={iconAfter} />}
              </label>
            )}
          </div>
        </div>
        {error || maxLength ? (
          <div className='counterWrapper'>
            <Text
              component='span'
              size={theme.typography.sizes.xs}
              color={theme.colors.error}
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
