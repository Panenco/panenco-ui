import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextArea } from 'components/form/text-area';

export default {
  title: 'Example/Form/TextArea',
  component: TextArea,
  args: {
    placeholder: 'Placeholder',
    title: 'Title',
    subTitle: 'Subtitle',
  },
} as ComponentMeta<typeof TextArea>;

const Template: ComponentStory<typeof TextArea> = (args) => <TextArea {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const MaxLengthAndCounter = Template.bind({});
MaxLengthAndCounter.args = {
  title: 'Title',
  maxLength: 10,
  counter: true,
};
MaxLengthAndCounter.decorators = [(Story) => <div style={{ marginBottom: '30px' }}>{Story()}</div>];
