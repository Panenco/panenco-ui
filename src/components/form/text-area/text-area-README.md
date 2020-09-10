# TextArea

### Usage

```js
...
import { TextArea } from '@panenco/ui';

const render  = () => {
  return (
    <TextArea title="Title" subTitle="Subtitle" placeholder="Placeholder" maxLength="10" />
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **text-area** element and extends the functionality with next properties.

- title - title;
- subTitle - subTitle;
- error - add this prop when smth went wrong;
- wrapperProps - it's props which will be added to wrapper component;
- inputProps - it's props which will be added to input component;
- ref - wrapper ref

| propName     | propType                              | defaultValue | isRequired |
| ------------ | ------------------------------------- | ------------ | ---------- |
| title        | string                                | -            | -          |
| subTitle     | string                                | -            | -          |
| error        | string                                | -            | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement) | -            | -          |
| inputProps   | React.InputHTMLAttributes             | -            | -          |
| ref          | React.RefObject                       | -            | -          |
