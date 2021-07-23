# TrapFocus

### How it works

TrapFocus is a component that manages focus for its descendants. This is useful when implementing overlays such as modal dialogs, which should not allow the focus to escape while active.

When `active={true}` the trap is enabled, and pressing `Tab` or `Shift+Tab` will rotate focus within the inner focusable elements of the component.

Only one TrapFocus at a time is supported.

### Usage

```js
import { TrapFocus } from '@panenco/ui';

const YourComponent = () => {
  return (
    <>
      <TrapFocus active>
        ...
      </TrapFocus>
    </>
  );
});
```

<!-- STORY -->

### Properties

| propName | propType        | defaultValue | isRequired |
| -------- | --------------- | ------------ | ---------- |
| children | React.ReactNode | -            | -          |
| active   | boolean         | -            | -          |
