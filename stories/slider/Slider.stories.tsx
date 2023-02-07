import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Slider } from 'components/slider';

export default {
  title: 'Components/Slider (deprecated)',
  component: Slider,
  argTypes: {
    domain: {
      control: {
        disable: true,
      },
    },
    startValues: {
      control: {
        disable: true,
      },
    },
    innerRef: {
      control: {
        disable: true,
      },
    },
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => <Slider {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Step = Template.bind({});
Step.args = {
  step: 10,
};

export const FormatValue = Template.bind({});
FormatValue.args = {
  formatValue: (value: any): any => `${value} Example`,
};

export const TwoHandles = Template.bind({});
TwoHandles.args = {
  startValues: [0, 15],
};

export const CustomDomain = Template.bind({});
CustomDomain.args = {
  domain: [-100, 100],
};
