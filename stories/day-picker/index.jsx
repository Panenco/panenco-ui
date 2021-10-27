import { Col, DayPicker, Row } from 'components';
import DayPickerDocs from 'components/form/day-picker/day-picker-DOCS.md';
import DayPickerReadme from 'components/form/day-picker/day-picker-README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('DayPicker', DayPickerDocs, DayPickerReadme).add('DayPicker', () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {
    setValue(val);
  };

  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="12" m="12" l="12">
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
        <Col s="12" m="12" l="12">
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
