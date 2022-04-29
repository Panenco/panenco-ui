import React from 'react';
import { Tooltip, Row, Col } from 'components';
import TooltipDocs from 'components/tooltip/DOCS.md';
import README from 'components/tooltip/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Tooltip', TooltipDocs, README).add('Tooltip component', () => {
  return (
    <WrappedComponent>
      <Row
        className='mb-1 mt-1 justify-around'
      >
        <Col xs='5' sm='5' lg='5'>
          <Tooltip
            arrow
            content='Tooltip message will show up here.'
            position='right'
          >
            RIGHT
          </Tooltip>
        </Col>
        <Col xs='5' sm='5' lg='5' className='ml-1'>
          <Tooltip
            arrow
            position='top'
            content={ <>
              <p>Tooltip message will show up here.</p>
              <a target='__blank' href='https://staging.qit.online/sign-in'>
                Link
              </a>
            </> }
          >
            TOP
          </Tooltip>
        </Col>
      </Row>
      <Row className='mb-1 mt-1 justify-around'>
        <Col xs='5' sm='5' lg='5'>
          <Tooltip arrow content='Tooltip message will show up here'
                   position='bottom'>
            BOTTOM
          </Tooltip>
        </Col>
        <Col xs='5' sm='5' lg='5' className='ml-1'>
          <Tooltip arrow content='Tooltip message will show up here'
                   position='left'>
            LEFT
          </Tooltip>
        </Col>
      </Row>
    </WrappedComponent>
  )
    ;
});
