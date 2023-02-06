import * as React from 'react';
import * as ReactDOM from 'react-dom';
import cx from 'classnames';

import { StyledPopup, StyledPopupBackdrop, StyledPopupContainer, StyledFocusLock } from './style';
import { PopupContext } from './popupContext';
import { PopupSizesType } from './types';

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * If `true`, the popup will be focused on open
   * @default true
   * */
  autoFocus?: boolean;
  /**
   * If `true`, the popup will be closed when the backdrop is clicked
   * @default true
   * */
  backdropClosable?: boolean;
  /**
   * The content of the popup
   * */
  children: React.ReactNode;
  /**
   * The CSS class name of the popup dialog
   * */
  dialogClassName?: string;
  /**
   * If `true`, the popup will not be closed when the escape key is pressed
   * @default false
   * */
  disableEscapeKeyDown?: boolean;
  /**
   * Callback fired when the popup requests to be closed
   * */
  onHide?: () => void;
  /**
   * If `true`, the popup is visible
   * @default true
   * */
  show?: boolean;
  /**
   * The size of the popup
   * @default md
   * */
  size?: PopupSizesType;
}
export const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
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
    }: PopupProps,
    ref,
  ): JSX.Element => {
    const popupStopPropagation = (e: React.MouseEvent<HTMLDivElement>): void => {
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
      <PopupContext.Provider value={{ onHide }}>
        {show &&
          ReactDOM.createPortal(
            <StyledFocusLock returnFocus autoFocus={autoFocus} {...props}>
              <StyledPopupBackdrop className='popupBackdrop' />
              <StyledPopupContainer
                onMouseDown={handleBackdropClose}
                className='popupContainer'
                tabIndex={-1}
                role='dialog'
                aria-modal='true'
                ref={ref}
              >
                <StyledPopup
                  size={size}
                  className={cx('popupDialog', dialogClassName)}
                  onMouseDown={popupStopPropagation}
                >
                  {children}
                </StyledPopup>
              </StyledPopupContainer>
            </StyledFocusLock>,
            document.body,
          )}
      </PopupContext.Provider>
    );
  },
);
