import cx from 'classnames';
import { Icon, Text } from 'components';
import * as React from 'react';
import { useMode, useTheme } from 'utils/hooks';

import { InputComponent, InputPropsType, WrapperProps } from '../../../utils/types';
import { StyledStepperInput } from './style';

export interface StepperInputProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  value: number;
  onChange: any;
  minValue: number;
  maxValue: number;
  step: number;
  iconBefore?: HTMLObjectElement | JSX.Element;
  iconAfter?: HTMLObjectElement | JSX.Element;
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType;
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
      subTitle,
      step,
      disabled,
      error,
      wrapperProps,
      inputProps,
      inputRef,
      ...props
    }: StepperInputProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    const [currentValue, setValue] = React.useState<number>(value);

    const moreThenAllowed = currentValue > maxValue;
    const lessThanAllowed = currentValue < minValue;

    React.useEffect(() => {
      if (onChange && !moreThenAllowed && !lessThanAllowed) {
        onChange(currentValue);
      }
    }, [currentValue]);

    const increment = () => {
      setValue(currentValue + step);
    };

    const decrement = () => {
      setValue(currentValue - step);
    };

    const handleChange = (event) => {
      setValue(Number(event.target.value));
    };

    const isMinValue = typeof minValue !== 'undefined';
    const isMaxValue = typeof maxValue !== 'undefined';

    const min = isMinValue ? minValue : '-';
    const max = isMaxValue ? maxValue : '-';

    const notInRange = (isMinValue || isMaxValue) && (moreThenAllowed || lessThanAllowed);

    return (
      <StyledStepperInput
        className={cx('stepper', className)}
        error={error}
        theme={theme}
        mode={mode}
        ref={ref}
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

        <div className={cx('fieldWrapper', error && 'inputFieldError')}>
          <button
            onClick={decrement}
            className={cx(
              (currentValue === minValue || disabled) && 'disabled',
              'stepperButton',
              'stepperButtonDecrement',
            )}
            type="button"
            disabled={currentValue === minValue || disabled}
          >
            <Icon className="stepperButtonIcon" icon={Icon.icons.minus} />
          </button>
          <input
            type="number"
            name={name}
            onChange={handleChange}
            className={cx('stepperInput', disabled && 'inputFieldDisabled')}
            value={currentValue}
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
            type="button"
          >
            <Icon className="stepperButtonIcon" icon={Icon.icons.plus} />
          </button>
        </div>
        <div className="inputError">
          {notInRange ? <span className="inputErrorLabel">Must be in range: {`[${min}, ${max}]`}</span> : null}
          {error && !notInRange && <span className="inputErrorLabel">{error}</span>}
        </div>
      </StyledStepperInput>
    );
  },
);

StepperInput.defaultProps = {
  value: 0,
  step: 1,
};
