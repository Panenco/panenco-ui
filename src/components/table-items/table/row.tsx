import * as React from 'react';
import { Link } from 'react-router-dom';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  children?: React.ReactNode,
  to?: string,
}

const TableRow: React.FunctionComponent<Props> = (props: Props) => {
  const { className, children, to } = props;

  return to ? (
    <Link {...props} to={to} className={cx(s.tableRow, className)}>
      {children}
    </Link>
  ) : (
    <div {...props} className={cx(s.tableRow, className)}>
      {children}
    </div>
  );
};

export { TableRow };
