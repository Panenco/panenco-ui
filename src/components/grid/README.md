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
      <Col xs="1" sm="2" lg="4" >{children}</Col>
      <Col xs="2" sm="2" lg="4" >{children}</Col>
      <Col xs="1" sm="4" lg="4" >{children}</Col>
    </Row>
  )
}
...
```

<!-- STORY -->

### Row Properties

Row component inherits the attributes of the **div** element and extends the functionality with next properties.

- `spacing` - size of intervals between columns ( can be set from 1 to 12 and will be multiply by 8px);

`spacing` can be set using single number, single string, string with two values separated `,` and by array. First values is `x-axis` interval, second is `y-axis` interval.

spacing css class (example: `spacing-auto-3-3`) consist of starting breakpoint, `x-axis` multiplier and `y-axis` multiplier.

| propName | propType                  | defaultValue            | isRequired | spacing size (max value in a prop) |
| -------- | ------------------------- | ----------------------- | ---------- | ---------------------------------- |
| spacing  | string or number or array | according to breakpoint | -          | 12                                 |

### Column Properties

Col component inherits the attributes of the **div** element and extends the functionality with next properties.

- `xs` - size of columns to 600px;
- `sm` - size of columns to 840px;
- `md` - size of columns to 1332px;
- `lg` - size of columns over 1332px;

| propName | propType         | defaultValue             | isRequired |
| -------- | ---------------- | ------------------------ | ---------- |
| auto     | -                | equal free space / cells | -          |
| xs       | string or number | -                        | -          |
| sm       | string or number | -                        | -          |
| md       | string or number | -                        | -          |
| lg       | string or number | -                        | -          |
