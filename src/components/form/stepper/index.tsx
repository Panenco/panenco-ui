import cx from 'classnames';

import { Icon, Text } from 'components';
import * as React from 'react';
import { useTheme } from 'styled-components';

import { InputComponent, InputPropsType, WrapperProps } from '../../../utils/types';
import { StyledStepperInput } from './style';

export interface StepperInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Error message
   * */
  error?: string;
  /**
   * Additional props to be spread to the input element
   * */
  inputProps?: InputPropsType;
  /**
   * An object that can take locale for notInRange message;
   * */
  locales?: { [key: string]: string };
  /**
   * Maximum value of the input
   */
  maxValue: number;
  /**
   * Minimum value of the input
   */
  minValue: number;
  /**
   * Callback function to be called on change
   */
  onChange: any;
  /**
   * Step of the input
   */
  step: number;
  /**
   * Value of the input
   */
  value: number;
  /**
   * Additional props to be spread to the wrapper element
   */
  wrapperProps?: WrapperProps;
}

export const StepperInput = React.forwardRef<HTMLDivElement, StepperInputProps>(
  (
    {
      value,
      onChange,
      minValue,
      maxValue,
      className,
      title,
      step,
      disabled,
      error,
      wrapperProps,
      inputProps,
      locales = { notInRange: 'Must be in range' },
      ...props
    }: StepperInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();

    const [currentValue, setValue] = React.useState(value);

    const moreThenAllowed = currentValue > maxValue;
    const lessThanAllowed = currentValue < minValue;

    React.useEffect(() => {
      if (onChange && !moreThenAllowed && !lessThanAllowed) {
        onChange(currentValue);
      }
    }, [currentValue]);

    const increment = (): void => {
      setValue(Number(currentValue) + step);
    };

    const decrement = (): void => {
      setValue(Number(currentValue) - step);
    };

    const handleChange = (e: React.FormEvent<HTMLInputElement>): void => {
      setValue(Number(e.currentTarget.value));
    };

    const isMinValue = typeof minValue !== 'undefined';
    const isMaxValue = typeof maxValue !== 'undefined';

    const min = isMinValue ? minValue : '-';
    const max = isMaxValue ? maxValue : '-';

    const notInRange = (isMinValue || isMaxValue) && (moreThenAllowed || lessThanAllowed);

    return (
      <StyledStepperInput className={cx('stepper', className)} ref={ref} {...wrapperProps}>
        {title && (
          <Text size={theme.typography.sizes.xs} className='inputTitle'>
            {title}
          </Text>
        )}

        <div className={cx('fieldWrapper', error && 'inputFieldError')}>
          <button
            onClick={decrement}
            className={cx(
              (currentValue === minValue || disabled) && 'disabled',
              'stepperButton',
              'stepperButtonDecrement',
            )}
            type='button'
            disabled={currentValue === minValue || disabled}
          >
            <Icon className='stepperButtonIcon' icon='minus' />
          </button>
          <input
            type='number'
            onChange={handleChange}
            className={cx('stepperInput', disabled && 'inputFieldDisabled')}
            value={Number(currentValue)}
            disabled={disabled}
            {...inputProps}
            {...props}
          />
          <button
            onClick={increment}
            disabled={currentValue === maxValue || disabled}
            className={cx(
              (currentValue === maxValue || disabled) && 'disabled',
              'stepperButton',
              'stepperButtonIncrement',
            )}
            type='button'
          >
            <Icon className='stepperButtonIcon' icon='plus' />
          </button>
        </div>
        <div className='inputError'>
          {notInRange ? (
            <Text
              component='span'
              size={theme.typography.sizes.xs}
              color={theme.colors.error}
              className='inputErrorLabel'
            >
              {locales.notInRange}: {`[${min}, ${max}]`}
            </Text>
          ) : null}
          {error && !notInRange && (
            <Text
              component='span'
              size={theme.typography.sizes.xs}
              color={theme.colors.error}
              className='inputErrorLabel'
            >
              {error}
            </Text>
          )}
        </div>
      </StyledStepperInput>
    );
  },
);

StepperInput.defaultProps = {
  value: 0,
  step: 1,
};
