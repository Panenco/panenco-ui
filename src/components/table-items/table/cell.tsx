import * as React from 'react';
import * as cx_ from 'classnames';

const cx = cx_;
import s from './styles.scss';

interface Props {
  children: React.ReactNode;
  width?: number;
  marginLeft?: boolean;
  className?: string,
}

const Cell: React.FunctionComponent<Props> = (props: Props) => {
  const { className, children, width = 0, marginLeft = false } = props;

  return(
  <div
    className={cx(s.tableCell, className)}
    style={{
      width: `${width}`,
      marginLeft: marginLeft ? 'auto' : 0,
    }}
    {...props}
  >
    {children}
  </div>
)}

export { Cell };
