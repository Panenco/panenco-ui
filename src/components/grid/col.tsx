import cx from 'classnames';
import * as React from 'react';

import { Col as StyledCol } from './style';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number | string;
  s?: number | string;
  m?: number | string;
  ml?: number | string;
  l?: number | string;
  xl?: number | string;
}

export const Col = ({
  className,
  xs = 4,
  s = 8,
  m = 8,
  ml = 12,
  l = 12,
  xl = 12,
  children,
  ...props
}: ColProps): JSX.Element => {
  return (
    <StyledCol
      {...props}
      className={cx(
        `col-xl-${xl}`,
        `col-l-${l}`,
        `col-ml-${ml}`,
        `col-m-${m}`,
        `col-s-${s}`,
        `col-xs-${xs}`,
        className,
      )}
    >
      {children}
    </StyledCol>
  );
};
