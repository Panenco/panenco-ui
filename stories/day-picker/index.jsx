import { Col, DayPicker, Row } from 'components';
import SelectInputDocs from 'components/select/DOCS.md';
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

export default decorator('DayPicker', SelectInputDocs, README).add('DayPciker', () => {
  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="12" m="12" l="12">
          <DayPicker format="" />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
