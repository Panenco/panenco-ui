import * as React from 'react';
import { useTheme } from 'utils/hooks';
import * as ReactDOM from 'react-dom';
import cx from 'classnames';

import { StyledPopup, StyledPopupBackdrop, StyledPopupContainer, StyledFocusLock } from './style';
import { PopupContext } from './popupContext';
import { PopupSizesType } from './types';

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  autoFocus?: boolean;
  backdropClosable?: boolean;
  children: React.ReactNode;
  dialogClassName?: string;
  disableEscapeKeyDown?: boolean;
  onHide?: () => void;
  show?: boolean;
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
    const theme = useTheme();
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
              <StyledPopupBackdrop className='popupBackdrop' theme={theme} />
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
                  theme={theme}
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
