import * as React from 'react';
import { StyledModalBody } from './style';

export interface ModalBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the modal content will be focused on open
   * */
  autofocusInside?: boolean;
  /**
   * The content of the modal body
   * */
  children: React.ReactNode;
}

const ModalBody = ({ autofocusInside = true, ...props }: ModalBodyProps): JSX.Element => (
  <StyledModalBody data-autofocus-inside={autofocusInside || undefined} className='modalBody' {...props} />
);

export { ModalBody };
