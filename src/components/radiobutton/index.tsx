import * as React from 'react';
import cx from 'classnames';
import { Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { InputPropsType } from '../../utils/types';
import { StyledRadio } from './style';

interface WrapperProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLLabelElement>;
}

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  pointColor?: string;
  inputProps?: InputPropsType; // will be removed in next version
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
      inputProps,
      wrapperProps,
      disabled,
      error,
      pointColor,
      ...props
    }: RadioButtonProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;

    return (
      <StyledRadio theme={theme} mode={mode} ref={ref} error={error} pointColor={pointColor} {...wrapperProps}>
        <label className={cx('label', disabled && 'labelDisabled', className)} htmlFor={id || defaultId}>
          <input
            type="radio"
            className={cx('radiobox', className)}
            id={id || defaultId}
            disabled={disabled}
            checked={checked || value === id}
            value={id || value || defaultId}
            {...inputProps}
            {...props}
          />
          <div className="container">
            <div className="point" />
          </div>
          <Text weight={theme.typography.weights.regular} size={theme.typography.sizes.m} className="labelTitle">
            {label}
          </Text>
        </label>
        {error && (
          <Text className="errorTitle" size={theme.typography.sizes.xs} color={theme.colors.error}>
            {error}
          </Text>
        )}
      </StyledRadio>
    );
  },
);
