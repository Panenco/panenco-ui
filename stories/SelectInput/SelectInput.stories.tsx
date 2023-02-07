import * as React from 'react';
import { ComponentMeta } from '@storybook/react';
import { SelectInput } from 'components/select';
import { Col, Row } from 'components';
import docs from './readme.md';

export default {
  title: 'Example/SelectInput (deprecated)',
  component: SelectInput,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
    controls: { disabled: true },
  },
} as ComponentMeta<typeof SelectInput>;

const options = [
  { label: 'Chip', value: 'Chip_1' },
  { label: 'Chip', value: 'Chip_2' },
  {
    label: 'Group 1',
    options: [
      { label: 'G1-Option 1', value: 'G1-Option_1' },
      { label: 'G1-option 2', value: 'G1-Option_2' },
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

const defaultDeletableOptions = [
  { label: 'Chip 1', value: 'Chip_1' },
  { label: 'Chip 2', value: 'Chip_2' },
  { label: 'Chip 3', value: 'Chip_3' },
  { label: 'Chip 4', value: 'Chip_4' },
  { label: 'Chip 5', value: 'Chip_5' },
];

const FullDemoTemplate = () => {
  const [deletableOptions, setDeletableOptions] = React.useState(defaultDeletableOptions);

  const [value, setValue] = React.useState<
    | {
        label: string;
        value: string;
      }
    | undefined
  >(undefined);

  const [multiValue, setMultiValue] = React.useState<
    {
      label: string;
      value: string;
    }[]
  >([]);

  const handleChange = (val) => {
    setValue(val);
  };

  const handleDeleteMultiOption = (val) => {
    setMultiValue(multiValue?.filter((current) => current.value !== val.value));
  };

  const handleNewOption = (val) => {
    setDeletableOptions((prevOptions) => [...prevOptions, { label: val, value: val }]);
  };

  const handleDeleteItem = (data) => {
    setDeletableOptions((prevOptions) => prevOptions.filter((i) => i.value !== data.value));
  };

  return (
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
          placeholder='Choose many options ...'
          value={multiValue}
          onChange={setMultiValue}
          onDeleteOption={handleDeleteMultiOption}
        />
      </Col>
      <Col xs='12' sm='6'>
        <SelectInput
          options={deletableOptions}
          title='Creatable Select'
          subTitle='Sub title'
          placeholder='Choose or create ...'
          value={value}
          onChange={handleChange}
          onCreateOption={handleNewOption}
          onDeleteItem={handleDeleteItem}
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
  );
};

export const FullDemo = FullDemoTemplate.bind({});
FullDemo.decorators = [(Story) => <div style={{ minHeight: '600px' }}>{Story()}</div>];
FullDemo.parameters = {
  controls: { disable: true },
};
