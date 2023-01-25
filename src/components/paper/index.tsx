import * as React from 'react';
import { StyledPaper } from './styles';

export const Paper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children = 'Content', className, style, ...props }: React.HTMLAttributes<HTMLDivElement>, ref): JSX.Element => {
    return (
      <StyledPaper ref={ref} style={style} className={className} {...props}>
        {children}
      </StyledPaper>
    );
  },
);
