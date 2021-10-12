import React from 'react';
import PopupDocs from 'components/popup/DOCS.md';
import README from 'components/popup/README.md';
import { Row, Col, Text } from 'components';
import { useTheme } from 'utils/hooks';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

import DefaultPopup from './DefaultPopup';
import LargePopup from './LargePopup';
import SmallPopup from './SmallPopup';

export default decorator('Popup', PopupDocs, README).add('Popup component', () => {
  const theme = useTheme();
  return (
    <WrappedComponent>
      <div style={{marginBottom: '16px'}}>
        <DefaultPopup />
      </div>

      <div style={{marginBottom: '16px'}}>
        <p><Text size={theme.typography.sizes.l} weight={theme.typography.weights.black}>Optional Sizes:</Text></p>
        <p style={{marginBottom: '12px'}}><Text>You can specify a large or small popup by using the `size` prop.</Text></p>
        <Row>
          <Col>
            <LargePopup />
          </Col>
          <Col>
            <SmallPopup />
          </Col>
        </Row>
      </div>

    </WrappedComponent>
  );
});
