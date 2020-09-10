import * as React from 'react';
import * as ReactDOM from 'react-dom';
import cx from 'classnames';

import { SecondaryButton, Text, Paper } from '../../index';
import { useTheme, useMode } from '../../../utils/hooks';

import { StyledUnsupportedContainer } from './styles';

export type UnsupportedBannerProps = {
  className?: string;
  title: string;
  description: React.ReactNode;
  ignoreButtonText: string;
  onIgnore: (any) => Promise<any> | void;
  portalContainer: Element;
};

const UnsupportedBanner = ({
  className,
  title = `Your browser isn't fully supported by our application`,
  description = `Please reffer to FAQ to obtain more informaiton and update your software`,
  ignoreButtonText = 'Ignore',
  onIgnore,
  portalContainer,
}: UnsupportedBannerProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();

  return ReactDOM.createPortal(
    <StyledUnsupportedContainer theme={theme} mode={mode}>
      <Paper className={cx('unsupportedModalPaper', className)}>
        <div className="unsupportedModalTitle">
          <Text
            size={theme.typography.sizes.s}
            weight={theme.typography.weights.black}
            className="unsupportedModalTitleText"
          >
            {title}
          </Text>
        </div>
        <div className="unsupportedModalDescription">
          <Text size={theme.typography.sizes.s} className="unsupportedModalDescriptionText">
            {description}
          </Text>
        </div>
        <div className="unsupportedModalActions">
          <SecondaryButton onClick={onIgnore}>{ignoreButtonText}</SecondaryButton>
        </div>
      </Paper>
    </StyledUnsupportedContainer>,
    portalContainer,
  );
};

export { UnsupportedBanner };
