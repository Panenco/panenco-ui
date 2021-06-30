import React from 'react';
import { SelectInput, Row, Col } from 'components';
import SelectInputDocs from 'components/select/DOCS.md';
import README from 'components/select/README.md';
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

export default decorator('Select', SelectInputDocs, README).add('Select component', () => {
  const [value, setValue] = React.useState([]);
  const handleChange = (val) => {
    setValue(val);
  };

  const handleDeleteOption = (val, e) => {
    setValue(value.filter((current) => current.value !== val.value));
  };
  return (
    <WrappedComponent style={{ minHeight: '500px' }}>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col sm="2" md="4" lg="4">
          <SelectInput options={options} title="Single Select" subTitle="Sub title" placeholder="Choose one option" />
        </Col>
        <Col sm="2" md="4" lg="4">
          <SelectInput
            options={options}
            title="Multi Select"
            subTitle="Sub title"
            isMulti
            chipIconSize={8}
            placeholder="Choose many options ..."
            value={value}
            onChange={handleChange}
            onDeleteOption={handleDeleteOption}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col sm="2" md="4" lg="4">
          <SelectInput options={options} title="Select with Error" error="Error options" />
        </Col>
        <Col sm="2" md="4" lg="4">
          <SelectInput placeholder="Disabled" isDisabled />
        </Col>
      </Row>
      {/* <Row>
        <Col sm="2" md="4" lg="4">
          <TextInput error="1" />
        </Col>
      </Row> */}
    </WrappedComponent>
  );
});
