import { Col, GridContainer, Row } from 'components';
import GridDocs from 'components/grid/DOCS.md';
import GridReadme from 'components/grid/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';

const ColumnContent = () => (
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
      <Row spacing={[3, 3]}>
        <Col m="6" l="3">
          <ColumnContent />
        </Col>

        <Col m="6" l="3">
          <ColumnContent />
        </Col>
        <Col m="6" l="3">
          <ColumnContent />
        </Col>

        <Col m="6" l="3">
          <ColumnContent />
        </Col>
      </Row>
      <Row spacing="3, 3">
        <Col>
          <ColumnContent />
        </Col>
        <Col>
          <ColumnContent />
        </Col>
        <Col>
          <ColumnContent />
        </Col>
      </Row>
      <Row spacing="3">
        <Col>
          <ColumnContent />
        </Col>
        <Col>
          <ColumnContent />
        </Col>
        <Col>
          <ColumnContent />
        </Col>
      </Row>
      <Row spacing={3}>
        <Col xs="3">
          <ColumnContent />
        </Col>
        <Col xs="6">
          <ColumnContent />
        </Col>
        <Col xs="3">
          <ColumnContent />
        </Col>
      </Row>
    </GridContainer>

    {/* <Row>
      <Col xs="5">
        <ColumnContent />
      </Col>
      <Col xs="2">
        <ColumnContent />
      </Col>
      <Col xs="5">
        <ColumnContent />
      </Col>
    </Row>
    <Row>
      <Col xs="4">
        <ColumnContent />
      </Col>
      <Col xs="4">
        <ColumnContent />
      </Col>
      <Col xs="4">
        <ColumnContent />
      </Col>
    </Row>
    <Row>
      <Col xs="3">
        <ColumnContent />
      </Col>
      <Col xs="6">
        <ColumnContent />
      </Col>
      <Col xs="3">
        <ColumnContent />
      </Col>
    </Row>
    <Row>
      <Col xs="2">
        <ColumnContent />
      </Col>
      <Col xs="8">
        <ColumnContent />
      </Col>
      <Col xs="2">
        <ColumnContent />
      </Col>
    </Row> */}
  </>
));
