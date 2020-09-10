# Select Input

## Usage

```js
...
import { SelectInput } from '@panenco/ui';

const options = [
  { label: 'Chip', value: '1' },
  { label: 'Chip', value: '2' },
  {
    label: 'Group 1',
    options: [
      { label: 'G1-Option 1', value: 'value_1' },
      { label: 'G1-option 2', value: 'value_2' },
    ],
  },
  {
    label: 'Group 2',
    options: [
      { label: 'G2-Option 1 ', value: 'value_3' },
      { label: 'G2-Option 2', value: 'value_4' },
      { label: 'G2-Option 3', value: 'value_5' },
    ],
  },
];


const render = () => {
  return (
    <SelectInput
      options={options}
      title="Multi Select"
      subTitle="Sub title"
      isMulti
      placeholder="Choose many options ..."
    />
);
}
...
```

---

### Properties

This component base on [**react-select**](https://react-select.com/home) library, wrapper inherits **props** from react-select interface and extends with selectWrapperProps object.

- placeholder - component placeholder;
- error - set state if has error;
- options - array of options that populate the select menu;
- isMulti - support multiple selected options;
- isDisabled - set disabled state;
- title - set component title;
- subTitle - set component subtitle;
- selectWrapperProps - object which should add if you want extends some functionality;
- onDeleteOption - function which will be called on click by chip's close icon (for multi select)
- filterOption - custom method to filter whether an option should be displayed in the menu (by default, filtration is performed by option label);
- ref - ref;

Else you can using Async, Creatable and AsyncCreatable Select with next props

- async - use Async Select;
- creatable - use Creatable Select;
- async + creatable - use AsyncCreatable Select;

| propName           | propType                                          | defaultValue | isRequired |
| ------------------ | ------------------------------------------------- | ------------ | ---------- |
| placeholder        | string                                            | Select...    | -          |
| error              | string                                            | -            | -          |
| title              | string                                            | -            | -          |
| subTitle           | string                                            | -            | -          |
| isDisabled         | boolean                                           | -            | -          |
| isMulti            | boolean                                           | -            | -          |
| async              | boolean                                           | -            | -          |
| creatable          | boolean                                           | -            | -          |
| selectWrapperProps | React.HTMLAttributes (HTMLDivElement)             | -            | -          |
| filterOption       | ({data, label, value}, string) => boolean or null | -            | -          |
| onDeleteOption     | function                                          | -            | -          |
| ref                | React.RefObject                                   | -            | -          |

It's a basic props what we using, you can look more complete documentation [**here**](https://react-select.com/home)
