import * as React from 'react';
import * as PropTypes from 'prop-types';
import Cell from './cell';
import { RowType, ColumnType, ExpandRowType, rowPropType, columnsPropType } from './types';

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

Row.propTypes = {
  row: rowPropType.isRequired,
  rowIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  visibleColumns: columnsPropType.isRequired,
  hiddenColumns: columnsPropType.isRequired,
  expandRow: PropTypes.func.isRequired,
};

export default Row;
