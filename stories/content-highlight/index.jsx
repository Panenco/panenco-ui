import React from 'react';
import { ContentHighlight, Row, Col } from 'components';
import ContentHighlightDOCS from 'components/content-highlight/DOCS.md';
import README from 'components/content-highlight/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const Content =
  'We will verify your application and get back to you if we have any questions. The verification process can take a couple of months.';

export default decorator('Content highlight', ContentHighlightDOCS, README).add('ContentHighlight component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col sm="2" md="4" lg="4">
          <ContentHighlight>{Content}</ContentHighlight>
        </Col>
        <Col sm="2" md="4" lg="4">
          <ContentHighlight>{Content}</ContentHighlight>
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around' }}>
        <Col sm="2" md="4" lg="4">
          <ContentHighlight>ContentHighlight</ContentHighlight>
        </Col>
        <Col sm="2" md="4" lg="4">
          <ContentHighlight>ContentHighlight</ContentHighlight>
        </Col>
      </Row>
    </WrappedComponent>
  );
});
