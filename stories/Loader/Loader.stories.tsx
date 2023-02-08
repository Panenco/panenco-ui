import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { colors } from 'styles';
import { Loader } from 'components/loader';

export default {
  title: 'Components/Loader',
  component: Loader,
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const Default = Template.bind({});
Default.args = {};

export const Color = Template.bind({});
Color.args = {
  color: colors.success,
};
