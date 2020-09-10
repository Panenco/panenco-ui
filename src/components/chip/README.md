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
- ref - ref;

| propName      | propType          | defaultValue | isRequired |
| ------------- | ----------------- | ------------ | ---------- |
| checked       | boolean           | -            | -          |
| onIconClick   | React.MouseEvent  | -            | -          |
| icon          | HTMLObjectElement | -            | -          |
| iconClassName | string            | -            | -          |
| iconClassName | string (number)   | -            | -          |
| ref           | React.RefObject   | -            | -          |
