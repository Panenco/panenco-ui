import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { StyledPopupFooter } from './style';

export interface PopupFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
export const PopupFooter = React.forwardRef<HTMLDivElement, PopupFooterProps>(
  ({ children, ...props }: PopupFooterProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
      <StyledPopupFooter {...props} theme={theme} ref={ref}>
        {children}
      </StyledPopupFooter>
    );
  },
);
