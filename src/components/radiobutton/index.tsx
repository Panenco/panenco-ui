import cx from 'classnames';

import { Text } from 'components';
import * as React from 'react';
import { idGenerator } from 'utils/helpers';
import { useTheme } from 'styled-components';

import { InputPropsType } from '../../utils/types';
import { StyledRadio } from './style';

interface WrapperProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLLabelElement>;
}

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  inputProps?: InputPropsType;
  label?: string;
  pointColor?: string; // will be removed in next version
  wrapperProps?: WrapperProps;
}

export const Radio = React.forwardRef<HTMLLabelElement, RadioButtonProps>(
  (
    {
      label,
      id,
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
    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;
    const { className: inputClassName, ...otherInputProps } = inputProps;

    return (
      <StyledRadio ref={ref} error={error} pointColor={pointColor} {...wrapperProps}>
        <label className={cx('label', disabled && 'labelDisabled', className)} htmlFor={id || defaultId}>
          <input
            type='radio'
            className={cx('radiobox', inputClassName)}
            id={id || defaultId}
            disabled={disabled}
            checked={checked || value === id}
            value={id || value || defaultId}
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
