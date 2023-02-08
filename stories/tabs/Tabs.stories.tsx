import * as React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Tab, BookmarkTab, TabContext, Tablist, Tabpanel } from 'components';
import { BrowserRouter, NavLink, Route } from 'react-router-dom';
import docs from './readme.md';

export default {
  title: 'Components/Tabs',
  component: Tablist,
  parameters: {
    docs: {
      description: {
        component: docs,
      },
    },
    controls: { disabled: true },
  },
  subcomponents: {
    Tab,
    BookmarkTab,
  },
} as ComponentMeta<typeof Tablist>;

const Template: ComponentStory<typeof Tablist> = (args) => (
  <TabContext>
    <Tablist {...args}>
      <Tab index={0} icon='settings'>
        Tab 1
      </Tab>
      <Tab index={1} icon='settings'>
        Tab 2
      </Tab>
      <Tab index={2} icon='settings'>
        Tab 3
      </Tab>
    </Tablist>
    <Tabpanel index={0}>Tab panel 1</Tabpanel>
    <Tabpanel index={1}>Tab panel 2</Tabpanel>
    <Tabpanel index={2}>Tab panel 3</Tabpanel>
  </TabContext>
);

export const Default = Template.bind({});

export const AutoActivation = Template.bind({});
AutoActivation.args = {
  autoActivation: true,
};

const DisabledTabTemplate: ComponentStory<typeof Tablist> = (args) => (
  <TabContext>
    <Tablist {...args}>
      <Tab index={0} icon='settings'>
        Tab 1
      </Tab>
      <Tab index={1} icon='settings' disabled>
        Tab 2
      </Tab>
      <Tab index={2} icon='settings'>
        Tab 3
      </Tab>
    </Tablist>
    <Tabpanel index={0}>Tab panel 1</Tabpanel>
    <Tabpanel index={1}>Tab panel 2</Tabpanel>
    <Tabpanel index={2}>Tab panel 3</Tabpanel>
  </TabContext>
);

export const DisabledTab = DisabledTabTemplate.bind({});

const BookmarkTabsTemplate: ComponentStory<typeof Tablist> = (args) => (
  <TabContext>
    <Tablist {...args}>
      <BookmarkTab index={0} icon='settings'>
        Tab 1
      </BookmarkTab>
      <BookmarkTab index={1} icon='settings'>
        Tab 2
      </BookmarkTab>
      <BookmarkTab index={2} icon='settings'>
        Tab 3
      </BookmarkTab>
    </Tablist>
    <Tabpanel index={0}>Tab panel 1</Tabpanel>
    <Tabpanel index={1}>Tab panel 2</Tabpanel>
    <Tabpanel index={2}>Tab panel 3</Tabpanel>
  </TabContext>
);

export const BookmarkTabs = BookmarkTabsTemplate.bind({});

const NavLinkTabsTemplate: ComponentStory<typeof Tablist> = (args) => (
  <BrowserRouter>
    <Tablist {...args}>
      <Tab index={0} icon='settings' as={NavLink} to='/tab1'>
        Tab 1
      </Tab>
      <Tab index={1} icon='settings' as={NavLink} to='/tab2'>
        Tab 2
      </Tab>
      <Tab index={2} icon='settings' as={NavLink} to='/tab3'>
        Tab 3
      </Tab>
    </Tablist>
    <Route path='/tab1'>
      <div>Route 1</div>
    </Route>
    <Route path='/tab2'>
      <div>Route 2</div>
    </Route>
    <Route path='/tab3'>
      <div>Route 3</div>
    </Route>
  </BrowserRouter>
);

export const NavLinkTabs = NavLinkTabsTemplate.bind({});
