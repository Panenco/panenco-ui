import { Button, ButtonIcon, Col, Icon, PrimaryButton, Row, SecondaryButton } from 'components';
import ButtonIconDocs from 'components/button-icon/icon-button-DOCS.md';
import ButtonIconReadme from 'components/button-icon/icon-button-README.md';
import ButtonDocs from 'components/button/button-DOCS.md';
import ButtonReadme from 'components/button/button-README.md';
import LinkDocs from 'components/button/link-DOCS.md';
import LinkReadme from 'components/button/link-README.md';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Button', ButtonDocs, ButtonReadme).add('Button component', () => {
  return (
    <WrappedComponent>
      <div style={{ display: 'flex', width: '100%' }}>
        <div style={{ width: '50%' }}>
          <Row style={{ justifyContent: 'center' }}>
            <Col m="8" l="6">
              <Button>Button</Button>
              <Button disabled>Button disabled</Button>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col s="2" m="8" l="6">
              <PrimaryButton>Primary Button</PrimaryButton>
              <PrimaryButton isLoading>Primary Button</PrimaryButton>
              <PrimaryButton isLoading>Primary Button</PrimaryButton>
              <PrimaryButton disabled>Primary disabled</PrimaryButton>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col s="2" m="8" l="6">
              <SecondaryButton>Secondary Button</SecondaryButton>
              <SecondaryButton disabled>Secondary Disabled</SecondaryButton>
            </Col>
          </Row>
        </div>
        <div style={{ width: '50%' }}>
          <Row style={{ justifyContent: 'center' }}>
            <Col s="2" m="8" l="6">
              <Button iconRight icon={Icon.icons.chevronRight}>
                Icon Right
              </Button>
              <Button iconLeft={Icon.icons.chevronLeft} disabled>
                Icon Left
              </Button>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col s="2" m="8" l="6">
              <PrimaryButton iconRight={Icon.icons.chevronRight}>Icon Right</PrimaryButton>
              <PrimaryButton isLoading iconRight={Icon.icons.chevronRight} disabled>
                Icon Right
              </PrimaryButton>
            </Col>
          </Row>
          <Row style={{ justifyContent: 'center' }}>
            <Col s="2" m="8" l="6">
              <SecondaryButton iconLeft={Icon.icons.chevronLeft}>Icon Left</SecondaryButton>
              <SecondaryButton iconLeft={Icon.icons.chevronLeft} disabled>
                Icon Left
              </SecondaryButton>
            </Col>
          </Row>
        </div>
      </div>
    </WrappedComponent>
  );
});

export const LinkDecorator = decorator('Button', LinkDocs, LinkReadme).add('Link', () => {
  return (
    <BrowserRouter>
      <WrappedComponent>
        <Row style={{ justifyContent: 'center' }}>
          <Col m="3" l="3">
            <Button component="link">Link</Button>
            <Button component="link" disabled>
              Link disabled
            </Button>
            <Button component="a" href="mailto:info@panenco.com?subject=Secret subject">
              Link external
            </Button>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <Col m="3" l="3">
            <PrimaryButton component="link" to="/">
              Primary Link
            </PrimaryButton>
            <PrimaryButton component="link" disabled>
              Primary Link disabled
            </PrimaryButton>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'space-around' }}>
          <Col m="3" l="3">
            <SecondaryButton component="link">Link Button</SecondaryButton>
            <SecondaryButton component="link" disabled>
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
        <Row style={{ justifyContent: 'center' }}>
          <Col s="2" m="2" l="3">
            <ButtonIcon icon={Icon.icons.trash}>Button Icon</ButtonIcon>
          </Col>
          <Col s="2" m="2" l="3">
            <ButtonIcon iconLeft={Icon.icons.trash}>Button Icon Left</ButtonIcon>
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center' }}>
          <Col s="2" m="2" l="3">
            <ButtonIcon icon={Icon.icons.lock}>Button Icon</ButtonIcon>
          </Col>
          <Col s="2" m="2" l="3">
            <ButtonIcon iconLeft={Icon.icons.lock}>Button Icon Left</ButtonIcon>
          </Col>
        </Row>
      </WrappedComponent>
    </BrowserRouter>
  );
});
