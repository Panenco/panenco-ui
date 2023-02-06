import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Accordion } from 'components/accordion';
import { icons } from 'components/icon';

export default {
  title: 'Example/Accordion',
  component: Accordion,
  args: {
    title: 'Accordion Title',
    children: 'Accordion Content',
  },
  argTypes: {
    title: { control: 'text' },
    iconLeft: {
      control: 'select',
      options: [true, ...Object.keys(icons.sm)],
    },
    iconRight: {
      control: 'select',
      options: [true, ...Object.keys(icons.sm)],
    },
    variant: { control: 'radio' },
    shouldRotateIcon: { control: 'boolean' },
  },
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

export const Default = Template.bind({});

export const Outlined = Template.bind({});

Outlined.args = {
  iconLeft: true,
  iconRight: true,
  variant: 'outlined',
};

export const Text = Template.bind({});

Text.args = {
  iconLeft: true,
  variant: 'text',
};

export const CustomIcons = Template.bind({});

CustomIcons.args = {
  iconLeft: 'chevronsRight',
  iconRight: 'eye',
};
