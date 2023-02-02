import * as React from 'react';
import { Icon, icons, Text, IconType } from 'components';
import { Link } from 'react-router-dom';

import cx from 'classnames';

import { StyledButtonIcon } from './style';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Children to render
   * */
  children?: React.ReactNode;
  /**
   * Color of the button
   * */
  color?: string;
  /**
   * Component to be rendered, it could be **button** or **Link** from 'react-router-dom';
   * */
  component?: React.ElementType;
  /**
   * Icon to render
   * */
  icon?: IconType | keyof typeof icons.sm;
  /**
   * Icon class name
   * */
  iconClassName?: string;
  /**
   * Icon on the left
   * */
  iconLeft?: boolean;
  /**
   * Size of the button
   * */
  size?: number;
  /**
   * path to redirect (prop for **Link** component);
   * */
  to?: string;
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (props: ButtonIconProps, ref): JSX.Element => {
    const {
      icon = 'filter',
      type,
      className,
      children,
      iconLeft,
      disabled,
      style,
      iconClassName,
      color,
      to,
      component,
      size,
      ...rest
    } = props;

    return (
      <StyledButtonIcon
        as={component === 'link' ? Link : component}
        type={type}
        className={cx(iconLeft && 'buttonIconLeft', disabled && 'buttonDisabled', className)}
        disabled={disabled}
        ref={ref}
        style={style}
        color={color}
        size={size}
        {...rest}
        to={component === 'link' ? to : undefined}
      >
        {React.isValidElement(icon) ? icon : <Icon icon={icon} className={cx('iconClass', iconClassName)} />}
        {children && <Text className='buttonIconTitle'>{children}</Text>}
      </StyledButtonIcon>
    );
  },
);
