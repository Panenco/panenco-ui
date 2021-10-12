import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Icon, ButtonIcon } from 'components';
import { StyledPopupHeader } from './style';
import { PopupContext } from './popupContext';

export interface PopupHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  closeButton?: boolean;
}
export const PopupHeader = React.forwardRef<HTMLDivElement, PopupHeaderProps>(
  ({ children, closeButton = true }: PopupHeaderProps, ref): JSX.Element => {
    const theme = useTheme();
    const popupContext = React.useContext(PopupContext);
    return (
      <StyledPopupHeader theme={theme} ref={ref}>
        <div>{children}</div>
        {closeButton && (
          <div>
            <ButtonIcon aria-label="Close" onClick={popupContext?.onHide} icon={Icon.icons.delete} />
          </div>
        )}
      </StyledPopupHeader>
    );
  },
);
