# Table Pagination

## Usage

```js
...
import { TablePagination } from '@panenco/ui';

const rowsPerPageOptions = [
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
    <TablePagination
      page={page}
      onChangePage={handleChangePage}
      onChangeRowsPerPage={handleChangeRowsPerPage}
      onButtonClick={handleButtonClick}
      count={201}
      rowsPerPage={rowsPerPage}
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
- page - The current page.
- count - Total items.
- rowsPerPage - Items per page.
- disabled - If **true**, the pagination component will be disabled.
- rowsPerPageOptions - array of options that populate the per page select menu.
- onChangePage - Callback fired when the page is changed.
- onChangeRowsPerPage - Callback fired when the items per page is changed.
- onButtonClick - Callback fired when page change button clicked.
- contentBeforeSelect - content berofe per page select.

| propName            | propType                         | defaultValue       | isRequired |
| ------------------- | -------------------------------- | ------------------ | ---------- |
| boundaryCount       | number                           | 1                  | -          |
| siblingCount        | number                           | 1                  | -          |
| page                | number                           | 0                  | +          |
| count               | number                           | 150                | +          |
| rowsPerPage         | number                           | 12                 | +          |
| disabled            | boolean                          | false              | -          |
| rowsPerPageOptions  | {value: number, label: number}[] | rowsPerPageOptions | -          |
| onChangePage        | func                             | -                  | +          |
| onChangeRowsPerPage | func                             | -                  | +          |
| onButtonClick       | func                             | -                  | +          |
| contentBeforeSelect | string                           | 'Show rows:'       | -          |
