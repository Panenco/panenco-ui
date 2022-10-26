import * as React from 'react';
import { TabContext, Tablist, Tabpanel } from 'components';
import { WrappedComponent } from '../helpers/wrapped';

const tablistStyle = { justifyContent: 'flex-start' };

const tabPanelStyle = {
  padding: '22px',
  backgroundColor: '#FFFFFF',
  justifyContent: 'flex-start',
};

const Tabs = ({ tabs, tabpanels, style, autoActivation, tabComponent }) => {
  return (
    <WrappedComponent style={style}>
      <TabContext>
        <Tablist style={tablistStyle} autoActivation={autoActivation}>
          {tabs.map((tab) => {
            const { index, label, icon, selected, disabled } = tab;
            return React.createElement(tabComponent, { index, icon, selected, disabled }, label);
          })}
        </Tablist>
        {tabpanels.map((panel) => (
          <Tabpanel key={panel.index} index={panel.index} style={tabPanelStyle}>
            {panel.content}
          </Tabpanel>
        ))}
      </TabContext>
    </WrappedComponent>
  );
};

export default Tabs;
