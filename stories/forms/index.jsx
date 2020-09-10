import React from 'react';

import TextInputReadme from 'components/form/text-input/text-input-README.md';
import TextInputDocs from 'components/form/text-input/text-input-DOCS.md';

import TextAreaReadme from 'components/form/text-area/text-area-README.md';
import TextAreaDocs from 'components/form/text-area/text-area-DOCS.md';

import { TextArea, TextInput, Icon, ButtonIcon, Row, Col } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Forms', TextInputDocs, TextInputReadme).add('TextInput', () => (
  <WrappedComponent>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <Row style={{ justifyContent: 'center' }}>
        <Col s="2" m="4" l="6">
          <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
        </Col>
        <Col s="2" m="4" l="6">
          <TextInput placeholder="Icon after" iconAfter={<Icon icon={Icon.icons.closeEye} />} />
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Col s="2" m="4" l="6">
          <TextInput iconBefore={<ButtonIcon icon={Icon.icons.home} />} placeholder="Button icon" />
        </Col>
        <Col s="2" m="4" l="6">
          <TextInput disabled placeholder="Disabled" />
        </Col>
      </Row>

      <Row style={{ justifyContent: 'center' }}>
        <Col s="2" m="4" l="6">
          <TextInput title="Title" placeholder="Placeholder" iconAfter={<Icon icon={Icon.icons.closeEye} />} />
        </Col>
        <Col s="2" m="4" l="6">
          <TextInput title="Title" subTitle="Subtitle" error="Error label" placeholder="Error" />
        </Col>
      </Row>
    </div>
  </WrappedComponent>
));

export const Textarea = decorator('Forms', TextAreaDocs, TextAreaReadme).add('TextArea', () => {
  return (
    <WrappedComponent>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <TextArea title="Title" subTitle="Subtitle" placeholder="Placeholder" />
          </Col>
          <Col s="2" m="4" l="6">
            <TextArea title="Title" subTitle="Subtitle" placeholder="Placeholder" maxLength="10" />
          </Col>
        </Row>

        <Row style={{ alignItems: 'flex-start' }}>
          <Col s="2" m="4" l="6">
            <TextArea disabled placeholder="Disabled" maxLength="10" />
          </Col>
          <Col s="2" m="4" l="6">
            <TextArea placeholder="Error" error="Error label" maxLength="50" />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});
