import * as React from 'react';
import Cell from './cell';
import { RowType, ColumnType, ExpandRowType } from './types';

interface RowProps {
  row: RowType;
  rowIndex: string | number;
  visibleColumns: Array<ColumnType>;
  hiddenColumns: Array<ColumnType>;
  expandRow: ExpandRowType;
}

const Row = ({ row, rowIndex, visibleColumns, hiddenColumns, expandRow }: RowProps): JSX.Element => {
  const cells = visibleColumns.map(({ accessor, minWidth, component }, index) => {
    return (
      <Cell
        key={accessor}
        accessor={accessor}
        minWidth={minWidth}
        cellIndex={index}
        row={row}
        rowIndex={rowIndex}
        expandRow={expandRow}
        hiddenColumnLength={hiddenColumns.length}
        component={component}
      />
    );
  });

  return <tr className="tableBodyRow">{cells}</tr>;
};

export default Row;
