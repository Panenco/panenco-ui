import * as React from 'react';
import * as cx from 'classnames';

import { useTheme } from 'utils/hooks';
import { StampVariantType } from 'index';
import { StyledStamp } from './style';

export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color background and border (when variant === 'fulfilled')
   */
  backgroundColor?: string;
  /**
   * Border radius
   */
  borderRadius?: number;
  /**
   * content of the Stamp
   */
  children?: React.ReactNode;
  /**
   * Color text-content and border;
   */
  color?: string;
  /**
   * The variant to use
   */
  variant?: StampVariantType;
}

export const Stamp = React.forwardRef<HTMLDivElement, StampProps>(
  (
    { className, color: colorProp, backgroundColor, borderRadius = 21, variant, children, ...props }: StampProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();
    const color = colorProp || theme.colors.success;

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
