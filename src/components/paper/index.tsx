import * as React from 'react';
import { StyledPaper } from './styles';

export interface PaperProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Content of the Paper
   * */
  children?: React.ReactNode;
}
export const Paper = React.forwardRef<HTMLDivElement, PaperProps>(
  ({ children = 'Content', className, style, ...props }, ref): JSX.Element => {
    return (
      <StyledPaper ref={ref} style={style} className={className} {...props}>
        {children}
      </StyledPaper>
    );
  },
);
