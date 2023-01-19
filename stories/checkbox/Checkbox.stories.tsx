import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Checkbox } from 'components/checkbox';
import docs from './readme.md';

export default {
  title: 'Example/Checkbox',
  component: Checkbox,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

export const CheckboxComponent = Template.bind({});

CheckboxComponent.argTypes = {
  color: { control: 'color' },
  borderWidth: { control: { type: 'number', min: 1, step: 1 } },
};

CheckboxComponent.args = {
  label: 'Checkbox label',
  color: colors.primary700,
  disabled: false,
  checked: true,
};
