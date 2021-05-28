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

- component - component will be rendered it can be **Link** or JSX.Element/React.ReactElement
- to - path to redirect (prop for **Link** component);
- icon - icon which will be rendered (default position right);
- iconLeft - set icon with left position;
- iconRight - set icon with right position;
- iconClassName - override styles for icon;
- ref - ref;

| propName      | propType                                    | defaultValue | isRequired |
| ------------- | ------------------------------------------- | ------------ | ---------- |
| component     | 'link' or JSX.Element or React.ReactElement | -            | -          |
| to            | string                                      | -            | -          |
| icon          | HTMLObjectElement                           | -            | -          |
| iconClassName | string                                      | -            | -          |
| iconLeft      | ReactNode                                   | -            | -          |
| iconRight     | ReactNode                                   | -            | -          |
| ref           | React.RefObject                             | -            | -          |
