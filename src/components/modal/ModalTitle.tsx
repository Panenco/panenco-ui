import * as React from 'react';
import { useTheme } from 'styled-components';
import { Text } from 'components';

export interface ModalTitleProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the modal title
   * */
  children: React.ReactNode;
}
export const ModalTitle = React.forwardRef<HTMLDivElement, ModalTitleProps>(
  ({ children, ...props }: ModalTitleProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
      <Text
        ref={ref}
        size={theme.typography.sizes.l}
        weight={theme.typography.weights.bold}
        color={theme.colors.base900}
        className='modalTitle'
        {...props}
      >
        {children}
      </Text>
    );
  },
);
