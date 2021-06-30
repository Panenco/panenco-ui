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
      subTitle="Subtitle"
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
- subTitle - subTitle;
- step - step;
- maxValue - maxValue;
- minValue - minValue;
- error - add this prop when smth went wrong;
- wrapperProps - it's props which will be added to wrapper component;
- inputProps - it's props which will be added to input component;
- ref - wrapper ref

| propName     | propType                                | defaultValue | isRequired |
| ------------ | --------------------------------------- | ------------ | ---------- |
| title        | string                                  | -            | -          |
| subTitle     | string                                  | -            | -          |
| step         | number                                  | -            | -          |
| minValue     | number                                  | -            | -          |
| maxValue     | number                                  | -            | -          |
| error        | string                                  | -            | -          |
| inputProps   | React.HTMLAttributes (HTMLInputElement) | -            | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement)   | -            | -          |
| ref          | React.RefObject                         | -            | -          |
