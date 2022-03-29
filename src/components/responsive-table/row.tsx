import * as React from 'react';
import cx from 'classnames';
import Cell from './cell';
import { RowType, ColumnType, ExpandRowType } from './types';

interface RowProps {
  row: RowType;
  rowIndex: string | number;
  visibleColumns: Array<ColumnType>;
  hiddenColumns: Array<ColumnType>;
  expandRow: ExpandRowType;
  iconCreator?: (rowIsOpen: boolean) => string;
  striped?: boolean;
}

const Row = ({ row, rowIndex, visibleColumns, hiddenColumns, expandRow, iconCreator, striped }: RowProps): JSX.Element => {
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

  return <tr className={cx('tableBodyRow', striped ? 'tableBodyRowStriped' : 'tableBodyRowBase')}>{cells}</tr>;
};

Row.defaultProps = {
  iconCreator: null,
  striped: true
};

export default Row;
