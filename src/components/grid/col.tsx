import cx from 'classnames';
import * as React from 'react';

import { Col as StyledCol } from './style';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: number | string | null;
  s?: number | string | null;
  m?: number | string | null;
  ml?: number | string | null;
  l?: number | string | null;
  xl?: number | string | null;
}

export const Col = ({ className, xs, s, m, ml, l, xl, children, ...props }: ColProps): JSX.Element => {
  return (
    <StyledCol
      {...props}
      className={cx(
        `col-auto`,
        {
          [`col-xl-${xl}`]: !!xl,
          [`col-l-${l}`]: !!l,
          [`col-ml-${ml}`]: !!ml,
          [`col-m-${m}`]: !!m,
          [`col-s-${s}`]: !!s,
          [`col-xs-${xs}`]: !!xs,
        },
        className,
      )}
    >
      {children}
    </StyledCol>
  );
};
