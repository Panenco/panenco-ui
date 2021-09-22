import * as React from 'react';
import cx from 'classnames';
import { Text } from 'components/text';
import { Icon } from 'components/icon';
import { useTheme, useMode } from 'utils/hooks';
import { StyledChip } from './style';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  icon?: HTMLObjectElement;
  uncheckedIcon?: HTMLObjectElement;
  onIconClick?: any;
  iconClassName?: string;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      checked,
      children,
      disabled,
      className,
      style,
      icon = Icon.icons.success,
      onIconClick,
      uncheckedIcon,
      ...props
    }: ChipProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    const handleIconClick = (e: React.UIEvent): void => {
      e.persist();
      e.stopPropagation();

      onIconClick(e);
    };

    const iconComponent = checked ? icon : uncheckedIcon || null;
    return (
      <StyledChip
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        checked={checked}
        className={cx(disabled && 'chipDisabled', checked && 'chipChecked', className)}
        style={style}
        theme={theme}
        mode={mode}
        ref={ref}
        {...props}
      >
        <Text
          weight={checked ? theme.typography.weights.bold : theme.typography.weights.regular}
          size={theme.typography.sizes.m}
          className="labelTitle"
        >
          {children}
        </Text>
        {iconComponent && <Icon icon={iconComponent} onClick={onIconClick && handleIconClick} />}
      </StyledChip>
    );
  },
);
