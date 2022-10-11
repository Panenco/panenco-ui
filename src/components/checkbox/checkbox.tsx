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
  /**
   * Checkbox label;
   */
  label?: string | React.ReactNode;
  /**
   * Color text-content;
   */
  color?: string;
  /**
   * Error text;
   */
  error?: string;
  /**
   * Border width;
   */
  borderWidth?: string | number;
  /**
   * Border color;
   */
  borderColor?: string;
  /**
   * Child html input component props. Will be removed in next version;
   */
  inputProps?: InputPropsType; // will be removed in next version
  /**
   * Wrapper props;
   */
  wrapperProps?: WrapperProps;
  /**
   * Child label classname;
   */
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
            {checked && <Icon icon={Icon.icons.check} className='tick' />}
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
        <Icon icon={Icon.icons.check} className='tick' />
      </StyledCheckbox>
    );
  },
);
