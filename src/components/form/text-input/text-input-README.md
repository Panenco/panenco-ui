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

- title - title;
- subTitle - subTitle;
- error - add this prop when smth went wrong;
- iconBefore - it could be icon from Icon copmponent or some JSX.Eleement;
- iconAfter - the same as with iconBefore;
- wrapperProps - it's props which will be added to wrapper component;
- inputProps - it's props which will be added to input component;
- ref - wrapper ref

| propName     | propType                                | defaultValue | isRequired |
| ------------ | --------------------------------------- | ------------ | ---------- |
| title        | string                                  | -            | -          |
| subTitle     | string                                  | -            | -          |
| error        | string                                  | -            | -          |
| type         | string                                  | text         | -          |
| iconBefore   | HTMLObjectElement or JSX.Element        | -            | -          |
| iconAfter    | HTMLObjectElement or JSX.Element        | -            | -          |
| inputProps   | React.HTMLAttributes (HTMLInputElement) | -            | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement)   | -            | -          |
| ref          | React.RefObject                         | -            | -          |
