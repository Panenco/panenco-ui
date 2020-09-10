import * as React from 'react';
import * as ReactDOM from 'react-dom';
import cx from 'classnames';
import { PrimaryButton, SecondaryButton, Text, Radio, Paper } from '../../index';
import { useTheme, useMode } from '../../../utils/hooks';

import { StyledCookiesContainer, StyledCookieEntry } from './styles';

export type CookieEntry = {
  cookieId: string;
  cookieTitle: React.ReactNode;
  cookieDescription: React.ReactNode;
  // make required
};

export type CookiesBannerProps = {
  className?: string;
  shortContent: React.ReactNode;
  okButtonText: string;
  cancelButtonText: string;
  saveButtonText: string;
  showDetailsText: string;
  hideDetailsText: string;
  cookiesList: CookieEntry[];
  onSave: (any) => Promise<any> | void;
  onCancel?: (any) => Promise<any> | void;
  portalContainer: Element;
};

const CookiesBanner = ({
  className,
  shortContent = 'This website uses cookies and similar tags or scripts to optimize your browsing experience where possible.',
  okButtonText = 'I agree',
  cancelButtonText = 'No, thanks',
  saveButtonText = 'Save my settings',
  showDetailsText = 'Show details',
  hideDetailsText = 'Hide details',
  cookiesList,
  onSave,
  onCancel,
  portalContainer,
}: CookiesBannerProps): React.ReactNode => {
  const theme = useTheme();
  const { mode } = useMode();
  const [showDetailed, setShowDetailed] = React.useState(false);

  const toggleDetailsShow = React.useCallback(() => setShowDetailed(!showDetailed), [showDetailed]);

  const cookiesDefaults = React.useMemo(() => {
    const cookiesAcceptedInitial = {};

    cookiesList.forEach((entry) => {
      const { cookieId } = entry;
      cookiesAcceptedInitial[cookieId] = true;
    });

    return cookiesAcceptedInitial;
  }, [cookiesList]);

  const [cookiesAccepted, setCookiesAccepted] = React.useState(cookiesDefaults);

  const handleCookieChange = (cookieId) => (event) => {
    setCookiesAccepted({
      ...cookiesAccepted,
      [cookieId]: event.target.value === 'on',
    });
  };

  const handleSave = () => {
    onSave(cookiesAccepted);
  };

  let modalContent;
  /*: React.ReactChild; */

  if (showDetailed) {
    modalContent = (
      <>
        {cookiesList.map((cookieEntry) => {
          const onCookieChange = handleCookieChange(cookieEntry.cookieId);
          return (
            <StyledCookieEntry theme={theme} mode={mode} key={cookieEntry.cookieId}>
              <div className="cookieEntryTitle">
                <Text
                  weight={theme.typography.weights.black}
                  size={theme.typography.sizes.s}
                  className="cookieEntryTitleText"
                >
                  {cookieEntry.cookieTitle}
                </Text>
              </div>
              <div className="cookieEntryDescription">
                <Text size={theme.typography.sizes.s} className="cookieEntryDescriptionText">
                  {cookieEntry.cookieDescription}
                </Text>
              </div>
              <div className="cookieEntryRadio">
                <Radio
                  label="On"
                  name={cookieEntry.cookieId}
                  value="on"
                  checked={cookiesAccepted[cookieEntry.cookieId]}
                  inputProps={{
                    onChange: onCookieChange,
                  }}
                />
                <Radio
                  label="Off"
                  name={cookieEntry.cookieId}
                  value="off"
                  checked={!cookiesAccepted[cookieEntry.cookieId]}
                  inputProps={{
                    onChange: onCookieChange,
                  }}
                />
              </div>
            </StyledCookieEntry>
          );
        })}
        <div className="cookiesModalActions">
          <PrimaryButton onClick={handleSave}>{saveButtonText}</PrimaryButton>
          <button type="button" onClick={toggleDetailsShow} className="cookiesModalDetailedViewButton">
            <Text weight={theme.typography.weights.black} className="cookiesModalDetailedViewButtonText">
              {hideDetailsText}
            </Text>
          </button>
        </div>
      </>
    );
  } else {
    modalContent = (
      <>
        <div className="cookiesModalShortDescription">
          <Text size={theme.typography.sizes.s} className="cookiesModalShortDescriptionText">
            {shortContent}
          </Text>
        </div>
        <div className="cookiesModalActions">
          <PrimaryButton onClick={handleSave}>{okButtonText}</PrimaryButton>
          {onCancel && <SecondaryButton onClick={onCancel}>{cancelButtonText}</SecondaryButton>}
          <button type="button" onClick={toggleDetailsShow} className="cookiesModalDetailedViewButton">
            <Text weight={theme.typography.weights.black} className="cookiesModalDetailedViewButtonText">
              {showDetailsText}
            </Text>
          </button>
        </div>
      </>
    );
  }

  return ReactDOM.createPortal(
    <StyledCookiesContainer theme={theme} mode={mode}>
      <Paper className={cx('cookiesModalPaper', className)}>{modalContent}</Paper>
    </StyledCookiesContainer>,
    portalContainer,
  );
};

export { CookiesBanner };
