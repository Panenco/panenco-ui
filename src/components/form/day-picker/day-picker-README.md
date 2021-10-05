# DayPicker

## Usage

```js
...
import { DayPicker } from '@panenco/ui';

const render = () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {

    setValue(val);
  };



  return (
    <DayPicker
        subTitle="Start date"
        value={value}
        onChange={handleChange}
        format="MM/dd/yyyy"
        placeholder="mm/dd/yy"
    />
);
}
...
```
