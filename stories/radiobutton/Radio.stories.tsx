import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Radio } from 'components/radiobutton';
import docs from './readme.md';

export default {
  title: 'Example/RadioButton',
  component: Radio,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
  argTypes: {
    pointColor: { control: 'color' },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

export const RadioButton = Template.bind({});

RadioButton.args = {
  label: 'Radio button label',
  error: 'Validation error',
  pointColor: colors.primary700,
  disabled: false,
  checked: false,
};
