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
- size - set icon width and height (size has less priority then width and height)
- ref - ref

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| icon     | any             | -            | +          |
| disabled | boolean         | -            | -          |
| width    | number(string)  | -            | -          |
| height   | number(string)  | -            | -          |
| size     | number(string)  | -            | -          |
| ref      | React.RefObject | -            | -          |

<!-- ### Sizes

| size    | px  |
| ------- | --- |
| default | 18  | -->

### Custom icons

Create separate component and re-export **Icon** component which extends your own icons pack.

```js
...
import { Icon } from '@panenco/ui';

import customIcon from './icons/customIcon.svg';

Icon.icons = {
  ...Icon.icons,
  customIcon,
};

export { Icon };
...
```
