import * as React from 'react';
import * as cx from 'classnames';

import { Row as StyledRow } from './style';

export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  spacing?: number | string | null | [number, number];
}

export const Row: React.FunctionComponent<RowProps> = ({
  spacing,
  className,
  children,
  ...props
}: RowProps): JSX.Element => {
  let formattedSpacingX = spacing;
  let formattedSpacingY = spacing;
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
        'spacing-xs-auto-auto',
        {
          [`spacing-xs-${formattedSpacingX}-${formattedSpacingY}`]: !!spacing,
        },
        className,
      )}
    >
      {children}
    </StyledRow>
  );
};
