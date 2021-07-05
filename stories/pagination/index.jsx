import React from 'react';

import PaginationReadme from 'components/pagination/README.md';
import TablePaginationReadme from 'components/pagination/TABLE-README.md';
import PaginationDocs from 'components/pagination/DOCS.md';
import TablePaginationDocs from 'components/pagination/TABLE-DOCS.md';

import { Row, Col, Pagination, TablePagination as TablePaginationSelect } from 'components';

import { BrowserRouter } from 'react-router-dom';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

export const TablePagination = decorator('Pagination', TablePaginationDocs, TablePaginationReadme).add(
  'TablePagination component',
  () => {
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
    };

    return (
      <WrappedComponent>
        <BrowserRouter>
          <Row style={{ justifyContent: 'center' }}>
            <Col s="3" m="6" l="12">
              <TablePaginationSelect
                page={page}
                onChangePage={handleChangePage}
                onChangeRowsPerPage={handleChangeRowsPerPage}
                onButtonClick={handleButtonClick}
                count={201}
                rowsPerPage={rowsPerPage}
              />
            </Col>
          </Row>
        </BrowserRouter>
      </WrappedComponent>
    );
  },
);

export default decorator('Pagination', PaginationDocs, PaginationReadme).add('Pagination component', () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleButtonClick = (val) => {
    setPage(val);
  };

  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <Pagination
              variant="contained"
              count={201}
              rowsPerPage={rowsPerPage}
              page={page}
              onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <Pagination
              variant="outlined"
              count={201}
              rowsPerPage={rowsPerPage}
              page={page}
              onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="6">
            <Pagination
              variant="text"
              count={201}
              rowsPerPage={rowsPerPage}
              page={page}
              onButtonClick={handleButtonClick}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
          <Col s="3" m="6" l="8">
            <Pagination
              variant="text"
              onButtonClick={handleButtonClick}
              showFirstButton
              showLastButton
              count={201}
              rowsPerPage={rowsPerPage}
              page={page}
            />
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});
