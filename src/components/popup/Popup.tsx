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
  autoFocus?: boolean;
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
    const popupRef = React.useRef<HTMLDivElement>(null);

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

    React.useEffect(() => {
      const handleClickOutside = (event) => {
        if (popupRef.current && !popupRef?.current?.contains(event.target) && backdropClosable && onHide && show) {
          onHide();
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [popupRef, backdropClosable, onHide, show]);

    return (
      <PopupContext.Provider value={{ onHide }}>
        {show &&
          ReactDOM.createPortal(
            <FocusLock returnFocus autoFocus={autoFocus} {...props}>
              <StyledPopupBackdrop className="popupBackdrop" theme={theme} />
              <StyledPopupContainer className="popupContainer" tabIndex={-1} role="dialog" aria-modal="true" ref={ref}>
                <StyledPopup size={size} className={cx('popupDialog', dialogClassName)} theme={theme} ref={popupRef}>
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
