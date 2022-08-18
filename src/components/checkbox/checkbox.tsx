import * as React from 'react';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { Text } from 'components/text';
import { useTheme } from 'utils/hooks';
import { idGenerator } from 'utils/helpers';
import { InputPropsType } from '../../utils/types';
import { StyledCheckbox } from './style';

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string | React.ReactNode;
  color?: string;
  error?: string;
  borderWidth?: string | number;
  borderColor?: string;
  inputProps?: InputPropsType; // will be removed in next version
  wrapperProps?: WrapperProps;
  labelClassName?: string;
}

// interface CompoundedComponent
//   extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLLabelElement>> {
//   defaultProps?: any;
// }

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      label,
      className,
      checked,
      disabled,
      id,
      inputProps,
      color,
      borderWidth,
      borderColor,
      wrapperProps,
      error,
      labelClassName,
      ...props
    }: CheckboxProps,
    ref,
  ): JSX.Element => {
    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;
    const theme = useTheme();

    return (
      <StyledCheckbox theme={theme} color={color} borderWidth={borderWidth} borderColor={borderColor} {...wrapperProps}>
        <label
          className={cx('label', disabled && 'labelDisabled', wrapperProps?.className)}
          htmlFor={id || defaultId}
          ref={ref}
        >
          <input
            className={cx('checkbox', className)}
            type='checkbox'
            id={id || defaultId}
            disabled={disabled}
            checked={checked}
            {...inputProps}
            {...props}
          />
          <div className={cx('container', error && 'error')}>
            {checked && <Icon icon='check' size='sm' className='tick' />}
          </div>
          {label && (
            <Text component='p' className={cx('labelTitle', labelClassName)}>
              {label}
            </Text>
          )}
        </label>
        {error && (
          <Text size={theme.typography.sizes.xs} className='error'>
            {error}
          </Text>
        )}
      </StyledCheckbox>
    );
  },
);
