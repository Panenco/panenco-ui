import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  children?: React.ReactNode,
}

const Table: React.FunctionComponent<Props> = ({ className, children, ...props }: Props) => (
  <div {...props} className={cx(s.table, className)}>
    {children}
  </div>
);

export { Table };
