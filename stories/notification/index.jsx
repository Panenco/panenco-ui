import NotificationDOCS from 'components/notification/DOCS.md';
import NotificationREADME from 'components/notification/README.md';
import { Col, PrimaryButton, Row, toast } from 'index';
import React from 'react';
import { colors } from 'styles';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Notification', NotificationDOCS, NotificationREADME).add('Notification component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around', marginTop: '50px' }}>
        <Col xs="2" md="2" lg="3">
          <PrimaryButton
            style={{ backgroundColor: colors.success }}
            onClick={() =>
              toast.success('We will verify your application and get back to you if we have any questions.')
            }
          >
            Show success
          </PrimaryButton>
        </Col>
        <Col xs="2" md="2" lg="3">
          <PrimaryButton
            style={{ backgroundColor: colors.base900 }}
            onClick={() => toast.info('We will verify your application and get back to you if we have any questions.')}
          >
            Show info
          </PrimaryButton>
        </Col>
        <Col xs="2" sm="3" lg="3">
          <PrimaryButton
            style={{ backgroundColor: colors.alert }}
            onClick={() =>
              toast.warning(
                <div>
                  <div style={{ fontWeight: 800 }}>You have not enough memory</div>
                  <div>We will verify your application and get back to you if we have any questions. </div>
                </div>,
                { undo: () => console.log('undo') },
              )
            }
          >
            Show warning
          </PrimaryButton>
        </Col>
        <Col xs="2" md="2" lg="3">
          <PrimaryButton
            style={{ backgroundColor: colors.error }}
            onClick={() => toast.error('You lost internet connection')}
          >
            Show error
          </PrimaryButton>
        </Col>
      </Row>
    </WrappedComponent>
  );
});
