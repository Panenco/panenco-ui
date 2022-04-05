import React from 'react';
import { Row, Col, Tab, BookmarkTab, TabContext, Tablist, Tabpanel, Icon } from 'components';
import { BrowserRouter } from 'react-router-dom';

import TabsDocs from 'components/tabs/tabs-DOCS.md';
import TabsReadme from 'components/tabs/tabs-README.md';

import { decorator } from '../../utils/decorator';
import { WrappedComponent } from '../helpers/wrapped';

const tablistStyle = { justifyContent: 'flex-start' };
const tabPanelStyle = {
  padding: '22px',
  backgroundColor: '#FFFFFF',
  justifyContent: 'flex-start',
};

export default decorator('Tab', TabsDocs, TabsReadme).add('Tab component', () => {
  return (
    <WrappedComponent>
      <BrowserRouter>
        <Row
          style={{
            marginTop: '1rem',
          }}
        >
          <Col>
            <TabContext>
              <Tablist style={tablistStyle}>
                <Tab index={0} icon={Icon.icons.settings}>
                  Tab 1
                </Tab>
                <Tab index={1} icon={Icon.icons.settings}>
                  Tab 2
                </Tab>
                <Tab index={2} icon={Icon.icons.settings}>
                  Tab 3
                </Tab>
                <Tab index={3} icon={Icon.icons.settings}>
                  Tab 4
                </Tab>
              </Tablist>
              <Tabpanel index={0} style={tabPanelStyle}>
                Tab panel 1
              </Tabpanel>
              <Tabpanel index={1} style={tabPanelStyle}>
                Tab panel 2
              </Tabpanel>
              <Tabpanel index={2} style={tabPanelStyle}>
                Tab panel 3
              </Tabpanel>
              <Tabpanel index={3} style={tabPanelStyle}>
                Tab panel 4
              </Tabpanel>
            </TabContext>
          </Col>
        </Row>

        <Row
          style={{
            backgroundColor: '#ECEFF1',
            padding: '10px',
            marginTop: '20px',
          }}
        >
          <Col>
            <TabContext>
              <Tablist autoActivation style={tablistStyle}>
                <BookmarkTab index={0} icon={Icon.icons.settings}>
                  Tab 1
                </BookmarkTab>
                <BookmarkTab index={1} icon={Icon.icons.settings}>
                  Tab 2
                </BookmarkTab>
                <BookmarkTab index={2} icon={Icon.icons.settings} selected>
                  Tab 3
                </BookmarkTab>
                <BookmarkTab index={3} icon={Icon.icons.settings} disabled>
                  Tab 4
                </BookmarkTab>
              </Tablist>
              <Tabpanel index={0} style={tabPanelStyle}>
                Tab panel 1
              </Tabpanel>
              <Tabpanel index={1} style={tabPanelStyle}>
                Tab panel 2
              </Tabpanel>
              <Tabpanel index={2} style={tabPanelStyle}>
                Tab panel 3
              </Tabpanel>
              <Tabpanel index={3} style={tabPanelStyle}>
                Tab panel 4
              </Tabpanel>
            </TabContext>
          </Col>
        </Row>
      </BrowserRouter>
    </WrappedComponent>
  );
});
