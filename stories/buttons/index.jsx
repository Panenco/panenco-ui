import {
  Button,
  ButtonIcon,
  Col,
  Icon,
  PrimaryButton,
  Row,
  SecondaryButton,
} from 'components';
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
      <div style={ { display: 'flex', width: '100%', marginTop: '10px' } }>
        <Row style={ { justifyContent: 'center' } }>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <Button style={ buttonStyles } className={ s.mb1 }>Text</Button>
            </div>
          </Col>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <Button style={ buttonStyles } className={ s.mb1 }
                      variant='contained'>Contained</Button>
            </div>
          </Col>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <Button style={ buttonStyles } className={ s.mb1 }
                      variant='outlined'>Outlined</Button>
            </div>
          </Col>
        </Row>
        <Row style={ { justifyContent: 'center' } }>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <Button
                style={ buttonStyles }
                className={ s.mb1 }
                isLoading
              >
                Text
              </Button>
            </div>
          </Col>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <Button
                style={ buttonStyles }
                className={ s.mb1 }
                variant='contained'
                isLoading
              >
                Contained
              </Button>
            </div>
          </Col>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <Button
                style={ buttonStyles }
                className={ s.mb1 }
                variant='outlined'
                isLoading
              >
                Outlined
              </Button>
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
        <Row style={ { justifyContent: 'center' } }>
          <Col m='3' l='3'>
            <Button component='link'>Link</Button>
            <Button component='link' disabled>
              Link disabled
            </Button>
            <Button component='a'
                    href='mailto:info@panenco.com?subject=Secret subject'>
              Link external
            </Button>
          </Col>
        </Row>
        <Row style={ { justifyContent: 'center' } }>
          <Col m='3' l='3'>
            <PrimaryButton component='link' to='/'>
              Primary Link
            </PrimaryButton>
            <PrimaryButton component='link' disabled>
              Primary Link disabled
            </PrimaryButton>
          </Col>
        </Row>
        <Row style={ { justifyContent: 'space-around' } }>
          <Col m='3' l='3'>
            <SecondaryButton component='link'>Link Button</SecondaryButton>
            <SecondaryButton component='link' disabled>
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
        <Row style={ { justifyContent: 'center' } }>
          <Col s='2' m='2' l='3'>
            <ButtonIcon icon={ Icon.icons.trash }>Button Icon</ButtonIcon>
          </Col>
          <Col s='2' m='2' l='3'>
            <ButtonIcon iconLeft={ Icon.icons.trash }>Button Icon
                                                      Left</ButtonIcon>
          </Col>
        </Row>
        <Row style={ { justifyContent: 'center' } }>
          <Col s='2' m='2' l='3'>
            <ButtonIcon icon={ Icon.icons.lock }>Button Icon</ButtonIcon>
          </Col>
          <Col s='2' m='2' l='3'>
            <ButtonIcon iconLeft={ Icon.icons.lock }>Button Icon
                                                     Left</ButtonIcon>
          </Col>
        </Row>
      </WrappedComponent>
    </BrowserRouter>
  );
});
