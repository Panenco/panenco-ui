# Pagination

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


const render = () => {
  return (
    <PaginationSelect
      options={options}
      type="list"
      currentPage={Number(0)}
      totalItems={148}
      formatUrl={p => `/page/${p}`}
      perPage={24}
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
- formatUrl - Function to format url.
- disabled - If **true**, the pagination component will be disabled.
- type - Pagination component type.
- variant - The variant to use.
- options - array of options that populate the per page select menu.
- onPagination - Function on select change.

| propName        | propType                            | defaultValue | isRequired |
| --------------- | ----------------------------------- | ------------ | ---------- |
| boundaryCount   | number                              | 1            | -          |
| hideNextButton  | boolean                             | false        | -          |
| hidePrevButton  | boolean                             | false        | -          |
| showFirstButton | boolean                             | false        | -          |
| showLastButton  | boolean                             | false        | -          |
| siblingCount    | number                              | 1            | -          |
| currentPage     | number                              | 0            | -          |
| totalItems      | number                              | 150          | -          |
| perPage         | number                              | 12           | -          |
| formatUrl       | number                              | -            | -          |
| disabled        | boolean                             | false        | -          |
| options         | {value: number, label: number}[]    | options      | -          |
| type            | 'table' or 'list'                   | 'list'       | -          |
| variant         | 'contained' or 'outlined' or 'text' | 'contained'  | -          |
| onPagination    | func                                | -            | -          |
