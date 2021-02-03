import React from 'react';

import StampReadme from 'components/switch/switch-README.md';
import StampDocs from 'components/switch/switch-DOCS.md';

import { Row, Col, Switch } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Switch', StampDocs, StampReadme).add('Stamp component', () => {
  const [checked1, setChecked1] = React.useState(false);
  const [checked2, setChecked2] = React.useState(false);

  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <Switch value={checked1} width={80} onChange={() => setChecked1((prevState) => !prevState)} />
        </Col>
        <Col s="3" m="3" l="3">
          <Switch value={checked2} onChange={() => setChecked2((prevState) => !prevState)} />
        </Col>
        <Col s="3" m="3" l="3">
          <Switch size={90} checked={checked2} onChange={() => setChecked2((prevState) => !prevState)} />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
