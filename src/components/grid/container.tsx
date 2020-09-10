import * as React from 'react';
import css from 'classnames';

// import s from './styles.scss';
import { container } from './style';

type Props = React.HTMLAttributes<HTMLDivElement>;

export const GridContainer: React.FC<Props> = ({ className, children, ...props }: Props): JSX.Element => {
  return (
    <div {...props} className={css(container, className)}>
      {children}
    </div>
  );
};
