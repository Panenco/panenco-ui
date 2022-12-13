import cx from 'classnames';
import { Icon, Text } from 'components';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'utils/hooks';
import { ButtonVariantType } from 'utils/types';

import Spinner from './spinner';
import { StyledButton } from './style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  component?: React.ElementType;
  icon?: any;
  iconClassName?: string;
  iconLeft?: any;
  iconRight?: any;
  isLoading?: boolean;
  to?: string;
  variant?: ButtonVariantType;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
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
      variant = 'text',
      color,
      isLoading,
      ...props
    }: ButtonProps,
    ref,
  ) => {
    const theme = useTheme();

    const isDisabled = disabled || isLoading;

    return (
      <StyledButton
        as={component === 'link' ? Link : component}
        type={type}
        disabled={isDisabled}
        className={cx(iconLeft && 'iconLeft', iconRight && 'iconRight', isDisabled && 'isDisabled', className)}
        theme={theme}
        ref={ref}
        color={color}
        variant={variant}
        {...props}
        to={component === 'link' ? to : undefined}
        tabIndex={tabIndex || (isDisabled && component === 'link') ? -1 : 0}
      >
        <div className={cx('content', isLoading && 'contentInvisible')}>
          {((icon && iconLeft) || iconLeft) && (
            <Icon icon={icon || iconLeft} className={cx('buttonIcon', iconLeft && 'buttonIconLeft', iconClassName)} />
          )}
          <Text className='buttonTitle' size={theme.typography.sizes.m}>
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

export const PrimaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, iconClassName, ...props }: ButtonProps, ref): JSX.Element => (
    <Button ref={ref} className={cx('buttonPrimary', className)} iconClassName={iconClassName} {...props} />
  ),
);

export const SecondaryButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, iconClassName, ...props }: ButtonProps, ref): JSX.Element => (
    <Button ref={ref} className={cx('buttonSecondary', className)} iconClassName={iconClassName} {...props} />
  ),
);
