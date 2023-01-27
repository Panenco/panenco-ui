import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextInput } from 'components/form/text-input';
import { icons } from 'components';

export default {
  title: 'Example/Form/TextInput',
  component: TextInput,
  args: {
    title: 'Title',
    subTitle: 'Subtitle',
    placeholder: 'Placeholder',
  },
  argTypes: {
    iconBefore: {
      control: {
        type: 'select',
        options: Object.keys(icons.sm),
      },
    },
    iconAfter: {
      control: {
        type: 'select',
        options: Object.keys(icons.sm),
      },
    },
  },
} as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error',
};

export const IconBefore = Template.bind({});
IconBefore.args = {
  iconBefore: 'search',
};

export const IconAfter = Template.bind({});
IconAfter.args = {
  iconAfter: 'search',
};

export const RightSubTitle = Template.bind({});
RightSubTitle.args = {
  rightSubTitle: <div>Right Subtitle</div>,
};

export const MaxLength = Template.bind({});
MaxLength.args = {
  maxLength: 10,
};
MaxLength.decorators = [(Story) => <div style={{ marginBottom: '30px' }}>{Story()}</div>];
