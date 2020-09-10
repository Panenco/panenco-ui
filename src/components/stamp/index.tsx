import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { StyledStamp } from './style';

export interface StampProps extends React.HTMLAttributes<HTMLDivElement> {
  color?: string;
}

export const Stamp = React.forwardRef<HTMLDivElement, StampProps>(
  ({ className, color: colorProp, children, ...props }: StampProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const color = colorProp || theme.colors.success;

    return (
      <StyledStamp className={cx('stamp', className)} color={color} theme={theme} mode={mode} ref={ref} {...props}>
        {children}
      </StyledStamp>
    );
  },
);
