import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { DateInput } from 'components/form/date-input';

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
        placeholder: '12',
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
  },
} as ComponentMeta<typeof DateInput>;

const Template: ComponentStory<typeof DateInput> = (args) => <DateInput {...args} />;

export const Default = Template.bind({});
