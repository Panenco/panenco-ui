import * as React from 'react';
import * as ReactDOM from 'react-dom';
import cx from 'classnames';

import { StyledModal, StyledModalBackdrop, StyledModalContainer, StyledFocusLock } from './style';
import { ModalContext } from './modalContext';
import { ModalSizesType } from './types';

export interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the modal will be focused on open
   * @default true
   * */
  autoFocus?: boolean;
  /**
   * If `true`, the modal will be closed when the backdrop is clicked
   * @default true
   * */
  backdropClosable?: boolean;
  /**
   * The content of the modal
   * */
  children: React.ReactNode;
  /**
   * The CSS class name of the modal dialog
   * */
  dialogClassName?: string;
  /**
   * If `true`, the modal will not be closed when the escape key is pressed
   * @default false
   * */
  disableEscapeKeyDown?: boolean;
  /**
   * Callback fired when the modal requests to be closed
   * */
  onHide?: () => void;
  /**
   * If `true`, the modal is visible
   * @default true
   * */
  show?: boolean;
  /**
   * The size of the modal
   * @default md
   * */
  size?: ModalSizesType;
}
export const Modal = React.forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      children,
      onHide,
      show = true,
      backdropClosable = true,
      disableEscapeKeyDown = false,
      size = 'md',
      dialogClassName,
      autoFocus = true,
      ...props
    }: ModalProps,
    ref,
  ): JSX.Element => {
    const modalStopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
      e.stopPropagation();
    };

    const handleEscClose = (ev: KeyboardEvent): void => {
      if (ev.key === 'Escape' && onHide) onHide();
    };

    const handleBackdropClose = (): void => {
      if (backdropClosable && onHide) {
        onHide();
      }
    };

    React.useEffect(() => {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (show) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth} + 'px'`;
      } else {
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight = '0';
      }
      if (show && !disableEscapeKeyDown && onHide) {
        document.addEventListener('keydown', handleEscClose);
        return (): void => {
          document.removeEventListener('keydown', handleEscClose);
        };
      }

      return (): void => {};
    }, [show, disableEscapeKeyDown]);

    return (
      <ModalContext.Provider value={{ onHide }}>
        {show &&
          ReactDOM.createPortal(
            <StyledFocusLock returnFocus autoFocus={autoFocus} {...props}>
              <StyledModalBackdrop className='modalBackdrop' />
              <StyledModalContainer
                onMouseDown={handleBackdropClose}
                className='modalContainer'
                tabIndex={-1}
                role='dialog'
                aria-modal='true'
                ref={ref}
              >
                <StyledModal
                  size={size}
                  className={cx('modalDialog', dialogClassName)}
                  onMouseDown={modalStopPropagation}
                >
                  {children}
                </StyledModal>
              </StyledModalContainer>
            </StyledFocusLock>,
            document.body,
          )}
      </ModalContext.Provider>
    );
  },
);
