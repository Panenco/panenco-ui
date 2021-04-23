# Grid

Grid uses dynamic column numbers and column size.
Margins and gutters is fixed and changes according to breakpoints (check design system)

### Usage

```js
...
import { Row, Col, GridContainer } from '@panenco/ui';

const render  = () => {
  return (
    <Row>
      <Col s="1" m="2" l="4" xl="4" >{children}</Col>
      <Col s="2" m="2" l="4" xl="4" >{children}</Col>
      <Col s="1" m="4" l="4" xl="4" >{children}</Col>
    </Row>
  )
}
...
```

<!-- STORY -->

### Row Properties

Row component inherits the attributes of the **div** element.

### Column Properties

Col component inherits the attributes of the **div** element and extends the functionality with next properties.

- `xs` - size of columns to 600px;
- `s` - size of columns to 720px;
- `m` - size of columns to 840px;
- `ml` - size of columns to 960px;
- `l` - size of columns to 1328px;
- `xl` - size of columns over 1328px;

| propName | propType         | defaultValue | isRequired | row size (maxColumns in a row) |
| -------- | ---------------- | ------------ | ---------- | ------------------------------ |
| xs       | string or number | 4            | -          | 4                              |
| s        | string or number | 8            | -          | 8                              |
| m        | string or number | 8            | -          | 8                              |
| ml       | string or number | 12           | -          | 12                             |
| l        | string or number | 12           | -          | 12                             |
| xl       | string or number | 12           | -          | 12                             |
