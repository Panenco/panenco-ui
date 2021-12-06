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
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <Button className={ s.mb1 } component='link'>Link</Button>
          </Col>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <Button className={ s.mb1 } component='link' disabled>
              Link disabled
            </Button>

          </Col>
          <Col xs='4' m='4' l='4' style={ buttonCellStyles }>
            <Button
              className={ s.mb1 }
              component='a'
              href='mailto:info@panenco.com?subject=Secret subject'>
              Link external
            </Button>

          </Col>
        </Row>
        <Row style={ { justifyContent: 'center' } }>
          <Col xs='6' m='6' l='6' style={ buttonCellStyles }>
            <PrimaryButton className={ s.mb1 } component='link' to='/'>
              Primary Link
            </PrimaryButton>
          </Col>
          <Col xs='6' m='6' l='6' style={ buttonCellStyles }>
            <PrimaryButton className={ s.mb1 } component='link' disabled>
              Primary Link disabled
            </PrimaryButton>
          </Col>
        </Row>
        <Row style={ { justifyContent: 'space-around' } }>
          <Col xs='6' m='6' l='6' style={ buttonCellStyles }>
            <SecondaryButton className={ s.mb1 } component='link'>
              Link Button
            </SecondaryButton>
          </Col>
          <Col xs='6' m='6' l='6' style={ buttonCellStyles }>
            <SecondaryButton className={ s.mb1 } component='link' disabled>
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
        <Row style={ { justifyContent: 'center', marginTop: '10px' } }>
          <Col s='6' m='6' l='6' className={ s.mb1 } style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <ButtonIcon icon={ Icon.icons.trash }>Button Icon</ButtonIcon>
            </div>
          </Col>
          <Col s='6' m='6' l='6' className={ s.mb1 } style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <ButtonIcon iconLeft={ Icon.icons.trash }>
                Button Icon Left
              </ButtonIcon>
            </div>
          </Col>
        </Row>
        <Row style={ { justifyContent: 'center' } } className={ s.mb1 }>
          <Col s='6' m='6' l='6' className={ s.mb1 } style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <ButtonIcon icon={ Icon.icons.lock }>Button Icon</ButtonIcon>
            </div>
          </Col>
          <Col s='6' m='6' l='6' className={ s.mb1 } style={ buttonCellStyles }>
            <div style={ {
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            } }>
              <ButtonIcon iconLeft={ Icon.icons.lock }>
                Button Icon Left
              </ButtonIcon>
            </div>
          </Col>
        </Row>
      </WrappedComponent>
    </BrowserRouter>
  );
});
