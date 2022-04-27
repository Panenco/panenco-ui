import * as React from 'react';
import { StyledPopupBody } from './style';

export interface PopupBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  autofocusInside?: boolean;
}

const PopupBody = ({ autofocusInside = true, ...props }: PopupBodyProps): JSX.Element => (
  <StyledPopupBody data-autofocus-inside={autofocusInside || undefined} className="popupBody" {...props} />
);

export { PopupBody };
