import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Dropzone } from 'components/dropzone';
import docs from './readme.md';

export default {
  title: 'Components/Dropzone (deprecated)',
  component: Dropzone,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
  },
} as ComponentMeta<typeof Dropzone>;

const Template: ComponentStory<typeof Dropzone> = (args) => <Dropzone {...args} />;

export const Default = Template.bind({});

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const Error = Template.bind({});
Error.args = {
  error: 'Error message',
};

export const CustomIcon = Template.bind({});
CustomIcon.args = {
  icon: 'file',
};

export const CustomLoader = Template.bind({});
CustomLoader.args = {
  loader: <div>Custom loader</div>,
  loading: true,
};

export const CustomTextContent = Template.bind({});
CustomTextContent.args = {
  textContent: 'Custom text content',
};

export const CustomTextContentOnDrag = Template.bind({});
CustomTextContentOnDrag.args = {
  textContentOnDrag: 'Custom text content on drag',
};

export const CustomOptions = Template.bind({});
CustomOptions.args = {
  options: {
    accept: 'image/*',
  },
};

export const CustomChildren = Template.bind({});
CustomChildren.args = {
  children: <div>Custom children</div>,
};
