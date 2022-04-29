import * as React from 'react';
import { StyledPopupBody } from './style';

const PopupBody = ({ ...props }: React.HTMLAttributes<HTMLDivElement>): JSX.Element => (
  <StyledPopupBody className="popupBody" {...props} />
);

export { PopupBody };
