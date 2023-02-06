import * as React from 'react';
import { StyledPopupBody } from './style';

export interface PopupBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the popup content will be focused on open
   * */
  autofocusInside?: boolean;
  /**
   * The content of the popup body
   * */
  children: React.ReactNode;
}

const PopupBody = ({ autofocusInside = true, ...props }: PopupBodyProps): JSX.Element => (
  <StyledPopupBody data-autofocus-inside={autofocusInside || undefined} className='popupBody' {...props} />
);

export { PopupBody };
