import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { StyledPopupFooter } from './style';

export interface PopupFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onHide: () => void;
  closeBtn?: boolean;
}
export const PopupFooter = React.forwardRef<HTMLDivElement, PopupFooterProps>(
  ({ children }: PopupFooterProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
      <StyledPopupFooter theme={theme} ref={ref}>
        {children}
      </StyledPopupFooter>
    );
  },
);
