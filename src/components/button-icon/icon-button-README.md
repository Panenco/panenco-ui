# Button Icon

### Usage

```js
...
import { ButtonIcon } from '@panenco/ui';

const render = () => {
  return (
    <>
      <ButtonIcon icon="eye">Button Icon</ButtonIcon>
      <ButtonIcon iconLeft icon="lock">Button Icon Left</ButtonIcon>
      <ButtonIcon icon="signOut" component='link' to="">Button Icon Left</ButtonIcon>
    </>
  )
}
...
```

### Properties

This component inherits the attributes of the **button** element and extends the functionality with next properties.

- icon - icon to be rendered;
- iconClassName - override styles for icon;
- iconLeft - set icon position;
- ref - ref;
- component - component to be rendered, it could be **button** or **Link** from 'react-router-dom';
- to - path to redirect (prop for **Link** component);
- size - icon size

| propName      | propType                                                                | defaultValue | isRequired |
| ------------- | ----------------------------------------------------------------------- | ------------ | ---------- |
| icon          | [IconType](/?path=/story/icon--icon-component) \| keyof typeof icons.sm | eye          | +          |
| iconClassName | string                                                                  | -            | -          |
| iconLeft      | string                                                                  | -            | -          |
| ref           | React.RefObject                                                         | -            | -          |
| component     | string                                                                  | -            | -          |
| to            | string                                                                  | -            | -          |
| size          | number                                                                  | -            | -          |
