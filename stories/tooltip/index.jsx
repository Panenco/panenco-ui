import React from 'react';
import { Tooltip, Row, Col } from 'components';
import TooltipDocs from 'components/tooltip/DOCS.md';
import README from 'components/tooltip/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Tooltip', TooltipDocs, README).add('Tooltip component', () => {
  return (
    <WrappedComponent>
      <Row style={ { justifyContent: 'space-around', marginBottom: '1.5rem', marginTop: '1rem' } }>
        <Col s='6' m='6' l='6'>
          <Tooltip arrow position='top'
                   content={ <><p>Tooltip message will show up here.</p>
                     <a
                       href='https://staging.qit.online/sign-in'>Link</a> </> }>TOP</Tooltip>
        </Col>
        <Col s='6' m='6' l='6'>
          <Tooltip arrow content='Tooltip message will show up here.'
                   position='right'>
            RIGHT
          </Tooltip>
        </Col>
      </Row>
      <Row style={ { justifyContent: 'space-around' } }>
        <Col s='6' m='6' l='6'>
          {/* <Tooltip arrow content='Tooltip message will show up here' */}
          {/*         position='bottom'> */}
          {/*  BOTTOM */}
          {/* </Tooltip> */}
        </Col>
        <Col s='6' m='6' l='6'>
          {/* <Tooltip arrow content='Tooltip message will show up here' */}
          {/*         position='left'> */}
          {/*  LEFT */}
          {/* </Tooltip> */}
        </Col>
      </Row>
    </WrappedComponent>
  )
    ;
});
