import React from 'react';
import { Chip, Row, Col } from 'components';
import ChipDocs from 'components/chip/DOCS.md';
import README from 'components/chip/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Chip', ChipDocs, README).add('Chip component', () => {
  const [isChecked1, setChecked1] = React.useState(false);
  const [isChecked2, setChecked2] = React.useState(false);
  const [isChecked3, setChecked3] = React.useState(true);

  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col s="2" m="4" l="3">
          <Chip checked={isChecked1} onClick={() => setChecked1(!isChecked1)}>
            Chip
          </Chip>
        </Col>
        <Col s="2" m="4" l="3">
          <Chip checked={isChecked2} onClick={() => setChecked2(!isChecked2)}>
            Chip
          </Chip>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col s="2" m="4" l="3">
          <Chip disabled checked>
            Chip
          </Chip>
        </Col>
        <Col s="2" m="4" l="3">
          <Chip checked={isChecked3} onClick={() => setChecked3(!isChecked3)}>
            Chip
          </Chip>
        </Col>
      </Row>
    </WrappedComponent>
  );
});
