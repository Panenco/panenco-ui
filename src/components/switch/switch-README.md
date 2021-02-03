# Stamp

### Usage

```js
...
import React from 'react';
import { Switch, SwitchProps } from '@panenco/ui';

const render = () => {
  const [checked, setChecked] = React.useState(false);

  return (
    <Switch value={checked} onChange={() => setChecked(prevState => !prevState)} />
);
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **HTML** input element and extends the functionality with next properties.

| propName | propType         | defaultValue | isRequired |
| -------- | ---------------- | ------------ | ---------- |
| value    | bool             | false        | +          |
| height   | string or number | -            | -          |
| width    | string or number | -            | -          |
| size     | string or number | 48px         | -          |
