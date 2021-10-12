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
      <Popup aria-labelledby="examplePopup" show={defaultPopupOpen} onHide={handleDefaultPopupHide}>
        <Popup.Header onHide={handleDefaultPopupHide}>
          <Popup.Title id="examplePopup">Lorem, ipsum dolor.</Popup.Title>
        </Popup.Header>
        <Popup.Body>
          <div style={{marginBottom: '16px'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta eligendi incidunt nam neque, architecto voluptatibus! Laborum non molestiae aut.
          </div>
          <div style={{marginBottom: '16px'}}>
            <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
          </div>
          <div>
            <TextArea subTitle="Subtitle" placeholder="Placeholder" />
          </div>
        </Popup.Body>
        <Popup.Footer>
          <div style={{display: 'flex', justifyContent: 'flex-end', paddingBottom: '0'}}>
            <SecondaryButton aria-label="Close" onClick={handleDefaultPopupHide} style={{marginRight: '16px'}}>Cancel</SecondaryButton>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </Popup.Footer>
      </Popup>
    </WrappedComponent>
  );
});
