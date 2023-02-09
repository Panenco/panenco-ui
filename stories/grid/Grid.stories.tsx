import * as React from 'react';
import { Col, GridContainer, Row } from 'components';
import useWindowSize from '../../utils/useWindowSize';

export default {
  title: 'Components/Grid',
  parameters: {
    controls: { disabled: true },
  },
};

const GridSize = () => {
  const size = useWindowSize();
  let label;
  const labelBackground = {
    xs: '#FFF5EB',
    sm: '#DEEDF0',
    md: '#F4C7AB',
    lg: '#B2B8A3',
  };
  if (size.width && size.width >= 1332) label = 'lg';
  else if (size.width && size.width >= 840) label = 'md';
  else if (size.width && size.width >= 600) label = 'sm';
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

ColumnContent.defaultProps = {
  children: null,
};

const FullDemoTemplate = () => (
  <>
    <GridContainer>
      <GridSize />
      <Row spacing={[3, 3]}>
        <Col md='6' lg='3'>
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>

        <Col md='6' lg='3'>
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>
        <Col md='6' lg='3'>
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>

        <Col md='6' lg='3'>
          <ColumnContent>md=&quot;6&quot; lg=&quot;3&quot;</ColumnContent>
        </Col>
      </Row>
      <Row spacing='3, 3'>
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
      <Row spacing='3'>
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
        <Col xs='3'>
          <ColumnContent>xs=&quot;3&quot;</ColumnContent>
        </Col>
        <Col xs='6'>
          <ColumnContent>xs=&quot;6&quot;</ColumnContent>
        </Col>
        <Col xs='3'>
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
  </>
);

export const FullDemo = FullDemoTemplate.bind({});
FullDemo.parameters = {
  controls: { disable: true },
};
