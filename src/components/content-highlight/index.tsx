import * as React from 'react';
import { useTheme, useMode } from 'utils/hooks';
import { Text } from 'components';
import { StyledContent } from './style';

export const ContentHighlight = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ children = 'Content', className, style, ...props }: React.HTMLAttributes<HTMLDivElement>, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();

    return (
      <StyledContent theme={theme} mode={mode} ref={ref} style={style} className={className} {...props}>
        <Text className="content">{children}</Text>
      </StyledContent>
    );
  },
);
