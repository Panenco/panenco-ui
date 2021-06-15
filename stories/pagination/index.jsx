import React from 'react';

import PaginationReadme from 'components/pagination/README.md';
import PaginationDocs from 'components/pagination/DOCS.md';

import { Row, Col, PaginationSelect } from 'components';

import { BrowserRouter } from 'react-router-dom';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export default decorator('Pagination', PaginationDocs, PaginationReadme).add('Pagination component', () => {
  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'center' }}>
          <Col s="3" m="6" l="12">
            <PaginationSelect
            type="table"
            component="button"
            currentPage={Number(0)}
          totalItems={201}
          formatUrl={p => `/page/${p}`}
          perPage={24}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <PaginationSelect
            type="list"
            variant="contained"
            currentPage={Number(0)}
          totalItems={201}
          formatUrl={p => `/page/${p}`}
          perPage={10}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <PaginationSelect
            type="list"
            variant="outlined"
              formatUrl={(path = 'path') => {
                return path;
              }}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <PaginationSelect
            type="list"
            variant="text"
              formatUrl={(path = 'path') => {
                return path;
              }}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="8">
            <PaginationSelect
            type="list"
            variant="text"
            component="button"
            showFirstButton
            showLastButton
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
