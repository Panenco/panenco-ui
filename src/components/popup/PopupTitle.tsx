import * as React from 'react';
import { useTheme } from 'styled-components';
import { Text } from 'components';

export interface PopupTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the popup title
   * */
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
        className='popupTitle'
        {...props}
      >
        {children}
      </Text>
    );
  },
);
