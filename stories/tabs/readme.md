### Usage

```js
import { TabContext, Tablist, Tab, BookmarkTab, Tabpanel } from '@panenco/ui';

const render = () => {
  return (
    <TabContext>
      <Tablist autoActivation>
        <Tab index={0} icon='settings' selected>
          Tab 1
        </Tab>
        <Tab index={1} icon='settings' disabled>
          Tab 2
        </Tab>
      </Tablist>
      <Tabpanel index={0}>Tab panel 1</Tabpanel>
      <Tabpanel index={1}>Tab panel 2</Tabpanel>
    </TabContext>
  );
};
```
