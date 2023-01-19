import * as React from 'react';
import { TabContext, Tablist, Tabpanel } from 'components';

const Tabs = ({ tabs, tabpanels, autoActivation, tabComponent }) => {
  return (
    <TabContext>
      <Tablist autoActivation={autoActivation}>
        {tabs.map((tab) => {
          const { index, label, icon, selected, disabled } = tab;
          return React.createElement(tabComponent, { index, icon, selected, disabled }, label);
        })}
      </Tablist>
      {tabpanels.map((panel) => (
        <Tabpanel key={panel.index} index={panel.index}>
          {panel.content}
        </Tabpanel>
      ))}
    </TabContext>
  );
};

export default Tabs;
