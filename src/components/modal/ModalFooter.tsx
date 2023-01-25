import * as React from 'react';
import { StyledModalFooter } from './style';

export interface ModalFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the modal footer
   * */
  children: React.ReactNode;
}
export const ModalFooter = React.forwardRef<HTMLDivElement, ModalFooterProps>(
  ({ children, ...props }: ModalFooterProps, ref): JSX.Element => {
    return (
      <StyledModalFooter className='modalFooter' {...props} ref={ref}>
        {children}
      </StyledModalFooter>
    );
  },
);
