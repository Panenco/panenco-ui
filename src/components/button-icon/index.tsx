import * as React from 'react';
import { Icon, Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { Link } from 'react-router-dom';
import cx from 'classnames';
import { StyledButtonIcon } from './style';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: HTMLObjectElement;
  iconClassName?: string;
  iconLeft?: boolean;
  color?: string;
  to?: string;
  component?: 'link' | JSX.Element | React.ReactElement;
}

export const ButtonIcon = React.forwardRef<HTMLButtonElement, ButtonIconProps>(
  (props: ButtonIconProps, ref): JSX.Element => {
    const {
      icon = Icon.icons.filter,
      type,
      className,
      children,
      iconLeft,
      disabled,
      style,
      iconClassName,
      color,
      component,
      to,
      ...rest
    } = props;
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledButtonIcon
        as={component === 'link' ? Link : component}
        to={component === 'link' ? to : null}
        type={type}
        className={cx(iconLeft && 'buttonIconLeft', className)}
        disabled={disabled}
        theme={theme}
        mode={mode}
        ref={ref}
        style={style}
        color={color}
        {...rest}
      >
        <Icon icon={icon} className={cx('iconClass', iconClassName)} />
        {children && <Text className="buttonIconTitle">{children}</Text>}
      </StyledButtonIcon>
    );
  },
);
