import * as React from 'react';
import * as PropTypes from 'prop-types';
import HeaderCell from './header-cell';
import { ColumnType, SortType, HandleSortType, columnsPropType, sortPropType } from './types';

interface ColumnsProps {
  columns: Array<ColumnType>;
  sort?: SortType;
  handleSort?: HandleSortType;
}

const Columns = ({ columns, sort, handleSort }: ColumnsProps): JSX.Element => {
  const tableColumns = columns.map(({ accessor, label, minWidth, sortName }) => {
    return (
      <HeaderCell
        key={accessor}
        label={label}
        minWidth={minWidth}
        sortName={sortName}
        sort={sort}
        handleSort={handleSort}
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

Columns.propTypes = {
  columns: columnsPropType.isRequired,
  sort: sortPropType,
  handleSort: PropTypes.func,
};

export default Columns;
