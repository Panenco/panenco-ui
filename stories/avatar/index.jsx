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
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU'
            tooltip
            tooltipProps={{ content: 'hello@panenco.com', arrow: true, position: 'top-start' }}
            size={35}
          />
        </Col>
        <Col xs="4" lg="4">
          <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU' />
        </Col>
        <Col xs="4" lg="4">
          <Avatar
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU'
            tooltip
            tooltipProps={{ content: 'hello@panenco.com', arrow: true, position: 'left-start' }}
            size={70}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', margin: '50px auto 0 auto', width: '90%' }}>
        <Col xs="4" md="8" lg="12">
          <Avatar size={35} tooltip tooltipProps={{ content: 'Panenco UI', arrow: true, position: 'right' }}>
            PU
          </Avatar>
        </Col>
        <Col xs="4" md="8" lg="12">
          <Avatar>P</Avatar>
        </Col>
        <Col xs="4" md="8" lg="12">
          <Avatar
            tooltip 
            size={70}
            tooltipProps={{ content: 'hello@panenco.com', arrow: true, position: 'bottom-end' }} 
          >PU</Avatar>
        </Col>
      </Row>
    </WrappedComponent>
  );
});
