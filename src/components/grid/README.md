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
      <Col s="1" m="3" l="4">{children}</Col>
      <Col s="1" m="3" l="4">{children}</Col>
      <Col s="2" m="3" l="4">{children}</Col>
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

- `s` - size of columns to 600px;
- `m` - size of columns to 960px;
- `l` - size of columns over 960px;

| propName | propType         | defaultValue | isRequired |
| -------- | ---------------- | ------------ | ---------- |
| s        | string or number | 1            | -          |
| m        | string or number | 1            | -          |
| l        | string or number | 1            | -          |
