import { Col, DateInput, DayPicker, Row } from 'components';
import DateInputDocs from 'components/form/date-input/date-input-DOCS.md';
import DateInputReadme from 'components/form/date-input/date-input-README.md';
import README from 'components/select/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const options = [
  { label: 'Chip', value: 'Chip_1' },
  { label: 'Chip', value: 'Chip_2' },
  {
    label: 'Group 1',
    options: [
      { label: 'G1-Option 1', value: 'G1-Option _1' },
      { label: 'G1-option 2', value: 'G1-Option _2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'G2-Option 1 ', value: 'G2-Option_1' },
      { label: 'G2-Option 2', value: 'G2-Option_2' },
      { label: 'G2-Option 3', value: 'G2-Option_3' },
    ],
  },
];

const dateFormatMapping = {
  yy: '21',
  yyyy: '2021',
  M: '1',
};

export default decorator('DayPicker', DateInputDocs, README).add('DayPicker', () => {
  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="12" m="12" l="12">
          <DayPicker format="" />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="12" m="12" l="12">
          <DayPicker format="" isTimePicker />
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
  return (
    <WrappedComponent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs1} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs2} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs3} />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs1} divider="/" />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs2} divider="/" />
          </Col>
        </Row>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <DateInput inputs={inputs3} divider="/" />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});
