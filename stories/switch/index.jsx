import React from 'react';

import StampReadme from 'components/stamp/stamp-README.md';
import StampDocs from 'components/stamp/stamp-DOCS.md';

import { Row, Col, Stamp, Switch } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Switch', StampDocs, StampReadme).add('Stamp component', () => {
  const [checked1, setChecked1] = React.useState(false);

  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="3" m="3" l="3">
          <Switch checked={checked1} setChecked={() => setChecked1((prevState) => !prevState)} />
        </Col>
        <Col s="3" m="3" l="3">
          <Switch />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
