# Chip

### Usage

```js
...
import { Chip } from '@panenco/ui';

const render  = () => {
  const [isChecked, setChecked] = React.useState(false);
  const handleClick = () => {
    setChecked(!isChecked);
  }

  return (
    <Chip checked={isChecked} onClick={handleClick} >
      Chip
    </Chip>
  )
}
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **button** element and extends the functionality with next properties.

- checked - set checked flag for chip;
- icon - icon which will be rendered;
- onIconClick - event for icon element;
- iconClassName - override icon styles;
- iconSize - icon size in px;
- textSize - text size(by default **typography.s** from your theme);
- textWeight - text weight;
- textTypography - object with 2 properties (weight and size);
- ref - ref;

| propName       | propType                                                      | defaultValue                                   | isRequired |
| -------------- | ------------------------------------------------------------- | ---------------------------------------------- | ---------- |
| checked        | boolean                                                       | -                                              | -          |
| onIconClick    | React.MouseEvent                                              | -                                              | -          |
| icon           | HTMLObjectElement                                             | -                                              | -          |
| iconClassName  | string                                                        | -                                              | -          |
| textSize       | {textSize: string, lineHeight: size}                          | theme.typography.sizes.s                       | -          |
| textWeight     | string                                                        | bold (for checked) and regular (for unchecked) | -          |
| textTypography | {size: {textSize: string, lineHeight: size} , weight: string} | -                                              | -          |
| iconClassName  | string (number)                                               | -                                              | -          |
| ref            | React.RefObject                                               | -                                              | -          |
