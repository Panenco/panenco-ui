# Text

### Usage

```js
import { Text } from '@panenco/ui';
import { useTheme } from 'styled-components';

const YourComponent = () => {
  const theme = useTheme();
  return (
    <Text size={theme.typography.sizes.xl} weight={theme.typography.weights.bold} color={theme.colors.base900}>
      Hello world
    </Text>
  );
};
```

<!-- STORY -->

### Properties

- `size` - font size ( you can using it like size={theme.size.s} from your own theme or just size="s" from default theme from ui)
- `weight` - font weight
- `color` - font color
- `children` - text content
- `component` - p, span or any custom component
- `ref` - reference to this component

| propName  | propType                                     | defaultValue | isRequired |
| --------- | -------------------------------------------- | ------------ | ---------- |
| size      | string                                       | s            | -          |
| weight    | string                                       | inherit      | -          |
| color     | string                                       | inherit      | -          |
| component | keyof React.ReactHTML or React.ComponentType | span         | -          |
| children  | node                                         | -            | +          |

### Sizes

| size | textSize | lineHeight |
| ---- | -------- | ---------- |
| xs   | 12       | 130 %      |
| s    | 14       | 130 %      |
| m    | 16       | 150 %      |
| l    | 20       | 140 %      |
| xl   | 32       | 125 %      |
| xxl  | 72       | 122 %      |
| h3   | 41       | 52 px      |
| h2   | 52       | 66 px      |
| h1   | 66       | 85 px      |

### Weights

| weight     | value |
| ---------- | ----- |
| thin       | 100   |
| extraLight | 200   |
| light      | 300   |
| regular    | 400   |
| medium     | 500   |
| semiBold   | 600   |
| bold       | 700   |
| extrabold  | 800   |
| black      | 900   |
