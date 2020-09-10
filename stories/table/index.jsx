import React from 'react';

import { BrowserRouter } from 'react-router-dom';

import TableReadme from 'components/table-items/table/table-README.md';
import TableDocs from 'components/table-items/table/table-DOCS.md';

import { Row, Col, Table, PaginationSelect } from 'components';
import { decorator } from '../../utils/decorator';
import makeData from './makedata';

// const data = [
//   {
//     name: 'Very long document name.docx',
//     type: 'Tender',
//     size: '253 KB',
//     date: '14/Apr/2019 17:30',
//   },
//   {
//     name: 'Very long document name for tender.docx',
//     type: 'Request',
//     size: '1372 KB',
//     date: '14/Apr/2019 14:30',
//   },
//   {
//     name: 'Document name.docx',
//     type: 'Tender',
//     size: '279 KB',
//     date: '14/Mar/2019 17:30',
//   },
// ];

export default decorator('Table', TableDocs, TableReadme).add('Table', () => {
  const data = React.useMemo(() => makeData(20), []);

  class HeaderCreator {
    constructor(header, accessor, disableSortBy, priority) {
      this.Header = header;
      this.accessor = accessor;
      this.disableSortBy = disableSortBy;
      this.priority = priority;
    }
  }

  const firstName = new HeaderCreator('First Name', 'firstName', false, 6);
  const lastName = new HeaderCreator('Last Name', 'lastName', false, 5);
  const status = new HeaderCreator('Status', 'status', true, 4);
  const visits = new HeaderCreator('Visits', 'visits', true, 3);
  const age = new HeaderCreator('Age', 'age', true, 2);
  const progress = new HeaderCreator('Profile Progress', 'progress', true, 1);
  const num = new HeaderCreator('Num', 'num', true, 0);

  // const firstName = {
  //   Header: 'First name',
  //   accessor: 'firstName',
  //   disableSortBy: false,
  //   priority: 6,
  //   style: {
  //     fontWeight: '100',
  //   },
  // };

  const columns = React.useMemo(() => [firstName, lastName, status, visits, age, progress, num], []);

  return (
    <BrowserRouter>
      <>
        <Row>
          <Col l="12" m="8" s="4">
            <Table columns={columns} data={data} />
          </Col>
        </Row>
        <Row className="pagination">
          <Col l="8" m="8" s="4">
            <PaginationSelect
              formatUrl={(path = 'path') => {
                return path;
              }}
            />
          </Col>
        </Row>
      </>
    </BrowserRouter>
  );
});

// export default TableDecorator;
