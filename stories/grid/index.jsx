import { Col, GridContainer, Row } from 'components';
import PropTypes from 'prop-types';
import GridDocs from 'components/grid/DOCS.md';
import GridReadme from 'components/grid/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import useWindowSize from '../../utils/useWindowSize';

const GridSize = () => {
  const size = useWindowSize();
  let label;
  const labelBackground = {
    xs: '#FFF5EB',
    sm: '#DEEDF0',
    md: '#F4C7AB',
    lg: '#B2B8A3',
  };
  if (size.width > 1320) label = 'lg';
  else if (size.width > 840) label = 'md';
  else if (size.width > 600) label = 'sm';
  else label = 'xs';
  return (
    <div
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        display: 'flex',
        padding: '8px 0px',
        fontSize: '16px',
        marginBottom: '16px',
        backgroundColor: labelBackground[label],
      }}
    >
      {label}
    </div>
  );
};

const ColumnContent = ({ children }) => (
  <div
    style={{
      alignItems: 'center',
      justifyContent: 'center',
      display: 'flex',
      padding: '8px 0px',
      border: '1px solid #0065ff',
      fontSize: '12px',
    }}
  >
    {children}
  </div>
);

ColumnContent.propTypes = {
  children: PropTypes.string,
};

ColumnContent.defaultProps = {
  children: null,
};

export default decorator('Grid', GridDocs, GridReadme).add('Grid component', ({ width }) => (
  <>
    <GridContainer>
      <GridSize />
      <Row spacing={[3, 3]}>
        <Col md="6" lg="3">
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>

        <Col md="6" lg="3">
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>
        <Col md="6" lg="3">
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>

        <Col md="6" lg="3">
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>
      </Row>
      <Row spacing="3, 3">
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
      </Row>
      <Row spacing="3">
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
      </Row>
      <Row spacing={3}>
        <Col xs="3">
          <ColumnContent>xs=&quot;3&quot;</ColumnContent>
        </Col>
        <Col xs="6">
          <ColumnContent>xs=&quot;6&quot;</ColumnContent>
        </Col>
        <Col xs="3">
          <ColumnContent>xs=&quot;3&quot;</ColumnContent>
        </Col>
      </Row>
      <Row>
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
        <Col>
          <ColumnContent>default</ColumnContent>
        </Col>
        <Col>
          <ColumnContent>default</ColumnContent>
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
