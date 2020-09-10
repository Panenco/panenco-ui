# Stamp

### Usage

```js
...
import { Stamp } from '@panenco/ui';
import { colors } from 'styles/colors';

const render = () => {
  return (
    <Stamp color={colors.error}>Status</Stamp>
);
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- color - color text-content and border;
- ref - ref;

| propName | propType        | defaultValue   | isRequired |
| -------- | --------------- | -------------- | ---------- |
| color    | string          | colors.success | -          |
| ref      | React.RefObject | -              | -          |
