import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Pagination } from 'components/pagination';

export default {
  title: 'Example/Pagination/Pagination',
  component: Pagination,
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

export const Default = Template.bind({});
