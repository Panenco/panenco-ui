import React from 'react';

import WizardTrackReadme from 'components/wizard/README.md';

import { Row, Col, WizardTrack } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Wizard', WizardTrackReadme, WizardTrackReadme).add('Wizard component', () => {
  // const steps = [
  //   {
  //     title: 'General info',
  //   },
  //   {
  //     title: 'Data sources',
  //   },
  // ];

  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center', marginTop: '50px' }}>
        <Col s="4" m="8" l="12">
          <WizardTrack />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
