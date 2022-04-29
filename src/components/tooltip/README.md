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
- position - position of the tooltip (top, right, left, bottom, top-start, top-end, bottom-start, bottom-end, right-start, right-end, left-start, left-end, auto, auto-start, auto-end);
- ref - ref;
- backgroundColor - background color of the tooltip;
- height - height of the tooltip;
- width - width of the tooltip;

| propName        | propType         | defaultValue | isRequired |
| --------        | ---------------  | ------------ | ---------- |
| children        | React.ReactNode  | \_           | +          |
| ref             | React.RefObject  | -            | -          |
| content         | React.ReactNode  | -            | +          |
| delay           | number           | 400          | \_         |
| position        | string           | top          | \_         |
| backgroundColor | string           | -            | -          |
| height          | string or number | -            | -          |
| width           | string or number | -            | -          |
