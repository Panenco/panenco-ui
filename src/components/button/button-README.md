# Button

### Usage

```js
...
import { PrimaryButton, SecondaryButton, Button } from '@panenco/ui';

const render = () => {
  return (
    <>
      <PrimaryButton>Click PrimaryButton!</PrimaryButton>
      <SecondaryButton>Click secondary button!</SecondaryButton>
    </>
  );
};
...
```

<!-- STORY -->

### Properties

This component inherits the attributes of the **button** element and extends the functionality with next properties.

- component - component to be rendered it could be **button** or **Link** from 'react-router-dom';
- to - path to redirect (prop for **Link** component);
- icon - icon which will be rendered (default position right);
- iconLeft - set icon with left position;
- iconRight - set icon with right position;
- iconClassName - override styles for icon;
- ref - ref;

| propName      | propType          | defaultValue | isRequired |
| ------------- | ----------------- | ------------ | ---------- |
| component     | string            | -            | -          |
| to            | string            | -            | -          |
| icon          | HTMLObjectElement | -            | -          |
| iconClassName | string            | -            | -          |
| iconLeft      | ReactNode         | -            | -          |
| iconRight     | ReactNode         | -            | -          |
| ref           | React.RefObject   | -            | -          |
