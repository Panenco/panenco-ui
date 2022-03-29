import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { StampVariantType } from 'index';
import { StyledStamp } from './style';

export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
  backgroundColor?: string;
  borderRadius?: number;
  variant?: StampVariantType;
  weigth?: number;
}

export const Stamp = React.forwardRef<HTMLDivElement, StampProps>(
  ({ className, color: colorProp, backgroundColor, borderRadius: borderRadiusProp, variant, children, ...props }: StampProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
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
        mode={mode}
        ref={ref}
        {...props}>
        {children}
      </StyledStamp>
    );
  },
);
