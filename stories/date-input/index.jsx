import { Col, DateInput, Row } from 'components';
import DateInputDocs from 'components/form/date-input/date-input-DOCS.md';
import DateInputReadme from 'components/form/date-input/date-input-README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const inputs1 = [
  {
    title: 'Day',
    type: 'date',
    format: 'dd',
    placeholder: '01',
  },
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

const inputs2 = [
  {
    title: 'Day',
    type: 'date',
    format: 'dd',
    placeholder: '01',
  },
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '01',
  },
];

const inputs3 = [
  {
    title: 'Month',
    type: 'month',
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

export default decorator('DateInput', DateInputDocs, DateInputReadme).add('DateInput', () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <WrappedComponent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs1} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs2} value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs3} value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs1} divider="/" value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs2} divider="/" value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs3} divider="/" value={value} onChange={handleChange} />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});
