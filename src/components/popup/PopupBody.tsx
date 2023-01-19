import * as React from 'react';
import { StyledPopupBody } from './style';

export interface PopupBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  autofocusInside?: boolean;
  children: React.ReactNode;
}

const PopupBody = ({ autofocusInside = true, ...props }: PopupBodyProps): JSX.Element => (
  <StyledPopupBody data-autofocus-inside={autofocusInside || undefined} className='popupBody' {...props} />
);

export { PopupBody };
