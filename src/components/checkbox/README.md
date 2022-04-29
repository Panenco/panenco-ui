# Checkbox

### Usage

```js
...
import { Checkbox } from '@panenco/ui';

const render  = () => {
  const [isChecked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!isChecked);
  }

  return (
    <Checkbox label="Checkbox" checked={isChecked} onClick={handleClick} />
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **input** element and extends the functionality with next properties.

- id - component id (generate unique id by default);
- label - component label;
- error - an error message that would be displayed under the checkbox
- inputProps - props which will be added to input component;
- wrapperProps - props which will be added to wrapper component;
- color - background color;
- borderWidth - input element border width in px;
- labelClassName - class which will be added to label content;
- ref - ref;

| propName       | propType                  | defaultValue      | isRequired |
| -------------- | ------------------------- | ----------------- | ---------- |
| id             | string or (any)           | generate uniqueID | -          |
| label          | string                    | -                 | -          |
| error          | string                    | -                 | -          |
| color          | string                    | -                 | -          |
| borderWidth    | string (number)           | -                 | -          |
| inputProps     | React.InputHTMLAttributes | -                 | -          |
| wrapperProps   | React.LabelHTMLAttributes | -                 | -          |
| ref            | React.RefObject           | -                 | -          |
| labelClassName | string                    | -                 | -          |
