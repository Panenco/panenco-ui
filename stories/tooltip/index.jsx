import React from 'react';
import { Tooltip as TooltipOld, Row, Col } from 'components';
import TooltipDocs from 'components/tooltip/DOCS.md';
import README from 'components/tooltip/README.md';
import Tooltip from '../../src/components/tooltip/index-new';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Tooltip', TooltipDocs, README).add('Tooltip component', () => {
  return (
    <WrappedComponent>
      <Row style={ { justifyContent: 'space-around' } }>
        <Col s='4' m='4' l='4'>
          <Tooltip arrow position='bottom'
                   content={<><p>Tooltip message will show up here.</p>
                     <a
                     href='https://staging.qit.online/sign-in'>Link</a> </>}>TOP</Tooltip>
        </Col>
        <Col s='4' m='4' l='4'>
          <TooltipOld content='Tooltip message will show up here.'
                      position='right'>
            RIGHT
          </TooltipOld>
        </Col>
        {/* </Row> */ }
        {/* <Row style={{ justifyContent: 'space-around' }}> */ }
        {/*  <Col s="2" m="4" l="3"> */ }
        {/*    <Tooltip content="Tooltip message will show up here" position="bottom"> */ }
        {/*      BOTTOM */ }
        {/*    </Tooltip> */ }
        {/*  </Col> */ }
        {/*  <Col s="2" m="4" l="3"> */ }
        {/*    <Tooltip content="Tooltip message will show up here" position="left"> */ }
        {/*      LEFT */ }
        {/*    </Tooltip> */ }
        {/*  </Col> */ }
      </Row>
    </WrappedComponent>
  )
    ;
});
