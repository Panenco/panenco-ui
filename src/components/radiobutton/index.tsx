import * as React from 'react';
import cx from 'classnames';
import { Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { InputPropsType } from 'utils/types';
import { idGenerator } from 'utils/helpers';
import { StyledRadio } from './style';

interface WrapperProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
  ref?: React.Ref<HTMLLabelElement>;
}

export interface RadioButtonProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  inputProps?: InputPropsType; // will be removed in next version
  wrapperProps?: WrapperProps;
}

export const Radio = React.forwardRef<HTMLLabelElement, RadioButtonProps>(
  ({ label, id, className, checked, inputProps, wrapperProps, disabled, error, ...props }, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;

    return (
      <StyledRadio theme={theme} mode={mode} ref={ref} error={error} {...wrapperProps}>
        <label className={cx('label', disabled && 'labelDisabled', className)} htmlFor={id || defaultId}>
          <input
            type="radio"
            checked={checked}
            className={cx('radiobox', className)}
            id={id || defaultId}
            disabled={disabled}
            {...inputProps}
            {...props}
          />
          <div className="container">
            <div className="point" />
          </div>
          <Text weight={theme.typography.weights.regular} size={theme.typography.sizes.s} className="labelTitle">
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
