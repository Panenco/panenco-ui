import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Button } from 'components/button';
import docs from './readme.md';
import icons from '../icons';

export default {
  title: 'Example/Button',
  component: Button,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  argTypes: {
    color: { control: 'color' },
    // iconLeft: {
    //   control: 'boolean',
    // },
    // iconRight: { control: 'boolean' },
    component: {
      options: ['a', 'div', 'button'],
      control: { type: 'select' },
    },
    iconClassName: {
      control: { type: 'text' },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button style={{ minWidth: '150px' }} {...args} />;

export const Outlined = Template.bind({});

Outlined.args = {
  children: 'Text',
  color: colors.primary700,
  variant: 'outlined',
  // iconLeft: 'edit',
  iconLeft: 'edit',
};

// export const Contained = Template.bind({});

// Contained.args = {
//   children: 'Text',
//   variant: 'contained',
//   icon: undefined,
//   component: undefined,
// };

// export const Text = Template.bind({});

// Text.args = {
//   children: 'Text',
//   variant: 'text',
// };

// export const Link = Template.bind({});

// Link.args = {
//   children: 'Text',
//   component: 'a',
//   //   onclick:
//   href: 'mailto:info@panenco.com?subject=Secret subject',
//   iconLeft: true,
//   // iconRight: false,
//   icon: 'edit',
// };

// export const ButtonComponentIsLoading = Template.bind({});

// ButtonComponentIsLoading.args = {
//   children: 'Text',
//   color: colors.primary700,
//   isLoading: true,
// };
