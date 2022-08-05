import React from 'react';

import AvatarDocs from 'components/avatar-group/DOCS.md';
import AvatarReadme from 'components/avatar-group/README.md';

import { Row, Col, AvatarGroup } from 'components';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const avatars = [
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
  },
  {
    children: 'PU',
  },
  {
    children: 'PU',
  },
  {
    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJmD-ID1Gcf4RD0YWdMtgcjjpMqS89ldAE6w&usqp=CAU',
    alt: 'alt',
    size: 45,
  },
  {
    children: 'P',
  },
];

export default decorator('Avatar', AvatarDocs, AvatarReadme).add('AvatarGroup component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'center', margin: '50px auto 0 auto', width: '90%' }}>
        <Col xs='12' lg='12'>
          <AvatarGroup avatars={avatars} avatarProps={{ size: 60 }} />
        </Col>
        <Col xs='12' lg='12'>
          <AvatarGroup avatars={avatars} max={3} avatarProps={{ size: 60 }} />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
