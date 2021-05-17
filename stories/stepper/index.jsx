import { Col, Row, StepperInput } from 'components';
import StepperDocs from 'components/form/stepper/stepper-DOCS.md';
import StepperReadme from 'components/form/stepper/stepper-README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Stepper Input', StepperDocs, StepperReadme).add('Stepper', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <StepperInput onChange={(v) => console.log(v)} title="Stepper title" subTitle="Stepper subtitle" />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <StepperInput
            minValue={0}
            maxValue={5}
            error="Error label"
            onChange={(v) => console.log(v)}
            title="Min and Max"
            subTitle="Stepper subtitle"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <StepperInput
            minValue={0}
            onChange={(v) => console.log(v)}
            title="Min"
            subTitle="Stepper subtitle"
            error="Error label"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <StepperInput
            maxValue={5}
            onChange={(v) => console.log(v)}
            title="Max"
            subTitle="Stepper subtitle"
            error="Error label"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <StepperInput onChange={(v) => console.log(v)} title="No" subTitle="Stepper subtitle" error="Error label" />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
