import React from 'react';
import { Row, Col, Slider } from 'components';
import SliderDocs from 'components/slider/DOCS.md';
import SliderReadme from 'components/slider/DOCS-README.md';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Slider', SliderDocs, SliderReadme).add('Slider component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around', marginTop: '20px' }}>
        <Col sm="2" md="4" lg="4">
          <Slider startValues={[0]} domain={[0, 5]} />
        </Col>
        <Col sm="2" md="4" lg="4">
          <Slider startValues={[0, 20]} domain={[0, 100]} step={5} />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', marginTop: '20px' }}>
        <Col sm="2" md="4" lg="4">
          <Slider startValues={[0, 50]} disabled />
        </Col>
        <Col sm="2" md="4" lg="4">
          <Slider startValues={[0, 500]} domain={[0, 1000]} formatValue={(val) => `$${val}`} />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
