# DateInput

### Usage

```js
import { DateInput } from '@panenco/ui';

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
    format: 'MM',
    placeholder: '12',
  },
  {
    title: 'Year',
    type: 'year',
    format: 'yyyy',
    placeholder: '2021',
  },
];

const render = () => {
  const [value, setValue] = React.useState(new Date());
  const handleChange = (val) => {
    setValue(val);
  };

  return <DateInput inputs={inputs} onChange={handleChange} />;
};
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- inputs - array of inputs;
- divider - text, wrapper in Text component, that will be the divider between inputs;
- wrapperProps - it's props which will be added to wrapper component;
- ref - wrapper ref;

| propName     | propType                              | defaultValue | isRequired |
| ------------ | ------------------------------------- | ------------ | ---------- |
| divider      | string                                | -            | +          |
| inputs       | InputProp[]                           | -            | +          |
| wrapperProps | React.HTMLAttributes (HTMLDivElement) | -            | -          |
| ref          | React.RefObject                       | -            | -          |

#### InputProp interface

```js
interface InputProp extends InputPropsType {
  type: string;
  format: string;
}
```
