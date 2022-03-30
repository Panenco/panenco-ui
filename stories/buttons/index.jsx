import { Button, ButtonIcon, Col, Icon, PrimaryButton, Row, SecondaryButton, WarningButton, AlertButton, SucessButton } from 'components';
import ButtonIconDocs from 'components/button-icon/icon-button-DOCS.md';
import ButtonIconReadme from 'components/button-icon/icon-button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';
import ButtonReadme from 'components/button/button-README.md';
import LinkDocs from 'components/button/link-DOCS.md';
import LinkReadme from 'components/button/link-README.md';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import s from './styles.scss';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const buttonCellStyles = {
  minWidth: '200px',
};

const buttonStyles = {
  minWidth: '150px',
};
export default decorator('Button', ButtonDocs, ButtonReadme).add('Button component', () => {
  return (
    <WrappedComponent>
      <div
        style={{
          display: 'flex',
          width: '100%',
          marginTop: '10px',
          flexDirection: 'column',
        }}
      >
        <Row style={{ justifyContent: 'center', flexGrow: '1' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button style={buttonStyles} className="mb-1">
                Text
              </Button>
            </div>
          </Col>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button style={buttonStyles} className="mb-1" isLoading>
                Text
              </Button>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', flexGrow: '1' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button style={buttonStyles} className="mb-1" variant="contained">
                Contained
              </Button>
            </div>
          </Col>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button style={buttonStyles} className="mb-1" variant="contained" isLoading>
                Contained
              </Button>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', flexGrow: '1' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button style={buttonStyles} className="mb-1" variant="outlined">
                Outlined
              </Button>
            </div>
          </Col>

          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Button style={buttonStyles} className="mb-1" variant="outlined" isLoading>
                Outlined
              </Button>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', flexGrow: '1' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <WarningButton style={buttonStyles} className="mb-1" variant="outlined">
                Warning
              </WarningButton>
            </div>
          </Col>

          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <WarningButton style={buttonStyles} className="mb-1" variant="outlined" isLoading>
                Warning
              </WarningButton>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', flexGrow: '1' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AlertButton style={buttonStyles} className="mb-1">
                Alert
              </AlertButton>
            </div>
          </Col>

          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <AlertButton style={buttonStyles} className="mb-1" variant="outlined" isLoading>
                Alert
              </AlertButton>
            </div>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', flexGrow: '1' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SucessButton style={buttonStyles} className="mb-1" variant="text">
                Sucess
              </SucessButton>
            </div>
          </Col>

          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <SucessButton style={buttonStyles} className="mb-1" variant="outlined" isLoading>
                Sucess
              </SucessButton>
            </div>
          </Col>
        </Row>
      </div>
    </WrappedComponent>
  );
});

export const LinkDecorator = decorator('Button', LinkDocs, LinkReadme).add('Link', () => {
  return (
    <BrowserRouter>
      <WrappedComponent>
        <Row style={{ justifyContent: 'center' }}>
          <Col xs="4" md="4" lg="4" style={buttonCellStyles}>
            <Button className="mb-1" component="link">
              Link
            </Button>
          </Col>
          <Col xs="4" md="4" lg="4" style={buttonCellStyles}>
            <Button className="mb-1" component="link" disabled>
              Link disabled
            </Button>
          </Col>
          <Col xs="4" md="4" lg="4" style={buttonCellStyles}>
            <Button className="mb-1" component="a" href="mailto:info@panenco.com?subject=Secret subject">
              Link external
            </Button>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <PrimaryButton className="mb-1" component="link" to="/">
              Primary Link
            </PrimaryButton>
          </Col>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <PrimaryButton className="mb-1" component="link" disabled>
              Primary Link disabled
            </PrimaryButton>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'space-around' }}>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <SecondaryButton className="mb-1" component="link">
              Link Button
            </SecondaryButton>
          </Col>
          <Col xs="6" md="6" lg="6" style={buttonCellStyles}>
            <SecondaryButton className="mb-1" component="link" disabled>
              Link Disabled
            </SecondaryButton>
          </Col>
        </Row>
      </WrappedComponent>
    </BrowserRouter>
  );
});

export const ButtonIcons = decorator('Button', ButtonIconDocs, ButtonIconReadme).add('Button icon components', () => {
  return (
    <BrowserRouter>
      <WrappedComponent>
        <Row className="mt-1 justify-center">
          <Col xs="6" md="6" lg="6" className="mb-1" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonIcon icon={Icon.icons.trash}>Button Icon</ButtonIcon>
            </div>
          </Col>
          <Col xs="6" md="6" lg="6" className="mb-1" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonIcon iconLeft={Icon.icons.trash}>Button Icon Left</ButtonIcon>
            </div>
          </Col>
        </Row>
        <Row className="mb-1 justify-center">
          <Col xs="6" md="6" lg="6" className="mb-1" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonIcon icon={Icon.icons.lock}>Button Icon</ButtonIcon>
            </div>
          </Col>
          <Col xs="6" md="6" lg="6" className="mb-1" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonIcon iconLeft={Icon.icons.lock}>Button Icon Left</ButtonIcon>
            </div>
          </Col>
          <Col xs="6" md="6" lg="6" className="mb-1" style={buttonCellStyles}>
            <div
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <ButtonIcon icon={Icon.icons.logOut} component="a" href="https://panenco.com/" target="_blank">
                Button Icon Link
              </ButtonIcon>
            </div>
          </Col>
        </Row>
      </WrappedComponent>
    </BrowserRouter>
  );
});
