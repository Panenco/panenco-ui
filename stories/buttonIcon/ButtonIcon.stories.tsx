import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { ButtonIcon as PUIButtonIcon } from 'components/button-icon';
import docs from './readme.md';

export default {
  title: 'Example/ButtonIcon',
  component: PUIButtonIcon,
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
      description: 'Icon color',
    },
    component: {
      control: { type: 'text' },
      description: 'The component used for the root node. Either a string to use a HTML element or a component.',
    },
    isLoading: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Button loading state',
    },
    to: { if: { arg: 'component', eq: 'Link' } },
    iconLeft: {
      defaultValue: false,
    },
    size: {
      description: 'Button width & height',
    },
    disabled: {
      control: { type: 'boolean' },
      defaultValue: false,
      description: 'Button disabled state',
    },
  },
} as ComponentMeta<typeof PUIButtonIcon>;

const ButtonIconTemplate: ComponentStory<typeof PUIButtonIcon> = (args) => (
  <PUIButtonIcon style={{ minWidth: '150px' }} {...args} />
);

export const ButtonIcon = ButtonIconTemplate.bind({});
ButtonIcon.args = { color: colors.primary700, size: 16, icon: 'edit' };
