import React, { useState } from 'react';
import { Radio, Row, Col } from 'components';
import RadioDocs from 'components/radiobutton/DOCS.md';
import README from 'components/radiobutton/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Radio', RadioDocs, README).add('Radio component', () => {
  const options = [
    {
      label: 'Radio',
      value: 1,
    },
    {
      label: 'Radio',
      value: 2,
    },
    {
      label: 'Radio',
      value: 3,
    },
    {
      label: 'Radio',
      value: 4,
    },
  ];

  const [isChecked, setIsChecked] = useState(options[0].value);

  return (
    <WrappedComponent>
      <Row>
        {options.map((el) => {
          return (
            <Col key={el.value} s='1' m='2' l='3' style={{ display: 'flex', justifyContent: 'center' }}>
              <Radio
                label={el.label}
                name='radio'
                value={el.value}
                checked={el.value === isChecked}
                onChange={(e) => setIsChecked(Number(e.target.value))}
              />
            </Col>
          );
        })}
      </Row>
      <Row style={{ justifyContent: 'center', alignItems: 'flex-start' }}>
        <Col s='1' m='2' l='3' style={{ display: 'flex', justifyContent: 'center' }}>
          <Radio label='Radio Disabled' name='radio' disabled value='test' onChange={() => {}} />
        </Col>
        <Col s='1' m='2' l='3' style={{ display: 'flex', justifyContent: 'center' }}>
          <Radio label='Placeholder' name='radio1' error='Error label' value='placeholder' onChange={() => {}} />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
