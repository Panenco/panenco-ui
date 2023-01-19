import * as React from 'react';
import { Icon, icons, Text, IconType } from 'components';
import { Link } from 'react-router-dom';
import { useTheme } from 'utils/hooks';

import cx from 'classnames';

import { StyledButtonIcon } from './style';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: string;
  component?: React.ElementType;
  icon: IconType | keyof typeof icons.sm;
  iconClassName?: string;
  iconLeft?: boolean;
  size?: number;
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
    const theme = useTheme();

    return (
      <StyledButtonIcon
        as={component === 'link' ? Link : component}
        type={type}
        className={cx(iconLeft && 'buttonIconLeft', disabled && 'buttonDisabled', className)}
        disabled={disabled}
        theme={theme}
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
