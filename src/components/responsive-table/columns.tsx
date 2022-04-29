import * as React from 'react';
import HeaderCell from './header-cell';
import { ColumnType, SortType, HandleSortType } from './types';

interface ColumnsProps {
  columns: Array<ColumnType>;
  sort?: SortType;
  handleSort?: HandleSortType;
}

const Columns = ({ columns, sort, handleSort }: ColumnsProps): JSX.Element => {
  const tableColumns = columns.map(({ accessor, label, minWidth, sortName, thProps }) => {
    return (
      <HeaderCell
        key={accessor}
        label={label}
        minWidth={minWidth}
        sortName={sortName}
        sort={sort}
        handleSort={handleSort}
        {...thProps}
      />
    );
  });

  return (
    <thead>
      <tr>{tableColumns}</tr>
    </thead>
  );
};

Columns.defaultProps = {
  sort: null,
  handleSort: null,
};

export default Columns;
