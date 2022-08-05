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
      <ButtonIcon icon={Icon.icons.signOut} component='link' to="">Button Icon Left</ButtonIcon>
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
- component - component to be rendered, it could be **button** or **Link** from 'react-router-dom';
- to - path to redirect (prop for **Link** component);
- size - icon size

| propName      | propType          | defaultValue | isRequired |
| ------------- | ----------------- | ------------ | ---------- |
| icon          | HTMLObjectElement | filter       | +          |
| iconClassName | string            | -            | -          |
| iconLeft      | string            | -            | -          |
| ref           | React.RefObject   | -            | -          |
| component     | string            | -            | -          |
| to            | string            | -            | -          |
| size          | number            | -            | -          |
