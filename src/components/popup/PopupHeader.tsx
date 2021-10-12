import * as React from 'react';
import { useTheme } from 'utils/hooks';
import { Icon, ButtonIcon } from 'components';
import { StyledPopupHeader, CloseBtnContainer } from './style';

export interface PopupHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  onHide: () => void;
  closeBtn?: boolean;
}
export const PopupHeader = React.forwardRef<HTMLDivElement, PopupHeaderProps>(
  ({ children, onHide, closeBtn = true }: PopupHeaderProps, ref): JSX.Element => {
    const theme = useTheme();
    return (
      <StyledPopupHeader theme={theme} ref={ref}>
        <div>{children}</div>
        {closeBtn && (
          <CloseBtnContainer>
            <ButtonIcon aria-label="Close" onClick={onHide} icon={Icon.icons.delete} />
          </CloseBtnContainer>
        )}
      </StyledPopupHeader>
    );
  },
);
