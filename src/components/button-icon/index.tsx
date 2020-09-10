import * as React from 'react';
import { Icon, Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';

import cx from 'classnames';
import { StyledButtonIcon } from './style';

export interface ButtonIconProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: HTMLObjectElement;
  iconClassName?: string;
  iconLeft?: boolean;
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
      ...rest
    } = props;
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledButtonIcon
        type={type}
        className={cx(iconLeft && 'buttonIconLeft', className)}
        disabled={disabled}
        theme={theme}
        mode={mode}
        ref={ref}
        style={style}
        {...rest}
      >
        <div className="container">
          <Icon icon={icon} className={cx('iconClass', iconClassName)} />
        </div>
        <Text className="buttonIconTitle">{children}</Text>
      </StyledButtonIcon>
    );
  },
);
