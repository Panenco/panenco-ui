import cx from 'classnames';

import { Icon, icons, Text } from 'components';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from 'styled-components';
import { ButtonVariantType } from 'utils/types';

import Spinner from './spinner';
import { StyledButton } from './style';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button color
   * */
  color?: string;
  /**
   * Button component
   * */
  component?: React.ElementType;
  /**
   * Button icon
   * */
  icon?: keyof typeof icons.sm;
  /**
   * Button icon class name
   * */
  iconClassName?: string;
  /**
   * Button icon left
   * */
  iconLeft?: keyof typeof icons.sm;
  /**
   * Button icon right
   * */
  iconRight?: keyof typeof icons.sm;
  /**
   * Button is loading
   * */
  isLoading?: boolean;
  /**
   * Button link
   * */
  to?: string;
  /**
   * Button variant
   * */
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
        ref={ref}
        color={color}
        variant={variant}
        {...props}
        to={component === 'link' ? to : undefined}
        tabIndex={tabIndex || (isDisabled && component === 'link') ? -1 : 0}
      >
        <div className={cx('content', isLoading && 'contentInvisible')}>
          {iconLeft && <Icon icon={iconLeft} className={cx('buttonIcon', 'buttonIconLeft', iconClassName)} />}
          <Text className='buttonTitle' size={theme.typography.sizes.m}>
            {children}
          </Text>
          {icon && <Icon icon={icon} className={cx('buttonIcon', iconClassName)} />}
          {iconRight && <Icon icon={iconRight} className={cx('buttonIcon', 'buttonIconRight', iconClassName)} />}
        </div>
        {isLoading && <Spinner />}
      </StyledButton>
    );
  },
);
