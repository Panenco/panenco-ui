import * as React from 'react';
import cx from 'classnames';
import { useTheme } from 'utils/hooks';
import * as ReactDOM from 'react-dom';
import { Text, Icon, ButtonIcon } from 'components';
import {
  StyledPopup,
  StyledPopupBackdrop,
  StyledPopupContainer,
  StyledPopupHeader,
  StyledPopupHeaderTitleRow,
  StyledPopupTitle,
  StyledPopupBody,
} from './style';

export interface PopupProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
  onHide: () => void;
  show: boolean;
  backdropClosable?: boolean;
  closeBtn?: boolean;
  disableEscapeKeyDown?: boolean;
}

export const Popup = React.forwardRef<HTMLDivElement, PopupProps>(
  (
    {
      title,
      description,
      className,
      children,
      onHide,
      show,
      backdropClosable = true,
      closeBtn = true,
      disableEscapeKeyDown = false,
      ...props
    }: PopupProps,
    ref,
  ): JSX.Element => {
    const theme = useTheme();

    const popupStopPropagation = (e: React.MouseEvent<HTMLElement>): void => {
      e.stopPropagation();
    };

    const handleEscClose = (ev: KeyboardEvent): void => {
      if (ev.key === 'Escape') onHide();
    };

    React.useEffect(() => {
      const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
      if (show) {
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = scrollBarWidth + 'px';
      } else {
        document.body.style.overflow = 'visible';
        document.body.style.paddingRight = '0';
      }

      if (show && !disableEscapeKeyDown) {
        document.addEventListener('keydown', handleEscClose);
        return () => {
          document.removeEventListener('keydown', handleEscClose);
        };
      }

      return;
    }, [show, disableEscapeKeyDown]);

    const emptyHeader: boolean = !title && !description && !closeBtn;
    return ReactDOM.createPortal(
      <>
        {show && (
          <>
            <StyledPopupBackdrop theme={theme} />

            <StyledPopupContainer onClick={backdropClosable ? onHide : undefined}>
              <StyledPopup onClick={popupStopPropagation} className={cx(className)} ref={ref} theme={theme} {...props}>
                {!emptyHeader && (
                  <StyledPopupHeader>
                    <StyledPopupHeaderTitleRow>
                      <StyledPopupTitle>
                        {title && (
                          <Text
                            size={theme.typography.sizes.l}
                            weight={theme.typography.weights.bold}
                            color={theme.colors.dark}
                          >
                            {title}
                          </Text>
                        )}
                      </StyledPopupTitle>
                      {closeBtn && (
                        <div>
                          <ButtonIcon onClick={onHide} icon={Icon.icons.delete} />
                        </div>
                      )}
                    </StyledPopupHeaderTitleRow>
                    {description && (
                      <Text size={theme.typography.sizes.m} color={theme.colors.dark}>
                        {description}
                      </Text>
                    )}
                  </StyledPopupHeader>
                )}
                <StyledPopupBody emptyHeader={emptyHeader}>{children}</StyledPopupBody>
              </StyledPopup>
            </StyledPopupContainer>
          </>
        )}
      </>,
      document.body,
    );
  },
);
