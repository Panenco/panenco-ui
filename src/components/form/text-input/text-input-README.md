# TextInput

### Usage

```js
...
import { TextInput } from '@panenco/ui';

const render  = () => {
  return (
    <TextInput placeholder="Icon before" iconBefore={Icon.icons.mapPin} />
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **input** element and extends the functionality with next properties.

- title - Title text content;
- subTitle - Subtitle text content;
- rightSubTitle - React element that would be displayed in the top right corner of the input
- error - The text that would be displayed in case an error occurred;
- iconBefore - Icon component to be render at the beginning of the input;
- iconAfter - The same as iconBefore. The only difference is that the element would be displayed at the end of the input;
- wrapperProps - Attributes applied to the wrapper element;
- inputProps - Attributes applied to the input element;
- ref - The wrapper ref

| propName      | propType                                                                | defaultValue | isRequired |
| ------------- | ----------------------------------------------------------------------- | ------------ | ---------- |
| title         | string                                                                  | -            | -          |
| subtitle      | string                                                                  | -            | -          |
| rightSubtitle | ReactElement                                                            | -            | -          |
| error         | string                                                                  | -            | -          |
| type          | string                                                                  | text         | -          |
| iconBefore    | [IconType](/?path=/story/icon--icon-component) \| keyof typeof icons.sm | -            | -          |
| iconAfter     | [IconType](/?path=/story/icon--icon-component) \| keyof typeof icons.sm | -            | -          |
| inputProps    | React.HTMLAttributes (HTMLInputElement)                                 | -            | -          |
| wrapperProps  | React.HTMLAttributes (HTMLDivElement)                                   | -            | -          |
| ref           | React.RefObject                                                         | -            | -          |
