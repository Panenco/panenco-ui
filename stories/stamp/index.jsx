import React from 'react';

import StampReadme from 'components/stamp/stamp-README.md';
import StampDocs from 'components/stamp/stamp-DOCS.md';

import { Row, Col, Stamp } from 'components';
import { colors } from 'styles';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Stamp', StampDocs, StampReadme).add('Stamp component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center' }}>
        <Col xs="3" sm="3" lg="3">
          <Stamp color={colors.success}>Status</Stamp>
        </Col>
        <Col xs="3" sm="3" lg="3">
          <Stamp color={colors.error}>Status</Stamp>
        </Col>
        <Col xs="3" sm="3" lg="3">
          <Stamp color={colors.alert}>Status</Stamp>
        </Col>
        <Col xs="3" sm="3" lg="3">
          <Stamp color={colors.base900}>Status</Stamp>
        </Col>
      </Row>
    </WrappedComponent>
  );
});
