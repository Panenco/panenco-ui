import { TextInput, Button, Col, ResponsiveTable, Row, SelectInput } from 'components';
import TableDocs from 'components/responsive-table/responsive-table-DOCS.md';
import TableReadme from 'components/responsive-table/responsive-table-README.md';
import React from 'react';

import rowsData from './rows.json';
import s from './styles.scss';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const options = [
  { label: 'Chip', value: 'Chip_1' },
  { label: 'Chip', value: 'Chip_2' },
  {
    label: 'Group 1',
    options: [
      { label: 'G1-Option 1', value: 'G1-Option _1' },
      { label: 'G1-option 2', value: 'G1-Option _2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'G2-Option 1 ', value: 'G2-Option_1' },
      { label: 'G2-Option 2', value: 'G2-Option_2' },
      { label: 'G2-Option 3', value: 'G2-Option_3' },
    ],
  },
];

export default decorator('ResponsiveTable', TableDocs, TableReadme).add('ResponsiveTable', () => {
  const columns = [
    {
      accessor: 'abbreviation',
      label: 'Abbreviation',
      priorityLevel: 1,
      position: 1,
      minWidth: 165,
      isVisible: true,
      sortName: 'abbreviation',
    },
    {
      accessor: 'name',
      label: 'Title',
      priorityLevel: 2,
      position: 2,
      minWidth: 196,
      isVisible: true,
    },
    {
      accessor: 'goals',
      label: 'Goals',
      priorityLevel: 3,
      position: 3,
      minWidth: 196,
      isVisible: true,
      component: () => <TextInput />,
    },
    {
      accessor: 'targetAudience',
      label: 'Target Audience',
      priorityLevel: 4,
      position: 4,
      minWidth: 196,
      isVisible: true,
      component: () => <SelectInput options={options} />,
      className: s.overflow,
    },
    {
      accessor: 'authors',
      label: 'Authors',
      priorityLevel: 5,
      position: 5,
      minWidth: 196,
      isVisible: true,
      sortName: 'authors',
    },
    {
      accessor: 'questions',
      label: '# questions',
      priorityLevel: 6,
      position: 6,
      minWidth: 114,
      isVisible: true,
    },
    {
      accessor: 'price',
      label: 'Price',
      priorityLevel: 7,
      position: 7,
      minWidth: 72,
      isVisible: true,
    },
  ];
  const defaultSort = {
    sort: 'abbreviation',
    direction: 'asc',
  };
  const [rows, setRows] = React.useState(rowsData);
  const [sort, setSort] = React.useState(defaultSort);
  const [loading, setLoading] = React.useState(false);
  const handleSort = (sortName, direction) => {
    console.log(`Column ${sortName} is now sorted in ${direction === 'desc' ? 'asc' : 'desc'} direction`);

    if (direction === 'desc') {
      setSort({ sort: sortName, direction: 'asc' });
    } else {
      setSort({ sort: sortName, direction: 'desc' });
    }

    // only for story we will sort mock data, in real project api call expected
    setRows(
      rows.sort((a, b) => {
        if (a.data[sortName] > b.data[sortName]) {
          return direction === 'asc' ? -1 : 1;
        }
        if (a.data[sortName] < b.data[sortName]) {
          return direction === 'asc' ? 1 : -1;
        }
        return 0;
      }),
    );
  };
  return (
    <WrappedComponent>
      <Row style={{ justifyContent: 'space-around', marginTop: '20px' }}>
        <Col>
          <Button onClick={() => setLoading(!loading)}>Toggle Loading</Button>
        </Col>
      </Row>

      <ResponsiveTable
        isLoading={loading}
        itemsPerPage={10}
        columns={columns}
        rows={rows}
        sort={sort}
        handleSort={handleSort}
      />
    </WrappedComponent>
  );
});
