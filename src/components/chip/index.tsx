import * as React from 'react';
import cx from 'classnames';

import { Text } from 'components/text';
import { Icon } from 'components/icon';
import { useTheme } from 'styled-components';
import { StyledChip } from './style';
import { IconPropType } from './types';

export interface ChipProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Set checked flag for chip
   */
  checked?: boolean;
  /**
   * Children to be rendered inside the chip
   * */
  children: React.ReactNode;
  /**
   * Icon which will be rendered when checked
   * */
  icon?: IconPropType;
  /**
   * Icon className which will be rendered when checked
   * */
  iconClassName?: string;
  /**
   * Callback function to be called when icon is clicked
   * */
  onIconClick?: (e: React.UIEvent) => void;
  /**
   * Icon which will be rendered when unchecked
   * */
  uncheckedIcon?: IconPropType;
}

export const Chip = React.forwardRef<HTMLButtonElement, ChipProps>(
  (
    {
      checked,
      children,
      disabled,
      className,
      style,
      icon = 'checkCircle',
      onIconClick,
      uncheckedIcon,
      ...props
    }: ChipProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();

    const handleIconClick = (e: React.UIEvent): void => {
      e.persist();
      e.stopPropagation();

      if (onIconClick) {
        onIconClick(e);
      }
    };

    const iconComponent = checked ? icon : uncheckedIcon || null;
    return (
      <StyledChip
        type='button'
        role='switch'
        aria-checked={checked}
        disabled={disabled}
        checked={checked}
        className={cx(disabled && 'chipDisabled', checked && 'chipChecked', className)}
        style={style}
        ref={ref}
        {...props}
      >
        <Text
          weight={checked ? theme.typography.weights.bold : theme.typography.weights.regular}
          size={theme.typography.sizes.m}
          className='labelTitle'
        >
          {children}
        </Text>
        {iconComponent &&
          (React.isValidElement(iconComponent) ? (
            iconComponent
          ) : (
            <Icon icon={iconComponent} onClick={onIconClick && handleIconClick} />
          ))}
      </StyledChip>
    );
  },
);
