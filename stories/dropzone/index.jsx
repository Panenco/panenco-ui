import React from 'react';
import { Dropzone, Row, Col, Icon } from 'components';
import DropzoneDOCS from 'components/dropzone/DOCS.md';
import DropzoneREADME from 'components/dropzone/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Dropzone', DropzoneDOCS, DropzoneREADME).add('Dropzone component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col s="2" m="4" l="4" style={{ height: '200px' }}>
          <Dropzone />
        </Col>
        <Col s="2" m="4" l="4" style={{ height: '200px' }}>
          <Dropzone loading />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col s="2" m="4" l="4" style={{ height: '200px' }}>
          <Dropzone error="Wrong format! Please upload a new file following the correct format." />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
