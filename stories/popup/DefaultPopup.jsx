import React, { useState } from 'react';
import { Popup, PrimaryButton, SecondaryButton, TextInput, Icon, TextArea } from 'components';

import s from './styles.scss';

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
      <Popup size='md' aria-labelledby='examplePopup' show={popupOpen} onHide={handlePopupHide}>
        <Popup.Header>
          <Popup.Title id='examplePopup'>Lorem, ipsum dolor.</Popup.Title>
        </Popup.Header>
        <Popup.Body>
          <div className={s.defaultMarginBottom}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia soluta eligendi incidunt nam neque,
            architecto voluptatibus! Laborum non molestiae aut.
          </div>
          <div className={s.defaultMarginBottom}>
            <TextInput placeholder='Icon before' iconBefore='mapPin' />
          </div>
          <div>
            <TextArea subTitle='Subtitle' placeholder='Placeholder' />
          </div>
        </Popup.Body>
        <Popup.Footer>
          <div className={s.popupFooterButtonsContainer}>
            <SecondaryButton aria-label='Close' onClick={handlePopupHide} className={s.defaultMarginRight}>
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
