import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TablePagination } from 'components/pagination/table-pagination';
import { BrowserRouter } from 'react-router-dom';
import { Col, Row } from 'components';

export default {
  title: 'Components/Pagination/TablePagination',
  component: TablePagination,
} as ComponentMeta<typeof TablePagination>;

const Template: ComponentStory<typeof TablePagination> = (args) => <TablePagination {...args} />;

export const Default = Template.bind({});

const DemoTemplate = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(12);

  const handleChangePage = (val) => {
    setPage(Number(val));
  };

  const handleChangeRowsPerPage = (val) => {
    setRowsPerPage(Number(val));
    setPage(0);
  };

  return (
    <BrowserRouter>
      <Row style={{ justifyContent: 'center' }}>
        <Col>
          <TablePagination
            page={page}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            count={201}
            rowsPerPage={rowsPerPage}
          />
        </Col>
      </Row>
    </BrowserRouter>
  );
};

export const Demo = DemoTemplate.bind({});
