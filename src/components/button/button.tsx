import * as React from 'react';
import { Icon, Text } from 'components';
import type { IconSpritesheetType } from 'components';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';

import { StyledButton, StyledLink } from './style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
  component?: string;
  to?: string;
  iconClassName?: string;
  icon?: IconSpritesheetType;
  iconLeft?: IconSpritesheetType;
  iconRight?: IconSpritesheetType;
  color?: string;
  variant: 'default' | 'transparent';
}

export const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      children,
      disabled,
      className,
      type,
      to,
      component,
      iconClassName,
      icon,
      iconLeft,
      iconRight,
      tabIndex,
      variant = 'default',
      color,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const theme = useTheme();
    const { mode } = useMode();
    const StyledComponent = component === 'link' ? StyledLink : StyledButton;

    return (
      <StyledComponent
        type={type}
        disabled={disabled}
        className={cx(disabled && 'disabled', iconLeft && 'iconLeft', iconRight && 'iconRight', className)}
        theme={theme}
        mode={mode}
        ref={ref}
        color={color}
        variant={variant}
        {...props}
        to={component === 'link' ? to : null}
        tabIndex={tabIndex || (disabled && component === 'link') ? -1 : null}
      >
        {((icon && iconLeft) || iconLeft) && (
          <Icon icon={icon || iconLeft} className={cx('buttonIcon', iconLeft && 'buttonIconLeft', iconClassName)} />
        )}
        <Text className="buttonTitle" size={theme.typography.sizes.s}>
          {children}
        </Text>
        {((icon && !iconLeft) || iconRight) && (
          <Icon icon={icon || iconRight} className={cx('buttonIcon', iconRight && 'buttonIconRight', iconClassName)} />
        )}
      </StyledComponent>
    );
  },
);

export const PrimaryButton = React.forwardRef(
  ({ className, iconClassName, ...props }: ButtonProps, ref): JSX.Element => (
    <Button ref={ref} className={cx('buttonPrimary', className)} iconClassName={iconClassName} {...props} />
  ),
);

export const SecondaryButton = React.forwardRef(
  ({ className, iconClassName, ...props }: ButtonProps, ref): JSX.Element => (
    <Button ref={ref} className={cx('buttonSecondary', className)} iconClassName={iconClassName} {...props} />
  ),
);
