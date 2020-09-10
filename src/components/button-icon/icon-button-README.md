# Button Icon

### Usage

```js
...
import { ButtonIcon } from '@panenco/ui';

const render = () => {
  return (
    <>
      <ButtonIcon icon={Icon.icons.trash}>Button Icon</ButtonIcon>
      <ButtonIcon iconLeft icon={Icon.icons.lock}>Button Icon Left</ButtonIcon>
    </>
  )
}
...
```

### Properties

This component inherits the attributes of the **button** element and extends the functionality with next properties.

- icon - icon which will be rendered (default position top);
- iconClassName - override styles for icon;
- iconLeft - set icon position;
- ref - ref;

| propName      | propType          | defaultValue      | isRequired |
| ------------- | ----------------- | ----------------- | ---------- |
| icon          | HTMLObjectElement | Icon.icons.filter | +          |
| iconClassName | string            | -                 | -          |
| iconLeft      | string            | -                 | -          |
| ref           | React.RefObject   | -                 | -          |
