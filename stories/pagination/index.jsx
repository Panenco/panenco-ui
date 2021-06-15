import React from 'react';

import PaginationReadme from 'components/pagination/README.md';
import PaginationDocs from 'components/pagination/DOCS.md';

import { Row, Col, PaginationSelect } from 'components';

import { BrowserRouter } from 'react-router-dom';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export const TablePagination = decorator('Pagination', PaginationDocs, PaginationReadme).add('TablePagination component', () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (option) => {
    setPage(Number(option.value));
  };

  const handleChangeRowsPerPage = (option) => {
    setRowsPerPage(Number(option.value));
    setPage(0);
  };

  const handleButtonClick = (val) => {
    setPage(val);
  }

  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'center' }}>
          <Col s="3" m="6" l="12">
            <PaginationSelect
            type="table"
            component="link"
            currentPage={page}
            onPageChange={handleChangePage}
            onPerPageChange={handleChangeRowsPerPage}
            onButtonClick={handleButtonClick}
          totalItems={201}
          formatUrl={p => `/page/${p}`}
          perPage={rowsPerPage}
            />
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});


export default decorator('Pagination', PaginationDocs, PaginationReadme).add('Pagination component', () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleButtonClick = (val) => {
    setPage(val);
  }

  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <PaginationSelect
            type="list"
            variant="contained"
            totalItems={201}
            formatUrl={p => `/page/${p}`}
            perPage={rowsPerPage}
            currentPage={page}
            onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <PaginationSelect
            type="list"
            variant="outlined"
            totalItems={201}
            formatUrl={p => `/page/${p}`}
            perPage={rowsPerPage}
            currentPage={page}
            onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <PaginationSelect
            type="list"
            variant="text"
            totalItems={201}
            formatUrl={p => `/page/${p}`}
            perPage={rowsPerPage}
            currentPage={page}
            onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="8">
            <PaginationSelect
            type="list"
            variant="text"
            component="button"
            onButtonClick={handleButtonClick}
            showFirstButton
            showLastButton
            totalItems={201}
            perPage={rowsPerPage}
            currentPage={page}
            />
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});
