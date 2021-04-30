import * as React from 'react';

import ExpandedRow from './expanded-row';
import Row from './row';
import TableFiller from './table-filler';
import { ColumnType, ExpandRowType, RowType } from './types';

interface RowsProps {
  rows: Array<RowType>;
  visibleColumns: Array<ColumnType>;
  hiddenColumns: Array<ColumnType>;
  expandRow: ExpandRowType;
  containerWidth?: number;
  itemsPerPage: number;
  isLoading?: boolean;
}

const Rows = ({
  rows,
  visibleColumns,
  hiddenColumns,
  expandRow,
  containerWidth,
  itemsPerPage,
  isLoading,
}: RowsProps): JSX.Element => {
  const tableRows = rows.reduce((r: Array<JSX.Element>, row) => {
    const rowComponent = (
      <Row
        key={`${row.id}-1`}
        row={row}
        rowIndex={row.id}
        visibleColumns={visibleColumns}
        hiddenColumns={hiddenColumns}
        expandRow={expandRow}
      />
    );
    const expandedRowComponent = (
      <ExpandedRow
        key={`${row.id}-2`}
        row={row}
        hiddenColumns={hiddenColumns}
        visibleColumns={visibleColumns}
        containerWidth={containerWidth}
      />
    );
    r.push(rowComponent);
    r.push(expandedRowComponent);
    return r;
  }, []);

  let tbody = <tbody></tbody>;

  if (isLoading) {
    tbody = (
      <tbody>
        <TableFiller columnsLength={visibleColumns.length} rowsLength={itemsPerPage} />
      </tbody>
    );
  } else if (tableRows.length) {
    tbody = <tbody>{tableRows}</tbody>;
  }
  return tbody;
};

Rows.defaultProps = {
  containerWidth: null,
  itemsPerPage: null,
};

export default Rows;
