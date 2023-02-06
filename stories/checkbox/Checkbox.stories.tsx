import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Checkbox } from 'components/checkbox';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,

  argTypes: {
    color: { control: 'color' },
    borderWidth: { control: { type: 'number', min: 1, step: 1 } },
  },
  args: {
    label: 'Checkbox label',
    checked: true,
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const Default = Template.bind({});

export const Error = Template.bind({});

Error.args = {
  error: 'Error message',
  checked: false,
};
export const Disabled = Template.bind({});

Disabled.args = {
  disabled: true,
};
