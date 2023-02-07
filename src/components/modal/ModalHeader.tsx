import * as React from 'react';
import { ButtonIcon } from 'components';
import { StyledModalHeader } from './style';
import { ModalContext } from './modalContext';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * The content of the modal header
   * */
  children?: React.ReactNode;
  /**
   * If `true`, the close button will be displayed
   * */
  closeButton?: boolean;
}
export const ModalHeader = React.forwardRef<HTMLDivElement, ModalHeaderProps>(
  ({ children, closeButton = true, ...props }: ModalHeaderProps, ref): JSX.Element => {
    const { onHide } = React.useContext(ModalContext);
    return (
      <StyledModalHeader className='modalHeader' {...props} ref={ref}>
        <div>{children}</div>
        {closeButton && onHide && (
          <div>
            <ButtonIcon aria-label='Close' onClick={onHide} icon='remove' size={24} />
          </div>
        )}
      </StyledModalHeader>
    );
  },
);
