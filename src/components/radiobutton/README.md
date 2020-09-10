# Radio

## Usage

```js
import { Radio } from '@panenco/ui';

return (
  <>
    <Radio label="Label 1" name="RadioGroup" value="1" />
    <Radio label="Label 2" name="RadioGroup" value="2" />
    <Radio label="Label 3" name="RadioGroup" value="3" />
    <Radio label="Label 4" name="RadioGroup" value="4" />
  </>
);
```

---

### Properties

This component inherits the attributes of the **input** element and extends the functionality with next properties.

- id - component id (generate unique id by default);
- label - component label;
- error - add this prop when smth went wrong;
- wrapperProps - it's props which will be added to wrapper component;
- inputProps - it's props which will be added to input component;
- wrapperProps - it's props which will be added to wrapper component;
- ref - wrapper ref

| propName     | propType                  | defaultValue      | isRequired |
| ------------ | ------------------------- | ----------------- | ---------- |
| error        | string                    | -                 | -          |
| label        | string                    | -                 | -          |
| id           | string or (any)           | generate uniqueID | -          |
| inputProps   | React.InputHTMLAttributes | -                 | -          |
| wrapperProps | React.LabelHTMLAttributes | -                 | -          |
| ref          | React.RefObject           | -                 | -          |
