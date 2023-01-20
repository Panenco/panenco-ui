// import React from 'react';

// import PaginationReadme from 'components/pagination/README.md';
// import TablePaginationReadme from 'components/pagination/TABLE-README.md';
// import PaginationDocs from 'components/pagination/DOCS.md';
// import TablePaginationDocs from 'components/pagination/TABLE-DOCS.md';

// import { Row, Col, Pagination, TablePagination as TablePaginationSelect } from 'components';

// import { BrowserRouter } from 'react-router-dom';

// import { decorator } from '../../utils/decorator';
// import { WrappedComponent } from '../helpers/wrapped';

// export const TablePagination = decorator('Pagination', TablePaginationDocs, TablePaginationReadme).add(
//   'TablePagination component',
//   () => {
//     const [page, setPage] = React.useState(0);
//     const [rowsPerPage, setRowsPerPage] = React.useState(12);

//     const handleChangePage = (val) => {
//       setPage(Number(val));
//     };

//     const handleChangeRowsPerPage = (val) => {
//       setRowsPerPage(Number(val));
//       setPage(0);
//     };

//     return (
//       <WrappedComponent>
//         <BrowserRouter>
//           <Row style={{ justifyContent: 'center' }}>
//             <Col>
//               <TablePaginationSelect
//                 page={page}
//                 onChangePage={handleChangePage}
//                 onChangeRowsPerPage={handleChangeRowsPerPage}
//                 count={201}
//                 rowsPerPage={rowsPerPage}
//               />
//             </Col>
//           </Row>
//         </BrowserRouter>
//       </WrappedComponent>
//     );
//   },
// );

// export default decorator('Pagination', PaginationDocs, PaginationReadme).add('Pagination component', () => {
//   const [page, setPage] = React.useState(0);
//   const [rowsPerPage, setRowsPerPage] = React.useState(12);

//   const handleButtonClick = (val) => {
//     setPage(val);
//   };

//   return (
//     <WrappedComponent>
//       <BrowserRouter>
//         <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
//           <Col xs='3' sm='6' lg='6'>
//             <Pagination
//               variant='contained'
//               count={201}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onButtonClick={handleButtonClick}
//             />
//           </Col>
//         </Row>
//         <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
//           <Col xs='3' sm='6' lg='6'>
//             <Pagination
//               variant='outlined'
//               count={201}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onButtonClick={handleButtonClick}
//             />
//           </Col>
//         </Row>
//         <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
//           <Col xs='3' sm='6' lg='6'>
//             <Pagination
//               variant='text'
//               count={201}
//               rowsPerPage={rowsPerPage}
//               page={page}
//               onButtonClick={handleButtonClick}
//             />
//           </Col>
//         </Row>
//         <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
//           <Col xs='3' md='6' lg='8'>
//             <Pagination
//               variant='text'
//               onButtonClick={handleButtonClick}
//               showFirstButton
//               showLastButton
//               count={201}
//               rowsPerPage={rowsPerPage}
//               page={page}
//             />
//           </Col>
//         </Row>
//       </BrowserRouter>
//     </WrappedComponent>
//   );
// });
