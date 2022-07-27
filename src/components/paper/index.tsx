import * as React from 'react';
import { useTheme } from '../../utils/hooks';
import { StyledPaper } from './styles';

export const Paper = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children = 'Content', className, style, ...props }: React.HTMLAttributes<HTMLDivElement>, ref): JSX.Element => {
    const theme = useTheme();

    return (
      <StyledPaper theme={theme} ref={ref} style={style} className={className} {...props}>
        {children}
      </StyledPaper>
    );
  },
);
