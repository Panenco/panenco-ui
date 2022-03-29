import { TextInput, Button, Col, ResponsiveTable, Row, SelectInput } from 'components';
import TableDocs from 'components/responsive-table/responsive-table-DOCS.md';
import TableReadme from 'components/responsive-table/responsive-table-README.md';
import React from 'react';

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
      thProps: {
        'data-cy': 'dataCyAttr',
      },
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
  const rows = [
    {
      id: '26b473e2-a647-11ea-b899-32dfc76a2330',
      data: {
        abbreviation: '..TestScore',
        authors: 'Koen Verschooten',
        goals: 'Test the score graphs',
        name: 'Test score',
        price: '5.00',
        questions: 5,
        targetAudience: 'Testers',
      },
    },
    {
      id: 'a5175699-dca5-11ea-b899-32dfc76a2330',
      data: {
        abbreviation: '1GAME',
        authors: 'Jordi',
        goals: 'Report testing',
        name: 'Game verslaving test',
        price: '0.00',
        questions: 4,
        targetAudience: 'Testing',
      },
    },
    {
      id: '97f81bcb-dc99-11ea-b899-32dfc76a2330',
      data: {
        abbreviation: 'ABC',
        authors: 'Jordi Vandenhouwe',
        goals: 'Testing how Questionnaires work',
        name: 'Test QUestionnaire',
        price: '50.00',
        questions: 5,
        targetAudience: 'Testing',
      },
    },
    {
      id: '13b5b06e-0af4-11ea-9957-0242ac120003',
      data: {
        abbreviation: 'ACQ',
        authors: 'Chambless, e.a. (1984, oorspr. versie), Bouman (1995, Nedl. versie)',
        goals: 'Bevraagt belevingen en cognities die gepaard gaan met paniek en agorafobie',
        name: 'Agoraphobic Cognitions Questionnaire',
        price: '0.00',
        questions: 14,
        targetAudience: 'Volwassenen, adolescenten',
      },
    },
    {
      id: '03cabb9c-d484-11e9-b25e-0242ac150002',
      data: {
        abbreviation: 'ADP-IV',
        authors: 'Schotte & De Doncker (1994)',
        goals: 'Brengt DSM-IV persoonlijkheidspathologie in kaart',
        name: 'Assessment DSM-IV Persoonlijkheidspathologie',
        price: '0.00',
        questions: 94,
        targetAudience: 'Volwassenen, adolescenten',
      },
    },
    {
      id: '4d39f78e-0c8b-11ea-9957-0242ac120003',
      data: {
        abbreviation: 'ASI',
        authors: 'Taylor et al (2007, oorspr. versie), de Jong (2008, Nedl, versie)',
        goals: 'Meet gevoeligheid voor angst',
        name: 'Anxiety Sensitivity Index',
        price: '0.00',
        questions: 18,
        targetAudience: 'Volwassenen, adolescenten',
      },
    },
    {
      id: 'da050f5c-0cf6-11ea-9957-0242ac120003',
      data: {
        abbreviation: 'AUDIT',
        authors: 'World Health Organization (2001, oorspr. versie), Schippers & Broekman (2010, Nedl. versie)',
        goals: 'Identificeert riskante en schadelijke patronen van alcoholgebruik',
        name: 'Alcohol Use Disorder Identification Test',
        price: '0.00',
        questions: 10,
        targetAudience: 'Volwassenen, adolescenten',
      },
    },
    {
      id: '8510f2e6-0cff-11ea-9957-0242ac120003',
      data: {
        abbreviation: 'BAT (Alg)',
        authors: 'Schaufeli, De Witte & Desart (2019)',
        goals: 'Meet burn-out bij mensen die niet meer aan het werk zijn',
        name: 'Burnout Assessment Tool (Algemene versie)',
        price: '0.00',
        questions: 32,
        targetAudience: 'Volwassenen',
      },
    },
    {
      id: 'f29ffadd-0d08-11ea-9957-0242ac120003',
      data: {
        abbreviation: 'BAT (Werk)',
        authors: 'Schaufeli, De Witte & Desart (2019)',
        goals: 'Meet burn-out bij mensen die nog aan het werk zijn',
        name: 'Burnout Assessment Tool (Werkgerelateerde versie)',
        price: '0.00',
        questions: 33,
        targetAudience: 'Volwassenen',
      },
    },
    {
      id: 'ebc98412-d483-11e9-81fe-0242ac150002',
      data: {
        abbreviation: 'BDI-2-NL-R',
        authors:
          'Beck, Steer, Brown (1996, oorspr. versie); van der Does (2002, Nedl. versie). <br> © Pearson. De gedigitaliseerde vragenlijst is door QIT vervaardigd na schriftelijke toestemming. Dit materiaal is auteursrechtelijk beschermd en kopiëren zonder schriftelijke toestemming van de uitgever is dan ook niet toegestaan.Pearson',
        goals: 'Meet de ernst van depressieve symptomen',
        name: 'Beck Depression Inventory',
        price: '1.92',
        questions: 21,
        targetAudience: 'Volwassenen, adolescenten',
      },
    },
  ];
  const defaultSort = {
    sort: 'abbreviation',
    direction: 'asc',
  };
  const [sort, setSort] = React.useState(defaultSort);
  const [loading, setLoading] = React.useState(false);
  const handleSort = (sortName, direction) => {
    console.log(`Column ${sortName} is now sorted in ${direction === 'desc' ? 'asc' : 'desc'} direction`);

    if (direction === 'desc') {
      setSort({ sort: sortName, direction: 'asc' });
    } else {
      setSort({ sort: sortName, direction: 'desc' });
    }
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
        itemsPerPage={5}
        columns={columns}
        rows={rows}
        sort={sort}
        handleSort={handleSort}
        headerColor="pink"
        rowsColor="black"
      />
    </WrappedComponent>
  );
});
