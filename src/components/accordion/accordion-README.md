# Accordion

### Usage

```js
...
import { AccordionPrimary, AccordionSecondary, AccordionGroup } from '@panenco/ui';
const render = () => {
  return (
      <AccordionPrimary title="Some title" isOpen>
         Content
      </AccordionPrimary>
  );
};

const renderGroup = () => {
  return (
    <AccordionGroup>
      <AccordionPrimary title="Title 1">
        Content here
      </AccordionPrimary>
      <AccordionPrimary title="Title 2">
        Content here
      </AccordionPrimary>
    </AccordionGroup>
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- title - title text
- isOpen - state of accordion

| propName | propType                        | defaultValue | isRequired |
| -------- | ------------------------------- | ------------ | ---------- |
| title    | string                          | Title        | -          |
| isOpen   | boolean                         | false        | -          |
| ref      | React.RefObject(HTMLDivElement) | -            | -          |
