import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Radio } from 'components/radiobutton';

export default {
  title: 'Example/Radio',
  component: Radio,
  argTypes: {
    pointColor: { control: 'color' },
  },
  args: {
    label: 'Radio button label',
    checked: true,
    inputProps: {
      id: 'radio-button',
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  error: 'Validation error',
  checked: false,
};

export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
  checked: false,
};
