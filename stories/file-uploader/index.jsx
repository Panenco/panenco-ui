import React from 'react';
import { FileUploader, Row, Col } from 'components';
import FileUploaderDocs from 'components/file-uploader/DOCS.md';
import README from 'components/file-uploader/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('File Uploader', FileUploaderDocs, README).add('File uploader component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-end' }}>
        <Col s="2" m="4" l="5">
          <FileUploader loading />
        </Col>
        <Col s="2" m="4" l="5">
          <FileUploader title="Title" />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-end' }}>
        <Col s="2" m="4" l="5">
          <FileUploader error="Error" />
        </Col>
        <Col s="2" m="4" l="5">
          <FileUploader disabled title="Disabled" />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
