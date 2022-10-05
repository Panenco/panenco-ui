import * as React from 'react';
import cx from 'classnames';
import { useTheme } from 'utils/hooks';
import { StampVariantType } from 'index';
import { StyledStamp } from './style';

export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  backgroundColor?: string;
  borderRadius?: number;
  color?: string;
  variant?: StampVariantType;
}

export const Stamp = React.forwardRef<HTMLDivElement, StampProps>(
  (
    {
      className,
      color: colorProp,
      backgroundColor,
      borderRadius: borderRadiusProp,
      variant,
      children,
      ...props
    }: StampProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const color = colorProp || theme.colors.success;
    const borderRadius = borderRadiusProp || 21;

    return (
      <StyledStamp
        variant={variant}
        className={cx('stamp', className)}
        color={color}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        theme={theme}
        ref={ref}
        {...props}
      >
        {children}
      </StyledStamp>
    );
  },
);
