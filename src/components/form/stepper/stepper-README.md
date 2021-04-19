# Stepper

### Usage

```js
...
import { Stepper } from '@panenco/ui';

const render  = () => {
  return (
    <Stepper title="Title" />
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **input** element and extends the functionality with next properties.

- title - title;
- subTitle - subTitle;
- error - add this prop when smth went wrong;
- step - step;
- wrapperProps - it's props which will be added to wrapper component;
- ref - wrapper ref

| propName     | propType                              | defaultValue | isRequired |
| ------------ | ------------------------------------- | ------------ | ---------- |
| title        | string                                | -            | -          |
| subTitle     | string                                | -            | -          |
| step         | number                                | 1            | +          |
| error        | string                                | -            | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement) | -            | -          |
| ref          | React.RefObject                       | -            | -          |
