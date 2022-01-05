import React from 'react';

import WizardTrackReadme from 'components/wizard/README.md';

import { Row, Col, WizardTrack } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Wizard', WizardTrackReadme, WizardTrackReadme).add('Wizard component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center', margin: '50px auto 0 auto', width: '90%' }}>
        <Col xs="4" md="8" lg="12">
          <WizardTrack />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
