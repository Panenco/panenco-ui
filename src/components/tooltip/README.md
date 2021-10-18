# Tooltip

### Usage

```js
...
import { Tooltip } from '@panenco/ui';

const render  = () => {

  return (
    <Tooltip content="Tooltip message will show up here" position="bottom">
      <button>Button</button>
    </Tooltip>
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- content - content of the tooltip;
- children - children;
- delay - delay displaying tooltip;
- position - position of the tooltip (top, right, left, bottom);
- ref - ref;

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| children | React.ReactNode | \_           | +          |
| ref      | React.RefObject | -            | -          |
| content  | React.ReactNode | -            | +          |
| delay    | number          | 400          | \_         |
| position | string          | top          | \_         |
