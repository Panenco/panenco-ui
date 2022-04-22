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
- background-color - color background and border (when variant === 'fulfilled');
- botder-radius;
- variant - the variant to use.
- ref - ref;

| propName        | propType                  | defaultValue   | isRequired |
| --------------- | ------------------------- | -------------- | ---------- |
| color           | string                    | colors.success | -          |
| backgroundColor | string                    | -              | -          |
| borderRadius    | number                    | 21             | -          |
| ref             | React.RefObject           | -              | -          |
| variant         | 'fulfilled' or 'outlined' | 'outlined'     | -          |
