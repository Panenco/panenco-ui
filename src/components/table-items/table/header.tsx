import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  children?: React.ReactNode,
}

const Header: React.FunctionComponent<Props> = (props: Props) => {
  const { className, children } = props;

  return(
  <div {...props} className={cx(s.tableHeader, className)}>
    {children}
  </div>
)}

export { Header };
