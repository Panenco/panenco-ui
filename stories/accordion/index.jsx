import React from 'react';
import { AccordionPrimary, AccordionSecondary, Row, Col, AccordionGroup, Text } from 'components';
import { sizes } from 'styles';
import AccordionDocs from 'components/accordion/accordion-DOCS.md';
import AccordionReadme from 'components/accordion/accordion-README.md';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Accordion', AccordionDocs, AccordionReadme).add('Accordion component', () => {
  return (
    <WrappedComponent>
      <Text size={sizes.l}>Accordion group</Text>
      <AccordionGroup>
        <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <AccordionPrimary title="Primary" iconLeft iconRight>
              We will verify your application and get back to you if we have any questions. The verification process can
              take a couple of months. We will verify your application and get back to you if we have any questions. The
              verification process can take a couple of months.
            </AccordionPrimary>
          </Col>
          <Col s="2" m="4" l="6">
            <AccordionPrimary title="Primary">
              We will verify your application and get back to you if we have any questions. The verification process can
              take a couple of months. We will verify your application and get back to you if we have any questions. The
              verification process can take a couple of months.
            </AccordionPrimary>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <AccordionSecondary title="Secondary">
              We will verify your application and get back to you if we have any questions. The verification process can
              take a couple of months. We will verify your application and get back to you if we have any questions. The
              verification process can take a couple of months.
            </AccordionSecondary>
          </Col>
          <Col s="2" m="4" l="6">
            <AccordionSecondary title="Secondary">
              We will verify your application and get back to you if we have any questions. The verification process can
              take a couple of months. We will verify your application and get back to you if we have any questions. The
              verification process can take a couple of months.
            </AccordionSecondary>
          </Col>
        </Row>
      </AccordionGroup>
      <Text size={sizes.l}>Accordion</Text>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col s="2" m="4" l="6">
          <AccordionSecondary title="Secondary">
            We will verify your application and get back to you if we have any questions. The verification process can
            take a couple of months. We will verify your application and get back to you if we have any questions. The
            verification process can take a couple of months.
          </AccordionSecondary>
        </Col>
        <Col s="2" m="4" l="6">
          <AccordionSecondary title="Secondary">
            We will verify your application and get back to you if we have any questions. The verification process can
            take a couple of months. We will verify your application and get back to you if we have any questions. The
            verification process can take a couple of months.
          </AccordionSecondary>
        </Col>
      </Row>
    </WrappedComponent>
  );
});
