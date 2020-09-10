import * as React from 'react';
import css from 'classnames';
import { row } from './style';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const Row: React.FunctionComponent<Props> = ({ className, children, ...props }: Props): JSX.Element => {
  return (
    <div {...props} className={css(row, className)}>
      {children}
    </div>
  );
};
