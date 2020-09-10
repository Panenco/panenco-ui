import React from 'react';

import PaginationReadme from 'components/pagination/README.md';

import { Row, Col, PaginationSelect } from 'components';

import { BrowserRouter } from 'react-router-dom';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Pagination', PaginationReadme, PaginationReadme).add('Pagination component', () => {
  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'center' }}>
          <Col s="3" m="6" l="8">
            <PaginationSelect
              formatUrl={(path = 'path') => {
                return path;
              }}
            />
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});
