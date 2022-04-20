import * as React from 'react';
import { useTheme } from 'utils/hooks';
import * as ReactDOM from 'react-dom';
import FocusLock from 'react-focus-lock';
import cx from 'classnames';
import { StyledPopup, StyledPopupBackdrop, StyledPopupContainer } from './style';
import { PopupContext } from './popupContext';
import { PopupSizesType } from './types';

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  onHide?: () => void;
  show?: boolean;
  backdropClosable?: boolean;
  disableEscapeKeyDown?: boolean;
  size?: PopupSizesType;
  dialogClassName?: string;
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
            <FocusLock {...props} returnFocus>
              <StyledPopupBackdrop className="popupBackdrop" theme={theme} />
              <StyledPopupContainer
                className="popupContainer"
                tabIndex={-1}
                role="dialog"
                aria-modal="true"
                ref={ref}
                onMouseDown={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) =>
                  backdropClosable && e.target === e.currentTarget && onHide ? onHide() : undefined
                }
              >
                <StyledPopup
                  size={size}
                  className={cx('popupDialog', dialogClassName)}
                  onClick={popupStopPropagation}
                  theme={theme}
                >
                  {children}
                </StyledPopup>
              </StyledPopupContainer>
            </FocusLock>,
            document.body,
          )}
      </PopupContext.Provider>
    );
  },
);
