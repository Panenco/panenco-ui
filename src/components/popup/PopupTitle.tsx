import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Text } from 'components';

export interface PopupTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const PopupTitle = React.forwardRef<HTMLDivElement, PopupTitleProps>(
  ({ children, ...props }: PopupTitleProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
      <Text
        ref={ref}
        size={theme.typography.sizes.l}
        weight={theme.typography.weights.bold}
        color={theme.colors.base900}
        {...props}
      >
        {children}
      </Text>
    );
  },
);
