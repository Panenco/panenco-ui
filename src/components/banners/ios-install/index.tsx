import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Text } from '../../index';
import { useTheme, useMode } from '../../../utils/hooks';

import { StyledIosInstallPaper } from './styles';

type IosInstallProps = {
  className?: string;
  title: string;
  description: string;
  iconSrc?: string;
  portalContainer: Element;
};

const IosInstall = ({
  className,
  title = 'Company name',
  description = 'Add this app to your homescreen for easy access and better user experience',
  iconSrc,
  portalContainer,
}: IosInstallProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();

  return ReactDOM.createPortal(
    <StyledIosInstallPaper className={className} mode={mode} theme={theme}>
      <div className="installModalContent">
        <div className="installModalIcon">
          {iconSrc && <img className="installModalIconImg" src={iconSrc} alt={title} />}
        </div>
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
          <Text size={theme.typography.sizes.s} className="installModalDescriptionText">
            {description}
          </Text>
        </div>
      </div>
    </StyledIosInstallPaper>,
    portalContainer,
  );
};

export { IosInstall };
