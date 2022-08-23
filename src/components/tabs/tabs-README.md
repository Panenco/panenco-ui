# Tabs

### Usage

```js
...
import { TabContext, Tablist, Tab, BookmarkTab, Tabpanel } from '@panenco/ui';

const render = () => {
  return (
   <TabContext>
    <Tablist autoActivation>
      <Tab index={0} icon="settings" selected>Tab 1</Tab>
      <Tab index={1} icon="settings" disabled>Tab 2</Tab>
    </Tablist>
    <Tabpanel index={0}>Tab panel 1</Tabpanel>
    <Tabpanel index={1}>Tab panel 2</Tabpanel>
  </TabContext>
  );
}
...
```

<!-- STORY -->

### Properties

**Tab / BookmarkTab** component inherits the attributes of the **button** element and extends the functionality with next properties.

- index - index of the tab within the tablist. It is used to link the tab to the tab panel it controls;
- ref - ref (if you used to innerRef before you can use it further);
- icon - icon to be rendered to the left from the tab label;
- iconClassName - override styles for icon;

| propName      | propType                                                               | defaultValue | isRequired |
| ------------- | ---------------------------------------------------------------------- | ------------ | ---------- |
| index         | number                                                                 | -            | true       |
| ref           | React.RefObject                                                        | -            | -          |
| icon          | [IconType](?path=/story/icon--icon-component) \| keyof typeof icons.sm | -            | -          |
| iconClassName | string                                                                 | -            | -          |

**Tablist** component is a wrapper for Tabs. It nherits the attributes of the **div** element and adds the properties as follows:

- ref - ref (if you used to innerRef before you can use it further);
- autoActivation - indicates that the tabs will be automatically activated on focus;

| propName       | propType        | defaultValue | isRequired |
| -------------- | --------------- | ------------ | ---------- |
| ref            | React.RefObject | -            | -          |
| autoActivation | boolean         | -            | -          |

**Tabpanel** inherits the **div** element's attributes and adds the properties as follows:

- index - index of the corresponding tab;
- ref - ref (if you used to innerRef before you can use it further);

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| index    | number          | -            | true       |
| ref      | React.RefObject | -            | -          |
