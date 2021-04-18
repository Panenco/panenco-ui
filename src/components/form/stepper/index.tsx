import * as React from 'react';
import cx from 'classnames';
import { Text, Icon } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { InputComponent, WrapperProps, InputPropsType } from '../../../utils/types';
import { StyledStepper } from './style';

export interface StepperProps extends InputComponent, React.InputHTMLAttributes<HTMLInputElement> {
  inputRef?: React.Ref<any>;
  wrapperProps?: WrapperProps;
  inputProps?: InputPropsType; // will be removed in next versions
  step: number;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  (
    {
      className,
      type = 'text',
      title,
      subTitle,
      disabled,
      error,
      wrapperProps,
      inputProps,
      inputRef,
      value,
      step = 1,
      onChange,
      name,
      ...props
    }: StepperProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const [currentValue, setValue] = React.useState(Number(value) || 0);

    React.useEffect(() => {
      console.log('on Change');
      if (onChange) onChange(currentValue as any);
    }, [currentValue]);

    const increase = () => {
      setValue(Number(currentValue) + step);
    };

    const decrease = () => {
      setValue(Number(currentValue) - step);
    };

    const handleChange = (event) => {
      setValue(Number(event.target.value));
    };

    return (
      <StyledStepper className={className} error={error} theme={theme} mode={mode} ref={ref} {...wrapperProps}>
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
            <button type="button" className="button buttonMinus" onClick={decrease}>
              <Icon icon={Icon.icons.minus} />
            </button>
            <input
              type={type}
              aria-label={`${title || ''}${subTitle || ''}`}
              className="input"
              disabled={disabled}
              ref={inputRef}
              {...inputProps}
              {...props}
              name={name}
              onChange={handleChange}
              value={currentValue}
            />

            <button type="button" className="button buttonPlus" onClick={increase}>
              <Icon icon={Icon.icons.plus} />
            </button>
          </div>
        </div>
        {error && <span className="inputErrorLabel">{error}</span>}
      </StyledStepper>
    );
  },
);
