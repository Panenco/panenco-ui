import * as cx from 'classnames';

import { Icon, Text } from 'components';
import * as React from 'react';
import { useTheme } from 'utils/hooks';

import { InputComponent, InputPropsType, WrapperProps } from '../../../utils/types';
import { StyledStepperInput } from './style';

export interface StepperInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  inputProps?: InputPropsType;
  locales?: { [key: string]: string };
  maxValue: number;
  minValue: number;
  onChange: any;
  step: number;
  value: number;
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
      <StyledStepperInput className={cx('stepper', className)} theme={theme} ref={ref} {...wrapperProps}>
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
