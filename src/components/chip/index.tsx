import * as React from 'react';
import cx from 'classnames';
import { Text } from 'components/text';
import { Icon } from 'components/icon';
import { useTheme, useMode } from 'utils/hooks';
import { StyledChip } from './style';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  checked?: boolean;
  icon?: HTMLObjectElement;
  onIconClick?: any;
  iconClassName?: string;
  iconSize?: number | string;
  textSize?: {
    textSize: string;
    lineHeight: string;
  };
  textWeight?: string;
  textTypography?: {
    weight: string;
    size: {
      textSize: string;
      lineHeight: string;
    };
  };
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
      iconClassName,
      iconSize,
      textSize,
      textWeight,
      textTypography,
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

    return (
      <StyledChip
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        checked={checked}
        className={cx(disabled && 'chipDisabled', className)}
        style={style}
        theme={theme}
        mode={mode}
        ref={ref}
        iconSize={iconSize}
        {...props}
      >
        <Text
          weight={
            textTypography?.weight || textWeight || checked
              ? theme.typography.weights.bold
              : theme.typography.weights.regular
          }
          size={textTypography?.size || textSize || theme.typography.sizes.s}
          className="labelTitle"
        >
          {children}
        </Text>
        {checked && <Icon icon={icon} onClick={onIconClick && handleIconClick} className={iconClassName} />}
      </StyledChip>
    );
  },
);
