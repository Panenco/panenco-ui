# Table Pagination

## Usage

```js
...
import { PaginationSelect } from '@panenco/ui';

const options = [
  { label: '12', value: '12' },
  { label: '24', value: '24' },
  { label: '36', value: '36' },
  { label: '48', value: '48' },
]

const [page, setPage] = React.useState(0);
const [rowsPerPage, setRowsPerPage] = React.useState(12);

const handleChangePage = (option) => {
  setPage(Number(option.value));
};

const handleChangeRowsPerPage = (option) => {
  setRowsPerPage(Number(option.value));
  setPage(0);
};

const handleButtonClick = (val) => {
  // change current page here or go to other url
  setPage(val);
}

const render = () => {
  return (
    <PaginationSelect
      type="table"
      currentPage={page}
      onPageChange={handleChangePage}
      onPerPageChange={handleChangeRowsPerPage}
      onButtonClick={handleButtonClick}
      totalItems={201}
      perPage={rowsPerPage}
    />
);
}
...
```

---

### Properties

This component inherits the attributes of the **div** element and extends the functionality with next properties.

- boundaryCount - Number of always visible pages at the beginning and end.
- siblingCount - Number of always visible pages before and after the current page.
- currentPage - The current page.
- totalItems - Total items.
- perPage - Items per page.
- disabled - If **true**, the pagination component will be disabled.
- type - Pagination component type.
- options - array of options that populate the per page select menu.
- onPageChange - Callback fired when the page is changed.
- onPerPageChange - Callback fired when the items per page is changed.
- onButtonClick - Callback fired when page change button clicked.
- contentBeforeSelect - content berofe per page select.

| propName            | propType                         | defaultValue | isRequired |
| ------------------- | -------------------------------- | ------------ | ---------- |
| boundaryCount       | number                           | 1            | -          |
| siblingCount        | number                           | 1            | -          |
| currentPage         | number                           | 0            | +          |
| totalItems          | number                           | 150          | +          |
| perPage             | number                           | 12           | +          |
| disabled            | boolean                          | false        | -          |
| options             | {value: number, label: number}[] | options      | -          |
| type                | 'table' or 'list'                | 'list'       | -          |
| onPageChange        | func                             | -            | +          |
| onPerPageChange     | func                             | -            | +          |
| onButtonClick       | func                             | -            | +          |
| contentBeforeSelect | string                           | 'Show rows:' | -          |
