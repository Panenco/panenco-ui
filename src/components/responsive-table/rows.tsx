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
        rowIndex={row.id}
        hiddenColumns={hiddenColumns}
        visibleColumns={visibleColumns}
        containerWidth={containerWidth}
      />
    );
    r.push(rowComponent);
    r.push(expandedRowComponent);
    return r;
  }, []);

  let content;

  if (isLoading) {
    content = <TableFiller columnsLength={visibleColumns.length} rowsLength={itemsPerPage} />;
  } else if (tableRows.length) {
    content = tableRows;
  }
  return <tbody>{content}</tbody>;
};

Rows.defaultProps = {
  containerWidth: null,
  itemsPerPage: null,
};

export default Rows;
