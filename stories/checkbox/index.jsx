import React from 'react';
import { Row, Col, Checkbox } from 'components';
import CheckboxDocs from 'components/checkbox/DOCS.md';
import Readme from 'components/checkbox/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Checkbox', CheckboxDocs, Readme).add('Checkbox component', () => {
  const [isChecked1, setChecked1] = React.useState(false);
  const [isChecked2, setChecked2] = React.useState(false);
  const [isChecked3, setChecked3] = React.useState(true);
  const handleClick = () => {
    setChecked1(!isChecked1);
  };

  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col s="2" m="4" l="3">
          <Checkbox label="Checkbox" checked={isChecked1} onClick={handleClick} />
        </Col>
        <Col s="2" m="4" l="3">
          <Checkbox label="Checkbox" checked={isChecked2} onClick={() => setChecked2(!isChecked2)} />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col s="2" m="4" l="3">
          <Checkbox label="Checkbox" checked disabled />
        </Col>
        <Col s="2" m="4" l="3">
          <Checkbox label="Label example" checked={isChecked3} onClick={() => setChecked3(!isChecked3)} />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
