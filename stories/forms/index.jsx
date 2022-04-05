import { ButtonIcon, Col, Icon, Row, StepperInput, TextArea, TextInput } from 'components';
import StepperDocs from 'components/form/stepper/stepper-DOCS.md';
import StepperReadme from 'components/form/stepper/stepper-README.md';
import TextAreaDocs from 'components/form/text-area/text-area-DOCS.md';
import TextAreaReadme from 'components/form/text-area/text-area-README.md';
import TextInputDocs from 'components/form/text-input/text-input-DOCS.md';
import TextInputReadme from 'components/form/text-input/text-input-README.md';
import React from 'react';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Forms', TextInputDocs, TextInputReadme).add('TextInput', () => (
  <WrappedComponent>
    <div style={{ display: 'flex', flexDirection: 'column', marginTop: '1rem' }}>
      <Row spacing="3,2" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
        <Col
          xs="6"
          sm="6"
          lg="6"
          style={{
            minWidth: '200px',
          }}
        >
          <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} maxLength={10} />
        </Col>
        <Col
          xs="6"
          sm="6"
          lg="6"
          style={{
            minWidth: '200px',
          }}
        >
          <TextInput placeholder="Icon after" iconAfter={<Icon icon={Icon.icons.closeEye} />} />
        </Col>
      </Row>

      <Row spacing="3,2" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
        <Col
          xs="6"
          sm="6"
          lg="6"
          style={{
            minWidth: '200px',
          }}
        >
          <TextInput iconBefore={<ButtonIcon icon={Icon.icons.home} />} placeholder="Button icon" />
        </Col>
        <Col
          xs="6"
          sm="6"
          lg="6"
          style={{
            minWidth: '200px',
          }}
        >
          <TextInput disabled placeholder="Disabled" />
        </Col>
      </Row>

      <Row spacing="3,2" style={{ justifyContent: 'center', marginBottom: '1rem' }}>
        <Col
          xs="6"
          sm="6"
          lg="6"
          style={{
            minWidth: '200px',
          }}
        >
          <TextInput title="Title" subtitle="Subtitle" placeholder="Error" maxLength={100} />
        </Col>
        <Col
          xs="6"
          sm="6"
          lg="6"
          style={{
            minWidth: '200px',
          }}
        >
          <TextInput
            title="Title"
            subTitle="Subtitle"
            rightSubTitle={
              <a className="link" href="/">
                Anchor
              </a>
            }
            error="Error label"
            placeholder="Error"
            maxLength={100}
          />
        </Col>
      </Row>
    </div>
  </WrappedComponent>
));

export const Textarea = decorator('Forms', TextAreaDocs, TextAreaReadme).add('TextArea', () => {
  return (
    <WrappedComponent>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1.5rem',
        }}
      >
        <Row spacing="3,2" style={{ alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Col
            xs="12"
            sm="6"
            lg="6"
            style={{
              minWidth: '200px',
            }}
          >
            <TextArea title="Title" subTitle="Subtitle" placeholder="Placeholder" />
          </Col>
          <Col
            xs="12"
            sm="6"
            lg="6"
            style={{
              minWidth: '200px',
            }}
          >
            <TextArea title="Title" subTitle="Subtitle" placeholder="Placeholder" maxLength="10" />
          </Col>
        </Row>

        <Row spacing="3,2" style={{ alignItems: 'flex-start', marginBottom: '1rem' }}>
          <Col
            xs="12"
            sm="6"
            lg="6"
            style={{
              minWidth: '200px',
            }}
          >
            <TextArea disabled placeholder="Disabled" maxLength="10" />
          </Col>
          <Col
            xs="12"
            sm="6"
            lg="6"
            style={{
              minWidth: '200px',
            }}
          >
            <TextArea placeholder="Error" error="Error label" maxLength="50" />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});

export const StepperComponent = decorator('Forms', StepperDocs, StepperReadme).add('Stepper', () => {
  return (
    <WrappedComponent>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          marginTop: '1.5rem',
        }}
      >
        <Row spacing="3,2" style={{ marginBottom: '1rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StepperInput
              inputProps={{
                style: {
                  minWidth: '63px',
                },
              }}
              title="Stepper with error"
              error="Error"
            />
          </Col>
        </Row>
        <Row spacing="3,2" style={{ marginBottom: '1rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StepperInput
              inputProps={{
                style: {
                  minWidth: '63px',
                },
              }}
              minValue={0}
              maxValue={5}
              title="Min and Max"
            />
          </Col>
        </Row>
        <Row spacing="3,2" style={{ marginBottom: '1rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StepperInput
              minValue={0}
              title="Min"
              inputProps={{
                style: {
                  minWidth: '63px',
                },
              }}
            />
          </Col>
        </Row>
        <Row spacing="3,2" style={{ marginBottom: '1rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StepperInput
              maxValue={5}
              title="Max"
              inputProps={{
                style: {
                  minWidth: '63px',
                },
              }}
            />
          </Col>
        </Row>
        <Row spacing="3,2" style={{ marginBottom: '1rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StepperInput
              title="No"
              inputProps={{
                style: {
                  minWidth: '63px',
                },
              }}
            />
          </Col>
        </Row>
        <Row spacing="3,2" style={{ marginBottom: '1rem' }}>
          <Col style={{ display: 'flex', justifyContent: 'center' }}>
            <StepperInput
              disabled
              title="No"
              inputProps={{
                style: {
                  minWidth: '63px',
                },
              }}
            />
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});
