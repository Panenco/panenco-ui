import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { PrimaryButton, Text } from '../../index';
import { useTheme, useMode } from '../../../utils/hooks';

import { StyledAndroidInstallPaper } from './styles';

export type AndroidInstallProps = {
  className?: string;
  title: string;
  subtitle: string;
  installButtonText: string;
  iconSrc?: string;
  onInstall: (any) => Promise<any> | void;
  portalContainer: Element;
};

const AndroidInstall = ({
  className,
  title = 'Company name',
  subtitle = 'website.com',
  installButtonText = 'Install',
  onInstall,
  iconSrc,
  portalContainer,
}: AndroidInstallProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();

  return ReactDOM.createPortal(
    <StyledAndroidInstallPaper className={className} theme={theme} mode={mode}>
      <div className="installModalGroup">
        <div className="installModalIcon">
          {iconSrc && <img className="installModalIconImg" src={iconSrc} alt={title} />}
        </div>
        <div className="installModalText">
          <div className="installModalTitle">
            <Text
              size={theme.typography.sizes.m}
              weight={theme.typography.weights.black}
              className="installModalTitleText"
            >
              {title}
            </Text>
          </div>
          <div className="installModalDescription">
            <Text size={theme.typography.sizes.xs} className="installModalDescriptionText">
              {subtitle}
            </Text>
          </div>
        </div>
      </div>

      <div className="installModalActions">
        <PrimaryButton onClick={onInstall}>{installButtonText}</PrimaryButton>
      </div>
    </StyledAndroidInstallPaper>,
    portalContainer,
  );
};

export { AndroidInstall };
