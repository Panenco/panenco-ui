# Slider

## Usage

```js
...
import { Slider } from '@panenco/ui';

const render = () => {
  return (
    <Slider startValues={[0, 20]} domain={[0, 100]} step={5} />
);
}
...
```

---

### Properties

This component inherits the attributes of the **div** element + base on [**react-compound-slider**](https://react-compound-slider.netlify.app/docs) library and extends the functionality with next properties.

- domain - Two element array of numbers providing the min and max values for the slider [min, max] e.g. [0, 100]. It does not matter if the slider is reversed on the screen, domain is always [min, max] with min < max.;
- startValues: it's a start value on rail, e.g. [0] or with 2 handles [0, 15];
- formatValue: modifing value in handles, e.g. formatValue={val => '\${val} Example'}
- disabled - set disabled state;
- step - step for sliders handles;
- sliderProps- props from **react-compound-slider** library;
- ref - ref;

| propName    | propType                      | defaultValue                | isRequired |
| ----------- | ----------------------------- | --------------------------- | ---------- |
| domain      | number[]                      | [0, 100]                    | -          |
| startValues | number[]                      | [0]                         | -          |
| formatValue | (value: any) => string or any | (value: any): any => value, | -          |
| startValues | number                        | 1                           | -          |
| ref         | React.RefObject               | -                           | -          |
