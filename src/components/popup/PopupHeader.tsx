import * as React from 'react';
import { ButtonIcon } from 'components';
import { StyledPopupHeader } from './style';
import { PopupContext } from './popupContext';

export interface PopupHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the popup header
   * */
  children?: React.ReactNode;
  /**
   * If `true`, the close button will be displayed
   * */
  closeButton?: boolean;
}
export const PopupHeader = React.forwardRef<HTMLDivElement, PopupHeaderProps>(
  ({ children, closeButton = true, ...props }: PopupHeaderProps, ref): JSX.Element => {
    const { onHide } = React.useContext(PopupContext);
    return (
      <StyledPopupHeader className='popupHeader' {...props} ref={ref}>
        <div>{children}</div>
        {closeButton && onHide && (
          <div>
            <ButtonIcon aria-label='Close' onClick={onHide} icon='remove' />
          </div>
        )}
      </StyledPopupHeader>
    );
  },
);
