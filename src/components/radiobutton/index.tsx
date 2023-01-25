import cx from 'classnames';

import { Text } from 'components';
import * as React from 'react';
import { useTheme } from 'styled-components';

import { InputPropsType } from '../../utils/types';
import { StyledRadio } from './style';

interface WrapperProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLLabelElement>;
}

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /**
   * Is checked;
   * @default false
   * */
  checked?: boolean;
  /**
   * Error text;
   */
  error?: string;
  /**
   * Child html input component props. Will be removed in next version;
   */
  inputProps?: InputPropsType;
  /**
   * RadioButton label;
   */
  label?: string;
  /**
   * Point color;
   */
  pointColor?: string;
  // will be removed in next version
  /**
   * Wrapper props;
   */
  wrapperProps?: WrapperProps;
}

export const Radio = React.forwardRef<HTMLLabelElement, RadioButtonProps>(
  (
    {
      label,
      className,
      checked,
      value,
      inputProps = {},
      wrapperProps,
      disabled,
      error,
      pointColor,
      ...props
    }: RadioButtonProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { className: inputClassName, id, ...otherInputProps } = inputProps;

    return (
      <StyledRadio ref={ref} error={error} pointColor={pointColor} {...wrapperProps}>
        <label className={cx('label', disabled && 'labelDisabled', className)} htmlFor={id}>
          <input
            type='radio'
            className={cx('radiobox', inputClassName)}
            id={id}
            disabled={disabled}
            checked={checked}
            value={value}
            {...otherInputProps}
            {...props}
          />
          <div className={cx('container', error && 'error')}>
            <div className='point' />
          </div>
          <Text weight={theme.typography.weights.regular} size={theme.typography.sizes.m} className='labelTitle'>
            {label}
          </Text>
        </label>
        {error && (
          <Text className='errorTitle' size={theme.typography.sizes.xs} color={theme.colors.error}>
            {error}
          </Text>
        )}
      </StyledRadio>
    );
  },
);
