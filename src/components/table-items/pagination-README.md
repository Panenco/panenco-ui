# Pagination

### Usage

```js
import { PaginationSelect } from '@panenco/ui';
<Row>
  <Col s="12">
    <PaginationSelect
      totalItems={1321}
      from={1}
      to={10}
      formatUrl={() => {
        return '/';
      }}
    />
  </Col>
</Row>;
```
