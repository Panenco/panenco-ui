# AutoComplete

## Usage

```js
...
import { AutoComplete } from '@panenco/ui';

const options = [
  { label: 'Chip', value: '1' },
  { label: 'Chip', value: '2' },
  { label: 'G1-Option 1', value: 'value_1' },
  { label: 'G1-option 2', value: 'value_2' },
  { label: 'G2-Option 1 ', value: 'value_3' },
  { label: 'G2-Option 2', value: 'value_4' },
  { label: 'G2-Option 3', value: 'value_5' },
];
const searchPlaceholder = 'Some custom disable option';

const render = () => {
  return (
    <AutoComplete
      options={options}
      searchPlaceholder={searchPlaceholder}
      title="Single Select"
      subTitle="Sub title"
    />
);
}
...
```

---

### Properties

This is **SelectInput** component from our library but with property **creatable** + a fem more.

- searchPlaceholder - disable first option;
- formatCreateLabel - gets the label for the "Add new .." option in the menu. Is given the current input value;
- ref - ref;

| propName          | propType                        | defaultValue                   | isRequired |
| ----------------- | ------------------------------- | ------------------------------ | ---------- |
| searchPlaceholder | string                          | 'Keep typing your search term' | -          |
| formatCreateLabel | (inputValue?: string) => string | 'No results found'             | -          |
| ref               | React.RefObject                 | -                              | -          |
