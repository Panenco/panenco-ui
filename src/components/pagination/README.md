# Pagination

## Usage

```js
...
import { PaginationSelect } from '@panenco/ui';

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(12);

const handleButtonClick = (val) => {
  // change current page here or go to other url
  setPage(val);
}

const render = () => {
  return (
    <PaginationSelect
      type="list"
      variant="text"
      onButtonClick={handleButtonClick}
      showFirstButton
      showLastButton
      totalItems={201}
      perPage={rowsPerPage}
      currentPage={page}
    />
);
}
...
```

---

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- boundaryCount - Number of always visible pages at the beginning and end.
- hideNextButton - If **true**, hide the next-page button.
- hidePrevButton - If **true**, hide the previous-page button.
- showFirstButton - If **true**, show the first-page button.
- showLastButton - If **true**, show the last-page button.
- siblingCount - Number of always visible pages before and after the current page.
- currentPage - The current page.
- totalItems - Total items.
- perPage - Items per page.
- disabled - If **true**, the pagination component will be disabled.
- type - Pagination component type.
- variant - The variant to use.
- onButtonClick - Callback fired when page change button clicked.

| propName        | propType                            | defaultValue | isRequired |
| --------------- | ----------------------------------- | ------------ | ---------- |
| boundaryCount   | number                              | 1            | -          |
| hideNextButton  | boolean                             | false        | -          |
| hidePrevButton  | boolean                             | false        | -          |
| showFirstButton | boolean                             | false        | -          |
| showLastButton  | boolean                             | false        | -          |
| siblingCount    | number                              | 1            | -          |
| currentPage     | number                              | 0            | +          |
| totalItems      | number                              | 150          | +          |
| perPage         | number                              | 12           | +          |
| disabled        | boolean                             | false        | -          |
| type            | 'table' or 'list'                   | 'list'       | -          |
| variant         | 'contained' or 'outlined' or 'text' | 'contained'  | -          |
| onButtonClick   | func                                | -            | +          |
