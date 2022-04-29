# DateInput

### Usage

```js
import * as React from 'react';
import { DateInput } from '@panenco/ui';

const App = () => {
  const [value, setValue] = React.useState(new Date());
  const inputs = [
    {
      title: 'Day',
      type: 'date',
      format: 'dd',
      placeholder: '01',
    },
    {
      title: 'Month',
      type: 'month',
      format: 'MMM',
      placeholder: '12',
    },
    {
      title: 'Year',
      type: 'year',
      format: 'yyyy',
      placeholder: '2021',
    },
  ];


  return (
    <DateInput
      inputs={ inputs }
      onChange={ setValue }
      value={ value }
    />
  )
}
```

### Properties

This component inherits the attributes of the **input** element and extends it with the additional props.

&#42; - required

|Name        | Type                            | Default | Description   |
|------------|---------------------------------|---------|---------------|
|inputs*     | Array<InputProps>               |         | Inputs config  |
|onChange*   | func                            |         | Callback fired when the value changes|
|value*      | string &#124; Date &#124; number|         | The value of the input|
|divider     | string                          |         | Inputs divider |
|wrapperProps| object                          |         | The props used for wrapper component|
|inputProps  | object                          |         | The props used for input component|
|inputRef    | {current?: object}              |         | Pass a ref to the `input` element|
|minDate     | Date                            |         | Min valid date (strict equality) |
|maxDate     | Date                            |         | Max valid date (strict equality) |


