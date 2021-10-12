import React, { useState } from 'react';
import { Popup, PrimaryButton, SecondaryButton, TextInput, Icon, TextArea } from 'components';

const DefaultPopup = () => {
  const [popupOpen, setPopupOpen] = useState(false);

  const handlePopupHide = () => {
    setPopupOpen(false);
  };
  const handlePopupShow = () => {
    setPopupOpen(true);
  };

  return (
    <>
      <div>
        <PrimaryButton onClick={handlePopupShow}>Open popup</PrimaryButton>
      </div>
      <Popup size="md" aria-labelledby="examplePopup" show={popupOpen} onHide={handlePopupHide}>
        <Popup.Header>
          <Popup.Title id="examplePopup">Lorem, ipsum dolor.</Popup.Title>
        </Popup.Header>
        <Popup.Body>
          <div style={{ marginBottom: '16px' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta eligendi incidunt nam neque,
            architecto voluptatibus! Laborum non molestiae aut.
          </div>
          <div style={{ marginBottom: '16px' }}>
            <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
          </div>
          <div>
            <TextArea subTitle="Subtitle" placeholder="Placeholder" />
          </div>
        </Popup.Body>
        <Popup.Footer>
          <div style={{ display: 'flex', justifyContent: 'flex-end', paddingBottom: '0' }}>
            <SecondaryButton aria-label="Close" onClick={handlePopupHide} style={{ marginRight: '16px' }}>
              Cancel
            </SecondaryButton>
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </Popup.Footer>
      </Popup>
    </>
  );
};

export default DefaultPopup;
