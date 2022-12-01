import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Button as PUIButton } from 'components/button';
import docs from './readme.md';

export default {
  title: 'Example/Button',
  component: PUIButton,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
    controls: {
      expanded: true,
    },
  },

  argTypes: {
    color: {
      control: 'color',
      description: 'Button text and icon color',
    },
    component: {
      control: { type: 'text' },
      description: 'The component used for the root node. Either a string to use a HTML element or a component.',
    },
    iconLeft: {
      description:
        'Icon position.<br/> <strong>To set icon on the left side:</strong> <br/> -Set one of the following options as value for "icon" or "iconLeft" prop',
    },
    iconRight: {
      description:
        'Icon position. <br/> <strong>To set icon on the right side:</strong> <br/> -Set one of the following options as value for "iconRight" prop  <br/><strong>or</strong> <br/> -Set one of the following options as value for "icon" prop and use "iconRight" as boolean.',
    },
    icon: {
      table: {
        disable: true,
      },
    },
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Button loading state',
    },
    to: { if: { arg: 'component', eq: 'Link' } },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Button disabled state',
    },
    variant: {
      defaultValue: 'contained',
    },
  },
} as ComponentMeta<typeof PUIButton>;

const ButtonTemplate: ComponentStory<typeof PUIButton> = (args) => (
  <PUIButton style={{ minWidth: '150px' }} {...args} />
);

export const Button = ButtonTemplate.bind({});

Button.args = {
  children: 'Text',
  color: colors.primary700,
  variant: 'outlined',
  iconLeft: 'edit',
};
