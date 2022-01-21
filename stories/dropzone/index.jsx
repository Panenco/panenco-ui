import { Col, Dropzone, Row, Text } from 'components';
import DropzoneDOCS from 'components/dropzone/DOCS.md';
import DropzoneREADME from 'components/dropzone/README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Dropzone', DropzoneDOCS, DropzoneREADME).add('Dropzone component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col xs="2" sm="4" lg="4" style={{ height: '200px' }}>
          <Dropzone />
        </Col>
        <Col xs="2" sm="4" lg="4" style={{ height: '200px' }}>
          <Dropzone loading />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col xs="2" sm="4" lg="4">
          <Dropzone>
            <Text>This is some additional content. It may contain pictures, lists, QR-codes or whatever you want.</Text>
          </Dropzone>
        </Col>
        <Col xs="2" sm="4" lg="4" style={{ height: '200px' }}>
          <Dropzone error="Wrong format! Please upload a new file following the correct format." />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
