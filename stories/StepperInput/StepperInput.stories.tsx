import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { StepperInput } from 'components/form/stepper';
import docs from './readme.md';

export default {
  title: 'Components/Form/StepperInput (deprecated)',
  component: StepperInput,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
    controls: { disabled: true },
  },
  argTypes: {
    onChange: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof StepperInput>;

const Template: ComponentStory<typeof StepperInput> = (args) => <StepperInput {...args} />;

export const Default = Template.bind({});

export const MinAndMaxValue = Template.bind({});
MinAndMaxValue.args = {
  minValue: 0,
  maxValue: 10,
};

export const Step = Template.bind({});
Step.args = {
  step: 2,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const Title = Template.bind({});
Title.args = {
  title: 'Title',
};

export const InputProps = Template.bind({});
InputProps.args = {
  inputProps: {
    placeholder: 'Placeholder',
  },
};

export const WrapperProps = Template.bind({});
WrapperProps.args = {
  wrapperProps: {
    style: {
      width: '200px',
    },
  },
};

export const Locales = Template.bind({});
Locales.args = {
  minValue: 0,
  maxValue: 10,
  value: 11,
  locales: {
    notInRange: 'Custom message',
  },
};
