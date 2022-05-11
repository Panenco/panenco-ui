import React from 'react';
import { SelectInput, Row, Col, Icon } from 'components';
import SelectInputDocs from 'components/select/DOCS.md';
import README from 'components/select/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const defaultOptions = [
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
  const [options, setOptions] = React.useState(defaultOptions);
  const [value, setValue] = React.useState([]);

  const handleChange = (val) => {
    setValue(val);
  };

  const handleDeleteOption = (val, e) => {
    setValue(value.filter((current) => current.value !== val.value));
  };

  const handleNewOption = (val) => {
    setOptions((prevOptions) => [...prevOptions, { label: val, value: val }]);
  };

  return (
    <WrappedComponent>
      <Row>
        <Col xs='12' sm='6'>
          <SelectInput options={options} title='Single Select' subTitle='Sub title' placeholder='Choose one option' />
        </Col>
        <Col xs='12' sm='6'>
          <SelectInput
            options={options}
            title='Multi Select'
            subTitle='Sub title'
            isMulti
            chipIconSize={4}
            chipIcon={Icon.icons.close}
            placeholder='Choose many options ...'
            value={value}
            onChange={handleChange}
            onDeleteOption={handleDeleteOption}
          />
        </Col>
        <Col xs='12' sm='6'>
          <SelectInput
            options={options}
            title='Creatable Select'
            subTitle='Sub title'
            placeholder='Choose or create ...'
            value={value}
            onChange={handleChange}
            onDeleteOption={handleDeleteOption}
            onCreateOption={handleNewOption}
            creatable
          />
        </Col>
        <Col xs='12' sm='6'>
          <SelectInput options={options} title='Select with Error' subTitle='Sub title' error='Error options' />
        </Col>
        <Col xs='12' sm='6'>
          <SelectInput title='Disabled select' subTitle='Sub title' placeholder='Disabled' isDisabled />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
