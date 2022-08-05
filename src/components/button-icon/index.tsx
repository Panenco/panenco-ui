import * as React from 'react';
import { Icon, Text } from 'components';
import { Link } from 'react-router-dom';
import { useTheme } from 'utils/hooks';

import cx from 'classnames';
import { StyledButtonIcon } from './style';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: string;
  iconClassName?: string;
  iconLeft?: boolean;
  color?: string;
  component?: React.ElementType;
  to?: string;
  size?: number;
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
        {/* <Icon icon={icon} className={cx('iconClass', iconClassName)} /> */}
        {children && <Text className='buttonIconTitle'>{children}</Text>}
      </StyledButtonIcon>
    );
  },
);
