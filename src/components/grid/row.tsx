import * as React from 'react';
import cx from 'classnames';
import { Row as StyledRow, row } from './style';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number | string | null;
}

export const Row: React.FunctionComponent<RowProps> = ({
  spacing,
  className,
  children,
  ...props
}: RowProps): JSX.Element => {
  return (
    <StyledRow
      {...props}
      className={cx(
        row,
        {
          [`spacing-xs-${spacing}`]: !!spacing,
        },
        className,
      )}
    >
      {children}
    </StyledRow>
  );
};
