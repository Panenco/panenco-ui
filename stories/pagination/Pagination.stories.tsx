import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from 'components/pagination';
import { BrowserRouter } from 'react-router-dom';
import { Col, Row } from 'components';

export default {
  title: 'Example/Pagination/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});

const DemoTemplate = () => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage] = React.useState(12);

  const handleButtonClick = (val) => {
    setPage(val);
  };

  return (
    <BrowserRouter>
      <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
        <Col xs='3' sm='6' lg='6'>
          <Pagination
            variant='contained'
            count={201}
            rowsPerPage={rowsPerPage}
            page={page}
            onButtonClick={handleButtonClick}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
        <Col xs='3' sm='6' lg='6'>
          <Pagination
            variant='outlined'
            count={201}
            rowsPerPage={rowsPerPage}
            page={page}
            onButtonClick={handleButtonClick}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
        <Col xs='3' sm='6' lg='6'>
          <Pagination
            variant='text'
            count={201}
            rowsPerPage={rowsPerPage}
            page={page}
            onButtonClick={handleButtonClick}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'center', marginTop: '20px' }}>
        <Col xs='3' md='6' lg='8'>
          <Pagination
            variant='text'
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
  );
};

export const Demo = DemoTemplate.bind({});
