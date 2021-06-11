import cx from 'classnames';
import * as React from 'react';

import { Col as StyledCol } from './style';

type ColSize = number | string | null;

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  xs?: ColSize;
  s?: ColSize;
  m?: ColSize;
  ml?: ColSize;
  l?: ColSize;
  xl?: ColSize;
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
