import * as React from 'react';
import cx from 'classnames';

import { StampVariantType } from 'index';
import { StyledStamp } from './style';

export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Color background and border (when variant === 'fulfilled')
   * @default transparent / success
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
   * @default success / base100
   */
  color?: string;
  /**
   * The variant to use
   */
  variant?: StampVariantType;
}

export const Stamp = React.forwardRef<HTMLDivElement, StampProps>(
  (
    { className, color, backgroundColor, borderRadius = 21, variant = 'outlined', children, ...props }: StampProps,
    ref,
  ): JSX.Element => {
    return (
      <StyledStamp
        variant={variant}
        className={cx('stamp', className)}
        color={color}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        ref={ref}
        {...props}
      >
        {children}
      </StyledStamp>
    );
  },
);
