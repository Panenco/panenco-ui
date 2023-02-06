import * as React from 'react';
import { StyledPopupFooter } from './style';

export interface PopupFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the popup footer
   * */
  children: React.ReactNode;
}
export const PopupFooter = React.forwardRef<HTMLDivElement, PopupFooterProps>(
  ({ children, ...props }: PopupFooterProps, ref): JSX.Element => {
    return (
      <StyledPopupFooter className='popupFooter' {...props} ref={ref}>
        {children}
      </StyledPopupFooter>
    );
  },
);
