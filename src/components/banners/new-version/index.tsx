import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrimaryButton, SecondaryButton, Text } from '../../index';
import { useTheme, useMode } from '../../../utils/hooks';

import { StyledNewVersionPaper } from './styles';

export type NewVersionProps = {
  className?: string;
  title: string;
  description: string;
  updateButtonText: string;
  cancelButtonText: string;
  onUpdate: (any) => Promise<any> | void;
  onCancel: (any) => Promise<any> | void;
  portalContainer: Element;
};

const NewVersion = ({
  className,
  title = 'New version is available!',
  description = 'A new app version is available and ready to be installed',
  updateButtonText = 'Install',
  cancelButtonText = 'Dismiss',
  onUpdate,
  onCancel,
  portalContainer,
}): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();

  return ReactDOM.createPortal(
    <StyledNewVersionPaper className={className} mode={mode} theme={theme}>
      <div className="newVersionModalTitle">
        <Text
          size={theme.typography.sizes.s}
          weight={theme.typography.weights.black}
          className="newVersionModalTitleText"
        >
          {title}
        </Text>
      </div>
      <div className="newVersionModalDescription">
        <Text size={theme.typography.sizes.s} className="newVersionModalDescriptionText">
          {description}
        </Text>
      </div>
      <div className="newVersionModalActions">
        <SecondaryButton onClick={onCancel}>{cancelButtonText}</SecondaryButton>
        <PrimaryButton onClick={onUpdate}>{updateButtonText}</PrimaryButton>
      </div>
    </StyledNewVersionPaper>,
    portalContainer,
  );
};

export { NewVersion };
