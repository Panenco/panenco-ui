import React, { useState } from 'react';
import { Popup, PrimaryButton, SecondaryButton, TextInput, Icon, TextArea } from 'components';
import PopupDocs from 'components/popup/DOCS.md';
import README from 'components/popup/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Popup', PopupDocs, README).add('Popup component', () => {

  const [defaultPopupOpen, setDefaultPopupOpen] = useState(false);

  const handleDefaultPopupHide = () => {
    setDefaultPopupOpen(false);
  }
  const handleDefaultPopupShow = () => {
    setDefaultPopupOpen(true);
  }

  return (
    <WrappedComponent>
      <div>
        <PrimaryButton onClick={handleDefaultPopupShow}>Open modal</PrimaryButton>
      </div>
      <Popup show={defaultPopupOpen} onHide={handleDefaultPopupHide} title="Title" description="Description text">
        <div style={{marginBottom: '16px'}}>
          <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
        </div>
        <div style={{marginBottom: '16px'}}>
          <TextArea subTitle="Subtitle" placeholder="Placeholder" />
        </div>
        <div style={{display: 'flex', justifyContent: 'flex-end', paddingBottom: '0'}}>
          <SecondaryButton onClick={handleDefaultPopupHide} style={{marginRight: '16px'}}>Cancel</SecondaryButton>
          <PrimaryButton>Submit</PrimaryButton>
        </div>
      </Popup>
    </WrappedComponent>
  );
});
