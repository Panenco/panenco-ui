# Resposive Table

## Usage

### Case 1

An ordinary table will be shown if the tableWidth is less than the width of the page container i.e table fits the page container

A collapsible table with a computed number of visible columns will be shown to fit the width of the page container

If you want the table to have sort functionality you must provide sort and handleSort props as well as sortName for each column that could be sorted

```js
import { ResponsiveTable } from '@panenco/ui';

const SomeComponentWithTable = ({
  someData,
  sort,
  handleSort,
  listLoaded,
}) => {
  const columns = [
    {
      accessor: 'field_1',
      label: <Trans i18nKey="myBeautyLabelField_1" />,
      position: 1,
      priorityLevel: 2,
      minWidth: 165,
      isVisible: true,
      component: WrapMyDataWithLinkComponentForExample, // optional
    },
    {
      accessor: 'field_2',
      label: <Trans i18nKey="myBeautyLabelField_2" />,
      position: 2,
      priorityLevel: 1,
      minWidth: 196,
      isVisible: true,
      sortName: 'sort name for field_1 that is used on server', // specify if you want this column to be sortable
    },
    ...
  ];
  const rows =
    someData &&
    someData.reduce((res, el) => {
      const row = { data: {} };
      row['id'] = el.get('id');
      row.data['field_1'] = el.get('field_1');
      row.data['field_2'] = el.get('field_2');
      ...
      res.push(row);
      return res;
    }, []);

  return (
    <div className={s.page}>
      ...
      {listLoaded ? (
        <ResponsiveTable columns={columns} rows={rows} sort={sort} handleSort={handleSort} />
      ) : null}
      ...
    </div>
  );
}
```

### Case 2

If you want the table to be shown as a collapsible table when it fits the page container,
you have to pass a priorityLevelThreshold prop and specify which columns you want to be hidden by setting for these
columns isVisible prop to false

A priorityLevelThreshold value says that if there is enough space for
all columns to be shown, only columns with the priorityLevel less than the priorityLevelThreshold will be shown
i.e not all columns, as it was in the first case

#### Example

Only one column (field_2) will be shown, regardless of the page container width

```js
import { ResponsiveTable } from '@panenco/ui';

const SomeComponentWithTable = ({
  someData,
  sort,
  handleSort,
  listLoaded,
}) => {
  const columns = [
    {
      accessor: 'field_1',
      label: <Trans i18nKey="myBeautyLabelField_1" />,
      position: 1,
      priorityLevel: 2,
      minWidth: 165,
      isVisible: false, // Note! that besides the fact* (that priorityLevel of this column is not less than priorityLevelThreshold
      // which means that this column will not be displayed) you also have to set isVisible: false and do it for every column that have
      // this fact*
    },
    {
      accessor: 'field_2',
      label: <Trans i18nKey="myBeautyLabelField_2" />,
      position: 2,
      priorityLevel: 1,
      minWidth: 196,
      isVisible: true,
      sortName: 'sort name for field_1 that is used on server',
    },
    ...
  ];
  const rows =
    someData &&
    someData.reduce((res, el) => {
      const row = { data: {} };
      row['id'] = el.get('id');
      row.data['field_1'] = el.get('field_1');
      row.data['field_2'] = el.get('field_2');
      ...
      res.push(row);
      return res;
    }, []);

  return (
    <div className={s.page}>
      ...
      {listLoaded ? (
        <ResponsiveTable columns={columns} priorityLevelThreshold={2} rows={rows} sort={sort} handleSort={handleSort} />
      ) : null}
      ...
    </div>
  );
}
```

<!-- STORY -->

### Properties

- `columns` - Just note that you set isVisible: true for each column unless you have case 2 column with the fact\*
- `rows` - Each row must have an id field and the data field representing an object with keys matching accessors of columns
- `priorityLevelThreshold` - A number greater than zero, if is set, then only the columns with priorityLevel less than this value, may be displayed
- `sort` - Says which column and in which direction is sorted right now
- `handleSort` - A callback that triggers a request to the server for the new sorted data

| propName               | propType | defaultValue | isRequired |
| ---------------------- | -------- | ------------ | ---------- |
| columns                | array    | -            | +          |
| rows                   | array    | -            | +          |
| priorityLevelThreshold | number   | null         | -          |
| sort                   | object   | null         | -          |
| handleSort             | func     | null         | -          |

### Column fields

- `accessor` - is used to retrieve the data for cell i.e rows[someRowIndex].data[accessor]
- `label` - is a name of a column that will be shown to user
- `position` - values specify the order, in which, columns will display, the columns width the greatest position value will be the rightmost. position should be greater than zero
- `priorityLevel` - values specify the order, in which, columns will show and hide, when the width of page container changes, the column with the greatest priorityLevel value will hide first. priorityLevel should be greater than zero
- `minWidth` - value is used to compute the width of the table
- `isVisible` - value indicates whether the column is visible or not, you set it as true for all columns unless you want the table to be displayed as in second case
- `sortName` - sort name of the column that is used on the server
- `component` - you can wrap each cell in the column into your custom component, it receives an object with two props: row and accessor, so you can retrieve data for this column like this row.data[accessor]
