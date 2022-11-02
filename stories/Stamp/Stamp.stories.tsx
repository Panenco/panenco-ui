import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Stamp } from 'components/stamp';
import docs from './readme.md';

export default {
  title: 'Example/Stamp',
  component: Stamp,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Stamp>;

const Template: ComponentStory<typeof Stamp> = (args) => <Stamp style={{ maxWidth: '150px' }} {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Status',
  variant: 'outlined',
};

export const Fulfilled = Template.bind({});

Fulfilled.args = {
  children: 'Status',
  variant: 'fulfilled',
  color: colors.primary700,
  backgroundColor: colors.primary200,
  borderRadius: 10,
};
