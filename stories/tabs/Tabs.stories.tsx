import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab, BookmarkTab } from 'components';
import docs from './readme.md';
import Tabs from './Tabs';

export default {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
    controls: { disabled: true },
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

export const Default = Template.bind({});

Default.args = {
  style: { padding: '10px' },
  tabComponent: Tab,
  tabs: [
    { index: 0, label: 'Tab 1', icon: 'settings' },
    { index: 1, label: 'Tab 2', icon: 'settings' },
    { index: 2, label: 'Tab 3', icon: 'settings' },
  ],
  tabpanels: [
    { index: 0, content: 'Tab panel 1' },
    { index: 1, content: 'Tab panel 2' },
    { index: 2, content: 'Tab panel 3' },
  ],
};

export const DisabledTab = Template.bind({});

DisabledTab.args = {
  style: { padding: '10px' },
  tabComponent: Tab,
  tabs: [
    { index: 0, label: 'Tab 1', icon: 'settings' },
    { index: 1, label: 'Tab 2', icon: 'settings' },
    { index: 2, label: 'Tab 3', icon: 'settings', disabled: true },
  ],
  tabpanels: [
    { index: 0, content: 'Tab panel 1' },
    { index: 1, content: 'Tab panel 2' },
    { index: 2, content: 'Tab panel 3' },
  ],
};

export const PreselectedTab = Template.bind({});

PreselectedTab.args = {
  style: { padding: '10px' },
  tabComponent: Tab,
  tabs: [
    { index: 0, label: 'Tab 1', icon: 'settings' },
    { index: 1, label: 'Tab 2', icon: 'settings' },
    { index: 2, label: 'Tab 3', icon: 'settings', selected: true },
  ],
  tabpanels: [
    { index: 0, content: 'Tab panel 1' },
    { index: 1, content: 'Tab panel 2' },
    { index: 2, content: 'Tab panel 3' },
  ],
};

export const BookmarkTabs = Template.bind({});

BookmarkTabs.args = {
  style: { padding: '10px', backgroundColor: '#ECEFF1' },
  tabComponent: BookmarkTab,
  tabs: [
    { index: 0, label: 'Tab 1' },
    { index: 1, label: 'Tab 2' },
    { index: 2, label: 'Tab 3' },
  ],
  tabpanels: [
    { index: 0, content: 'Tab panel 1' },
    { index: 1, content: 'Tab panel 2' },
    { index: 2, content: 'Tab panel 3' },
  ],
};

export const AutoActivation = Template.bind({});

AutoActivation.args = {
  style: { padding: '10px', backgroundColor: '#ECEFF1' },
  tabComponent: BookmarkTab,
  autoActivation: true,
  tabs: [
    { index: 0, label: 'Tab 1' },
    { index: 1, label: 'Tab 2' },
    { index: 2, label: 'Tab 3' },
  ],
  tabpanels: [
    { index: 0, content: 'Tab panel 1' },
    { index: 1, content: 'Tab panel 2' },
    { index: 2, content: 'Tab panel 3' },
  ],
};
