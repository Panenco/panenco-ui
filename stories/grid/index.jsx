import { Col, GridContainer, Row } from 'components';
import GridDocs from 'components/grid/DOCS.md';
import GridReadme from 'components/grid/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';

const Column = () => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      padding: '8px 0px',
      border: '1px solid #0065ff',
      fontSize: '12px',
    }}
  />
);

export default decorator('Grid', GridDocs, GridReadme).add('Grid component', () => (
  <>
    <GridContainer>
      <Row>
        <Col m="6" l="3">
          <Column />
        </Col>

        <Col m="6" l="3">
          <Column />
        </Col>
        <Col m="6" l="3">
          <Column />
        </Col>

        <Col m="6" l="3">
          <Column />
        </Col>
      </Row>
    </GridContainer>

    {/* <Row>
      <Col xs="5">
        <Column />
      </Col>
      <Col xs="2">
        <Column />
      </Col>
      <Col xs="5">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col xs="4">
        <Column />
      </Col>
      <Col xs="4">
        <Column />
      </Col>
      <Col xs="4">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col xs="3">
        <Column />
      </Col>
      <Col xs="6">
        <Column />
      </Col>
      <Col xs="3">
        <Column />
      </Col>
    </Row>
    <Row>
      <Col xs="2">
        <Column />
      </Col>
      <Col xs="8">
        <Column />
      </Col>
      <Col xs="2">
        <Column />
      </Col>
    </Row> */}
  </>
));
