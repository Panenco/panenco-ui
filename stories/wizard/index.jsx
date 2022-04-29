import React from 'react';

import WizardTrackDocs from 'components/wizard/DOCS.md';
import README from 'components/wizard/README.md';

import { Row, Col, WizardTrack, Text } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const steps = [
  {
    title: 'General info',
    stepIndex: 0,
  },
  {
    title: 'Data sources',
    stepIndex: 1,
  },
  {
    title: 'Results',
    stepIndex: 2,
  },
];

export default decorator('Wizard', WizardTrackDocs, README).add('Wizard component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center', margin: '50px auto 0 auto', width: '90%' }}>
        <Col xs="12">
          <p style={{ marginBottom: 6 }}><Text>{`currentStepIndex={0}`}</Text></p>
          <WizardTrack stepsMeta={steps} currentStepIndex={0} />
        </Col>
        <Col xs="12">
          <p style={{ marginBottom: 6 }}><Text>{`currentStepIndex={1}`}</Text></p>
          <WizardTrack stepsMeta={steps} currentStepIndex={1} />
        </Col>
        <Col xs="12">
          <p style={{ marginBottom: 6 }}><Text>{`currentStepIndex={2}`}</Text></p>
          <WizardTrack stepsMeta={steps} currentStepIndex={2} />
        </Col>
        <Col xs="12">
          <p style={{ marginBottom: 6 }}><Text>{`currentStepIndex={3}`}</Text></p>
          <WizardTrack stepsMeta={steps} currentStepIndex={3} />
        <Col xs="4" md="8" lg="12">
          <WizardTrack />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
