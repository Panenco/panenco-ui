import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Switch } from 'components/switch';

export default {
  title: 'Components/Switch',
  component: Switch,
  argTypes: {
    width: { control: 'number' },
    height: { control: 'number' },
    size: { control: 'number' },
    inputRef: {
      control: {
        disable: true,
      },
    },
    wrapperProps: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Switch>;

const Template: ComponentStory<typeof Switch> = (args) => <Switch {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Checked = Template.bind({});
Checked.args = {
  value: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  size: 40,
};

export const CustomHeight = Template.bind({});
CustomHeight.args = {
  height: 30,
};

export const CustomWidth = Template.bind({});
CustomWidth.args = {
  width: 80,
};
