import React from 'react';

import AvatarDocs from 'components/avatar/DOCS.md';
import AvatarReadme from 'components/avatar/README.md';

import { Row, Col, Avatar } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Avatar', AvatarDocs, AvatarReadme).add('Avatar component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center', margin: '50px auto 0 auto', width: '90%' }}>
        <Col xs="4" lg="4">
          <Avatar 
            email='hello@panenco.com'
            avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU'
            tooltip
            tooltipProps={{arrow: true, position: 'top-start' }}
          />
        </Col>
        <Col xs="4" lg="4">
          <Avatar avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU' />
        </Col>
        <Col xs="4" lg="4">
          <Avatar
            firstName='Panenco' 
            lastName='UI'
            avatar='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU'
            tooltip
            tooltipProps={{arrow: true, position: 'left-start' }}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', margin: '50px auto 0 auto', width: '90%' }}>
        <Col xs="4" md="8" lg="12">
          <Avatar firstName='Panenco' classname='xx' tooltip tooltipProps={{arrow: true, position: 'right' }} />
        </Col>
        <Col xs="4" md="8" lg="12">
          <Avatar firstName='Panenco' lastName='UI' />
        </Col>
        <Col xs="4" md="8" lg="12">
          <Avatar
            firstName='Panenco' 
            lastName='UI'
            email='hello@panenco.com'
            tooltip
            tooltipProps={{arrow: true, position: 'bottom-end' }} 
        />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
