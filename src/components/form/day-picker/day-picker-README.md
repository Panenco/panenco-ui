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

### Properties

This component inherits the attributes of the **div** element + base on DayPickerInput component from [**react-day-picker**](https://react-day-picker.js.org/) library.

- format - date format;
- onChange - onChange handler;
- value - input value;
- error - input error;
- isTimePicker - it's prop defining type of DayPicker component (with or without time input);
- title - title of input;
- subTitle - subTitle of input;
- placeholder - placeholder of input;
- iconAfter - icon in the end of input;
- wrapperProps - it's props which will be added to wrapper component;
- inputProps - it's props which will be added to text input component;
- saveLabel - save button text;
- dayPickerProps - additional dayPickerProps;
- defaultDay - component default date;
- ref - wrapper ref;

| propName     | propType                                | defaultValue        | isRequired |
| ------------ | --------------------------------------- | ------------------- | ---------- |
| format       | string                                  | dd/MM/yyyy          | -          |
| isTimePicker | boolean                                 | false               | -          |
| placeholder  | string                                  | format              | -          |
| title        | string                                  | -                   | -          |
| subTitle     | string                                  | -                   | -          |
| error        | string                                  | -                   | -          |
| iconAfter    | HTMLObjectElement or JSX.Element        | Icon.icons.calendar | -          |
| subTitle     | string                                  | -                   | -          |
| saveLabel    | string                                  | Save                | -          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement)   | -                   | -          |
| inputProps   | React.HTMLAttributes (HTMLInputElement) | -                   | -          |
| defaultDay   | Date                                    | -                   | -          |
| ref          | React.RefObject                         | -                   | -          |
