import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Stamp } from 'components/stamp';

export default {
  title: 'Example/Stamp',
  component: Stamp,
  args: {
    children: 'Stamp content',
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  decorators: [(Story) => <div style={{ maxWidth: '150px' }}>{Story()}</div>],
} as ComponentMeta<typeof Stamp>;

const Template: ComponentStory<typeof Stamp> = (args) => <Stamp {...args} />;

export const Default = Template.bind({});

export const Outlined = Template.bind({});

Outlined.args = {
  variant: 'outlined',
};

export const Fulfilled = Template.bind({});

Fulfilled.args = {
  variant: 'fulfilled',
  color: colors.primary700,
  backgroundColor: colors.primary200,
  borderRadius: 10,
};
