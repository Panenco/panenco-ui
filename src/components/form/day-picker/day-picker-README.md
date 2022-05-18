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
        title="Day Picker"
        subTitle="Start date"
        value={value}
        onChange={handleChange}
        format="MM/dd/yyyy"
        placeholder="mm/dd/yy"
        position="bottom-end"
        isTimePicker
        isMobile
        error="error text"
        saveLabel="Save"
        defaultDay={new Date()}
        iconAfter={Icon.icons.calendar}
        timeTitle = "Time"
        dir="ltr"
        timeInputErrorText="Please, enter valid time"
        dayPickerProps={{
          disabled: [{ before: new Date()}, { after: new Date()}],
          locale: es,
        }}
        dateInputProps={{
          disabled: true,
        }}
    />
);
}
...
```
Also DayPicker is fully available on the keyboard. After opening the calendar we can
move forward with **tab-button**, back with **shift+tab-button**, **enter** to select the day, and to move by days **← → ↑ ↓ buttons**

- title - DayPicker title;
- subTitle - DayPicker subtitle;
- value - date of DayPicker, has the highest priority;
- onChange - change date handler;
- format - date format;
- placeholder - DayPicker input placeholder;
- isTimePicker - allow to show input for changing time;
- isMobile - allow to show mobile view of the component;
- position - allow to position calendar, can be: bottom-end, bottom-start, by default is bottom-start;
- error - text  of error;
- saveLabel - label for change time button;
- defaultDay - will be default date if **value** not passed;
- iconAfter - icon of the DayPicker input;
- dayPickerProps - allow to pass props to DayPicker component from 'react-day-picker' library;
- dateInputProps - props for date input; 
- wrapperProps - props of the whole DayPicker;
- timeInputProps - props for time input
- overlayComponentProps - allow to pass props to whole Calendar;
- timeTitle - title for time input;
- dir - direction, default is **ltr**, can be **rtl**
- timeInputErrorText - error label for time input error, default is 'Please, enter valid time'
