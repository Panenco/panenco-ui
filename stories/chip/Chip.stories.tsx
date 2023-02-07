import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Chip } from 'components/chip';
import { icons } from 'components';

export default {
  title: 'Components/Chip',
  component: Chip,
  args: {
    children: 'Chip content',
  },
  argTypes: {
    icon: {
      control: {
        type: 'select',
        options: Object.keys(icons.sm),
      },
    },
    uncheckedIcon: {
      control: {
        type: 'select',
        options: Object.keys(icons.sm),
      },
    },
  },
} as ComponentMeta<typeof Chip>;

const Template: ComponentStory<typeof Chip> = (args) => <Chip {...args} />;

export const Default = Template.bind({});

export const Checked = Template.bind({});
Checked.args = {
  checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  checked: true,
  icon: 'checkCircle',
};

export const CustomUncheckedIcon = Template.bind({});
CustomUncheckedIcon.args = {
  checked: false,
  uncheckedIcon: 'circle',
};
