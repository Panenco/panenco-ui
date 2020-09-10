import React from 'react';
import { Row, Col, toast, PrimaryButton } from 'index';
import NotificationDOCS from 'components/notification/DOCS.md';
import NotificationREADME from 'components/notification/README.md';
import { colors } from 'styles';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Notification', NotificationDOCS, NotificationREADME).add('Notification component', () => {
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around', marginTop: '50px' }}>
        <Col s="2" m="2" l="3">
          <PrimaryButton
            style={{ backgroundColor: colors.success }}
            onClick={() =>
              toast.success('We will verify your application and get back to you if we have any questions.')
            }
          >
            Show success
          </PrimaryButton>
        </Col>
        <Col s="2" m="3" l="3">
          <PrimaryButton
            style={{ backgroundColor: colors.alert }}
            onClick={() =>
              toast.warning(
                <div>
                  <div style={{ fontWeight: 800 }}>You have not enough memory</div>
                  <div>We will verify your application and get back to you if we have any questions. </div>
                </div>,
              )
            }
          >
            Show warning
          </PrimaryButton>
        </Col>
        <Col s="2" m="2" l="3">
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
