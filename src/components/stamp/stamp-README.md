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

- color - color background-color border-radius text-content and border;
- ref - ref;

| propName        | propType        | defaultValue   | isRequired |
| --------------- | --------------- | -------------- | ---------- |
| color           | string          | colors.success | -          |
| backgroundColor | string          | -              | -          |
| borderRadius    | number          | 21             | -          |
| ref             | React.RefObject | -              | -          |
