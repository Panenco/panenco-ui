# StepperInput

### Usage

```js
...
import { StepperInput } from '@panenco/ui';

const render  = () => {
  return (
    <StepperInput
      minValue={0}
      step={10}
      onChange={(v) => console.log(v)}
      value={12}
      title="Title"
      error="Error label"
    />
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **input** element and extends the functionality with next properties.

- title - Title text content;
- step - The step of the addition or subtraction;
- maxValue - The maximum value that can be displayed;
- minValue - The minimum value that can be displayed;
- error - The text that would be displayed in case an error occurred;
- wrapperProps - Attributes applied to the wrapper element;
- inputProps - Attributes applied to the input element;
- locales - An object that can take locale for notInRange message;
- ref - The wrapper ref

| propName     | propType                                | defaultValue                       | isRequired |
| ------------ | --------------------------------------- | ---------------------------------- | ---------- |
| title        | string                                  | -                                  | -          |
| step         | number                                  | -                                  | -          |
| locales      | object                                  | { notInRange: 'Must be in range' } | -          |
| minValue     | number                                  | -                                  | -          |
| maxValue     | number                                  | -                                  | -          |
| error        | string                                  | -                                  | -          |
| inputProps   | React.HTMLAttributes (HTMLInputElement) | -                                  | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement)   | -                                  | -          |
| ref          | React.RefObject                         | -                                  | -          |
