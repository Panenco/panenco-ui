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

- title - Title text content;
- subTitle - Subtitle text content;
- error - The text that would be displayed in case an error occurred;
- wrapperProps - Attributes applied to the wrapper element;
- inputProps - Attributes applied to the input element;
- ref - The wrapper ref

| propName     | propType                              | defaultValue | isRequired |
| ------------ | ------------------------------------- | ------------ | ---------- |
| title        | string                                | -            | -          |
| subTitle     | string                                | -            | -          |
| error        | string                                | -            | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement) | -            | -          |
| inputProps   | React.InputHTMLAttributes             | -            | -          |
| ref          | React.RefObject                       | -            | -          |
