import * as React from 'react';
import Row from './row';
import ExpandedRow from './expanded-row';
import { RowType, ColumnType, ExpandRowType } from './types';

interface RowsProps {
  rows: Array<RowType>;
  visibleColumns: Array<ColumnType>;
  hiddenColumns: Array<ColumnType>;
  expandRow: ExpandRowType;
  containerWidth?: number;
  itemsPerPage?: number;
}

const Rows = ({
  rows,
  visibleColumns,
  hiddenColumns,
  expandRow,
  containerWidth,
  itemsPerPage,
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
  let tbody = <tbody />;
  if (tableRows.length) {
    tbody = <tbody>{tableRows}</tbody>;
  }
  return tbody;
};

Rows.defaultProps = {
  containerWidth: null,
  itemsPerPage: null,
};

export default Rows;
