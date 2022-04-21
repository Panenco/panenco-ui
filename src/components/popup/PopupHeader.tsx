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
  ({ children, closeButton = true, ...props }: PopupHeaderProps, ref): JSX.Element => {
    const theme = useTheme();
    const { onHide } = React.useContext(PopupContext);
    return (
      <StyledPopupHeader className="popupHeader" {...props} theme={theme} ref={ref}>
        <div>{children}</div>
        {closeButton && onHide && (
          <div>
            <ButtonIcon aria-label="Close" onClick={onHide} icon={Icon.icons.delete} tabIndex={-1} />
          </div>
        )}
      </StyledPopupHeader>
    );
  },
);
