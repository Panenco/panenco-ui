import cx from 'classnames';
import * as React from 'react';

import { Col as StyledCol } from './style';

type ColSize = number | string | null;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: ColSize;
  sm?: ColSize;
  md?: ColSize;
  lg?: ColSize;
}

export const Col = ({ className, xs, sm, md, lg, children, ...props }: ColProps): JSX.Element => {
  return (
    <StyledCol
      {...props}
      className={cx(
        `col-auto`,
        {
          [`col-lg-${lg}`]: !!lg,
          [`col-md-${md}`]: !!md,
          [`col-sm-${sm}`]: !!sm,
          [`col-xs-${xs}`]: !!xs,
        },
        className,
      )}
    >
      {children}
    </StyledCol>
  );
};
