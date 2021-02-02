import * as React from 'react';
import cx from 'classnames';
import { Col as StyledCol } from './style';

export interface ColProps extends React.HTMLAttributes<HTMLDivElement> {
  s?: number | string;
  m?: number | string;
  l?: number | string;
}

export const Col = ({ className, s = 4, m = 8, l = 12, children, ...props }: ColProps): JSX.Element => {
  return (
    <StyledCol {...props} className={cx(`col-l-${l}`, `col-m-${m}`, `col-s-${s}`, className)}>
      {children}
    </StyledCol>
  );
};
