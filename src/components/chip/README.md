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
- icon - icon which will be rendered when checked;
- uncheckedIcon - icon which will be rendered when unchecked;
- onIconClick - event for icon element;
- disabled - is disabled
- ref - ref;

| propName      | propType                 | defaultValue       | isRequired |
| ------------- | ------------------------ | ------------------ | ---------- |
| checked       | boolean                  | -                  | -          |
| onIconClick   | React.MouseEvent => void | -                  | -          |
| icon          | HTMLObjectElement        | Icon.icons.checked | -          |
| uncheckedIcon | HTMLObjectElement        | -                  | -          |
| ref           | React.RefObject          | -                  | -          |
