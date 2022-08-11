# Icon

### Usage

```js
...
import { Icon, icons } from '@panenco/ui';

const render = () => {
  return (
   <Icon icon="iconName" size="sm"/>
  );
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **svg** element and extends the functionality with next properties.

- icon - oneOf(Object.keys(icons.sm))
- disabled - set disabled state
- width - set icon width
- height - set icon height
- size - 'sm' | 'md' | 'lg' (size has less priority then width and height)
- ref - ref

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| icon     | string          | -            | +          |
| disabled | boolean         | -            | -          |
| width    | number(string)  | -            | -          |
| height   | number(string)  | -            | -          |
| size     | string          | 'md'         | -          |
| ref      | React.RefObject | -            | -          |

### Sizes

| size | px  |
| ---- | --- |
| sm   | 16  |
| md   | 24  |
| lg   | 28  |

### Custom icons

Create separate component and re-export **Icon** component which extends your own icons pack.

```js
...

/* ./icons/sm */
import myCustomIconName from './myCustomIconName.svg';
export const smCustomIcons = {myCustomIconName};
/*  */


import { withIcon} from '@panenco/ui';

import smCustomIcons from './icons/sm';
import mdCustomIcons from './icons/md';
import lgCustomIcons from './icons/lg';

const newIcons={sm: smCustomIcons, md: mdCustomIcons, lg: lgCustomIcons};

const Icon = withIcon<typeof newIcons>(newIcons)

// This way, your Icon will include all the PanencoUI defaultIcons and your own icons

export { Icon };
...
```
