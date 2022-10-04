import * as React from 'react';
import { icons, IconType } from 'components';
import Cell from './cell';
import { RowType, ColumnType, ExpandRowType } from './types';

interface RowProps {
  expandRow: ExpandRowType;
  hiddenColumns: Array<ColumnType>;
  iconCreator?: (rowIsOpen: boolean) => IconType | keyof typeof icons.sm;
  row: RowType;
  rowIndex: string | number;
  visibleColumns: Array<ColumnType>;
}

const Row = ({ row, rowIndex, visibleColumns, hiddenColumns, expandRow, iconCreator }: RowProps): JSX.Element => {
  const cells = visibleColumns.map(({ accessor, minWidth, component, className }, index) => {
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
        iconCreator={iconCreator}
        className={className}
      />
    );
  });

  return <tr className='tableBodyRow'>{cells}</tr>;
};

Row.defaultProps = {
  iconCreator: null,
};

export default Row;
