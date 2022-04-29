# Wizard Track

### Usage

```js
import { WizardTrack } from '@panenco/ui';

const steps = [
  {
    title: 'General info',
    stepIndex: 0,
  },
  {
    title: 'Data sources',
    stepIndex: 1,
  },
  {
    title: 'Results',
    stepIndex: 2,
  },
];

const YourComponent = () => {
  return (
    <>
      <WizardTrack stepsMeta={steps} currentStepIndex={0} />
    </>
  );
});
```

<!-- STORY -->

### Properties

- currentStepIndex - current step index;
- stepsMeta - array of steps.

| propName         | propType                             | defaultValue | isRequired |
| ---------------- | ------------------------------------ | ------------ | ---------- |
| currentStepIndex | number or string                     | 0            | -          |
| stepsMeta        | {title: string; stepIndex: number}[] | -            | +          |
