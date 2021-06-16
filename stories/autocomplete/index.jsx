import React from 'react';
import { AutoComplete, Row, Col } from 'components';
import AutoCompleteDOCS from 'components/autocomplete/DOCS.md';
import README from 'components/autocomplete/README.md';
import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const options = [
  { label: 'Chip', value: '1' },
  { label: 'Chip', value: '2' },
  { label: 'G1-Option 1', value: 'value_1' },
  { label: 'G1-option 2', value: 'value_2' },
  { label: 'G2-Option 1 ', value: 'value_3' },
  { label: 'G2-Option 2', value: 'value_4' },
  { label: 'G2-Option 3', value: 'value_5' },
];

const searchPlaceholder = 'Some custom disable option';

export default decorator('Autocomplete', AutoCompleteDOCS, README).add('Autocomplete component', () => {
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
          <AutoComplete
            options={options}
            searchPlaceholder={searchPlaceholder}
            title="Single Select"
            subTitle="Sub title"
            formatCreateLabel={() => <span>Example</span>}
          />
        </Col>
        <Col sm="2" md="4" lg="4">
          <AutoComplete
            options={options}
            title="Multi Select"
            subTitle="Sub title"
            isMulti
            value={value}
            onChange={handleChange}
            onDeleteOption={handleDeleteOption}
          />
        </Col>
      </Row>
      <Row style={{ justifyContent: 'space-around', alignItems: 'flex-start' }}>
        <Col sm="2" md="4" lg="4">
          <AutoComplete title="Select with Error" error="Error options" />
        </Col>
        <Col sm="2" md="4" lg="4">
          <AutoComplete title="Disabled select" placeholder="Disabled" isDisabled />
        </Col>
      </Row>
    </WrappedComponent>
  );
});
