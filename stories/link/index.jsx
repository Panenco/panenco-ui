import React from 'react';
import { Row, Col, Link } from 'components';
import { BrowserRouter } from 'react-router-dom';

import LinkDocs from 'components/link/link-DOCS.md';
import LinkReadme from 'components/link/link-README.md';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Link', LinkDocs, LinkReadme).add('Link component', () => {
  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'space-around' }}>
          <Col s="2" m="4" l="3">
            <Link to="">Link Component</Link>
          </Col>
          <Col s="2" m="4" l="3">
            <Link disabled to="">
              Link Component
            </Link>
          </Col>
          <Col s="2" m="4" l="3">
            <Link to="">Link Component</Link>
          </Col>
          <Col s="2" m="4" l="3">
            <Link to="">Link Component</Link>
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});
