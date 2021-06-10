# Grid

Grid uses dynamic column numbers and column size.
Margins and gutters is fixed and changes according to breakpoints (check design system)

### Usage

```js
...
import { Row, Col, GridContainer } from '@panenco/ui';

const render  = () => {
  return (
    <Row spacing={3}>
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

Row component inherits the attributes of the **div** element and extends the functionality with next properties.

- `spacing` - size of intervals between columns ( can be set from 1 to 12 and will be multiply by 8px);

| propName | propType                  | defaultValue             | isRequired | spacing size (max value in a prop) |
| -------- | ------------------------- | ------------------------ | ---------- | ---------------------------------- |
| spacing  | string or number or array | according to breakpoinst | -          | 12                                 |

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
| xs       | string or number | 12           | -          | 12                             |
| s        | string or number | xs           | -          | 12                             |
| m        | string or number | s            | -          | 12                             |
| ml       | string or number | m            | -          | 12                             |
| l        | string or number | ml           | -          | 12                             |
| xl       | string or number | l            | -          | 12                             |
