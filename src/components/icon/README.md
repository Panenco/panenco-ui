# Icon

### Usage

```js
...
import { Icon, icons } from '@panenco/ui';

const render = () => {
  return (
   <Icon icon="iconName" size="sm" />
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
- strokeWidth - set icon stroke-width
- size - 'sm' | 'md' | 'lg' (size has less priority then width and height)
- ref - ref

| propName    | propType              | defaultValue | isRequired |
| ----------- | --------------------- | ------------ | ---------- |
| icon        | keyof typeof icons.sm | 'eye'        | +          |
| disabled    | boolean               | -            | -          |
| width       | number(string)        | -            | -          |
| height      | number(string)        | -            | -          |
| strokeWidth | number(string)        | 1.33         | -          |
| size        | string                | 'md'         | -          |
| ref         | React.RefObject       | -            | -          |

### Sizes

| size | px  |
| ---- | --- |
| sm   | 16  |
| md   | 24  |
| lg   | 28  |

### Icon type

```js
export type IconType = React.ReactElement<unknown, string | React.JSXElementConstructor<any>>;
```

### Custom icons

Create separate component and re-export **Icon** component which extends your own icons pack.

```js
...

/* ./icons/sm */
import myCustomIconName from './myCustomIconName.svg';
export const smCustomIcons = { iconName: myCustomIconName };
/*  */


import { withIcons } from '@panenco/ui';

import smCustomIcons from './icons/sm';
import mdCustomIcons from './icons/md';
import lgCustomIcons from './icons/lg';

const newIcons = { sm: smCustomIcons, md: mdCustomIcons, lg: lgCustomIcons };

const Icon = withIcons<typeof newIcons>(newIcons)

// This way, your Icon will include all the PanencoUI defaultIcons and your own icons

export { Icon };
...
```
