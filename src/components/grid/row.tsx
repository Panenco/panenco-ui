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
  let formattedSpacingX;
  let formattedSpacingY;
  if (typeof spacing === 'string' && spacing.includes(',')) {
    const re = /\s*,\s*/;
    [formattedSpacingX, formattedSpacingY] = spacing.split(re);
  } else if (Array.isArray(spacing)) {
    [formattedSpacingX, formattedSpacingY] = spacing;
  }
  return (
    <StyledRow
      {...props}
      className={cx(
        row,
        {
          [`spacing-xs-${formattedSpacingY || spacing}-${formattedSpacingX || spacing}`]: !!spacing,
        },
        className,
      )}
    >
      {children}
    </StyledRow>
  );
};
