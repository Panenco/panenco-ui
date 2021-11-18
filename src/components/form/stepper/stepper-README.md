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

- title - title;
- step - step;
- maxValue - maxValue;
- minValue - minValue;
- error - add this prop when smth went wrong;
- wrapperProps - it's props which will be added to wrapper component;
- inputProps - it's props which will be added to input component;
- locales - object that can take locale for notInRange message;
- ref - wrapper ref

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
