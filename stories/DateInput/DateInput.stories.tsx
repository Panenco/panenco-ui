import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput } from 'components/form/date-input';
import { isValid } from 'date-fns';

export default {
  title: 'Components/Form/DateInput',
  component: DateInput,
  args: {
    inputs: [
      {
        title: 'Day',
        type: 'date',
        format: 'dd',
        placeholder: '01',
      },
      {
        title: 'Month',
        type: 'month',
        format: 'MMM',
        placeholder: 'Jan',
      },
      {
        title: 'Year',
        type: 'year',
        format: 'yyyy',
        placeholder: '2021',
      },
    ],
  },
  argTypes: {
    value: {
      control: {
        type: 'date',
      },
    },
    onBlur: {
      control: { disable: true },
    },
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [error, setError] = React.useState<string | undefined>(undefined);

  const handleChange = (v) => {
    if (isValid(v)) {
      setError(undefined);
    } else {
      setError('Invalid date');
    }
    setValue(v);
  };

  return <DateInput {...args} error={error} onChange={handleChange} value={value} />;
};

export const Default = Template.bind({});
