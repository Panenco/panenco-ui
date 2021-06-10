import cx from 'classnames';
import { Icon, Text } from 'components';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useMode, useTheme } from 'utils/hooks';

import Spinner from './spinner';
import { StyledButton } from './style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  [key: string]: any;
  component?: string;
  to?: string;
  iconClassName?: string;
  icon?: any;
  iconLeft?: any;
  iconRight?: any;
  color?: string;
  variant?: 'default' | 'transparent';
}

export const Button = React.forwardRef<any, ButtonProps>(
  (
    {
      children,
      disabled,
      className,
      type = 'button',
      to,
      component,
      iconClassName,
      icon,
      iconLeft,
      iconRight,
      tabIndex,
      variant = 'default',
      color,
      isLoading,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const theme = useTheme();
    const { mode } = useMode();

    const isDisabled = disabled || isLoading;

    return (
      <StyledButton
        as={component === 'link' ? Link : component}
        type={type}
        disabled={isDisabled}
        className={cx(iconLeft && 'iconLeft', iconRight && 'iconRight', className)}
        theme={theme}
        mode={mode}
        ref={ref}
        color={color}
        variant={variant}
        {...props}
        to={component === 'link' ? to : null}
        tabIndex={tabIndex || (isDisabled && component === 'link') ? -1 : null}
      >
        <div className={cx('content', isLoading && 'contentInvisible')}>
          {((icon && iconLeft) || iconLeft) && (
            <Icon icon={icon || iconLeft} className={cx('buttonIcon', iconLeft && 'buttonIconLeft', iconClassName)} />
          )}
          <Text className="buttonTitle" size={theme.typography.sizes.m}>
            {children}
          </Text>
          {((icon && !iconLeft) || iconRight) && (
            <Icon
              icon={icon || iconRight}
              className={cx('buttonIcon', iconRight && 'buttonIconRight', iconClassName)}
            />
          )}
        </div>
        {isLoading && <Spinner />}
      </StyledButton>
    );
  },
);

export const PrimaryButton = React.forwardRef(
  ({ className, iconClassName, ...props }: ButtonProps, ref): JSX.Element => (
    <Button ref={ref} className={cx('buttonPrimary', className)} iconClassName={iconClassName} {...props} />
  ),
);

export const SecondaryButton = React.forwardRef(
  ({ className, iconClassName, ...props }: ButtonProps, ref): JSX.Element => {
    return <Button ref={ref} className={cx('buttonSecondary', className)} iconClassName={iconClassName} {...props} />;
  },
);
