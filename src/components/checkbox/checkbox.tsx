import * as React from 'react';
import cx from 'classnames';
import { Icon } from 'components/icon';
import { Text } from 'components/text';
import { useTheme, useMode } from 'utils/hooks';
import { InputPropsType } from 'utils/types';
import { idGenerator } from 'utils/helpers';
import { StyledLabel } from './style';

interface WrapperProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  [key: string]: any;
}

export interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  color?: string;
  borderWidth?: string | number;
  inputProps?: InputPropsType; // will be removed in next version
  wrapperProps?: WrapperProps;
}

// interface CompoundedComponent
//   extends React.ForwardRefExoticComponent<CheckboxProps & React.RefAttributes<HTMLLabelElement>> {
//   defaultProps?: any;
// }

export const Checkbox = React.forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    { label, className, checked, disabled, id, inputProps, color, borderWidth, wrapperProps, ...props }: CheckboxProps,
    ref,
  ): JSX.Element => {
    const uniqueID = idGenerator();
    const defaultId = id || uniqueID;
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledLabel
        className={cx('label', disabled && 'labelDisabled', wrapperProps?.className)}
        htmlFor={id || defaultId}
        theme={theme}
        mode={mode}
        ref={ref}
        color={color}
        borderWidth={borderWidth}
        {...wrapperProps}
      >
        <input
          className={cx('checkbox', className)}
          type="checkbox"
          id={id || defaultId}
          disabled={disabled}
          checked={checked}
          {...inputProps}
          {...props}
        />
        <div className="container">{checked && <Icon icon={Icon.icons.check} className="tick" />}</div>
        {label && (
          <Text weight={theme.typography.weights.regular} size={theme.typography.sizes.s} className="labelTitle">
            {label}
          </Text>
        )}
      </StyledLabel>
    );
  },
);
