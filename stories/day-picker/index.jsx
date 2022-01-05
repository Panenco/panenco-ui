import { Col, DateInput, DayPicker, Row } from 'components';
import DateInputDocs from 'components/form/date-input/date-input-DOCS.md';
import DateInputReadme from 'components/form/date-input/date-input-README.md';
import DayPickerDocs from 'components/form/day-picker/day-picker-DOCS.md';
import README from 'components/form/day-picker/day-picker-README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('DayPicker', DayPickerDocs, README).add('DayPicker', () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col xs="12" md="12" lg="12">
          <DayPicker
            subTitle="Start date"
            value={value}
            onChange={handleChange}
            format="MM/dd/yyyy"
            placeholder="mm/dd/yy"
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col xs="12" md="12" lg="12">
          <DayPicker
            isTimePicker
            value={value}
            onChange={handleChange}
            format="MM/dd/yyyy HH:mm"
            placeholder="mm/dd/yy 00:00"
          />
        </Col>
      </Row>
    </WrappedComponent>
  );
});

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

export const DateInputStory = decorator('DateInput', DateInputDocs, DateInputReadme).add('DateInput', () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <WrappedComponent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col xs="2" md="4" lg="6">
            <DateInput inputs={inputs1} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col xs="2" md="4" lg="6">
            <DateInput inputs={inputs2} value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col xs="2" md="4" lg="6">
            <DateInput inputs={inputs3} value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col xs="2" md="4" lg="6">
            <DateInput inputs={inputs1} divider="/" value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col xs="2" md="4" lg="6">
            <DateInput inputs={inputs2} divider="/" value={value} onChange={handleChange} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col xs="2" md="4" lg="6">
            <DateInput inputs={inputs3} divider="/" value={value} onChange={handleChange} />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});
