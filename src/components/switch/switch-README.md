# Stamp

### Usage

```js
...
import React from 'react';
import { Switcher, SwitcherProps } from '@panenco/ui';

const render = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Switcher checked={checked} setChecked={() => setChecked(prevState => !prevState)} />
);
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **HTML** element and extends the functionality with next properties.

- checked - set value to true or false;
- setChecked - function which will be set new value for checked property;
- ref - ref

| propName   | propType        | defaultValue | isRequired |
| ---------- | --------------- | ------------ | ---------- |
| checked    | bool            | -            | +          |
| setChecked | React.RefObject | -            | +          |
