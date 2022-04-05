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

    //Formik usage
    <Formik
      initialValues={ {date: new Date()} }
      onSubmit={(values) => console.log(values)}
    >
      {(props) => (
        <Form>
          <Field
            component={DayPicker}
            isTimePicker
            name="date"
            onChange={e => props.setFieldValue(‘date’, e)}
            value={props.values.date}
            format="MM/dd/yyyy HH:mm"
            placeholder="mm/dd/yy 00:00"
            isMobile
            position="bottom-end"
          />
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
);
}
...
```
Also DayPicker is fully available on the keyboard. After opening the calendar we can
move forward with **tab-button**, back with **shift+tab-button**, **enter** to select the day, and to move by days **← → ↑ ↓ buttons**
- isMobile - allow to show mobile view of the component;
- position - allow to position calendar, can be: bottom-end, bottom-start, by default is bottom-start;