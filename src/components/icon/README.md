# Icon

### Usage

```js
...
import { Icon } from '@panenco/ui';

const render = () => {
  return (
   <Icon icon={Icon.icons.iconName} />
  );
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **svg** element and extends the functionality with next properties.

- icon - oneOf(Object.values(Icon.icons))
- disabled - set disabled state
- width - set icon width
- height - set icon height
- ref - ref

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| icon     | any             | -            | +          |
| disabled | boolean         | -            | -          |
| width    | number(string)  | 16           | -          |
| height   | number(string)  | 16           | -          |
| ref      | React.RefObject | -            | -          |

<!-- ### Sizes

| size    | px  |
| ------- | --- |
| default | 18  | -->
