import * as React from 'react';
import AnimatedHeight from 'react-animate-height';
import { Text } from 'components';
import { RowType, ColumnType } from './types';

interface ExpandedRowProps {
  row: RowType;
  hiddenColumns: Array<ColumnType>;
  rowIndex: string | number;
  visibleColumns: Array<ColumnType>;
  containerWidth?: number;
}

const ExpandedRow = ({
  row,
  hiddenColumns,
  rowIndex,
  visibleColumns,
  containerWidth,
}: ExpandedRowProps): JSX.Element => {
  const expandedRows = hiddenColumns.map((column, cellIndex) => {
    return (
      <div key={column.accessor} className="tableHiddenCellContent">
        <Text className="tableHiddenCellContentLabel">{column.label}</Text>
        <div className="tableHiddenCellContentText">
          {column.component
            ? React.createElement(column.component, { row, rowIndex, cellIndex, accessor: column.accessor })
            : row.data[column.accessor]}
        </div>
      </div>
    );
  });
  const tableWidth = visibleColumns.reduce((prevValue, { minWidth, prevWidth }) => {
    if (prevWidth) return prevValue + prevWidth;
    return prevValue + minWidth;
  }, 0);
  const expandedRowWidth = visibleColumns.length === 1 ? containerWidth : tableWidth;
  return (
    <tr className="tableBodyRow tableBodyRowExpandable">
      <td colSpan={visibleColumns.length}>
        <AnimatedHeight duration={500} height={row.isOpen ? 'auto' : 0}>
          <div
            className="tableHiddenCell"
            style={{
              maxWidth: `${expandedRowWidth}px`,
              width: `${expandedRowWidth}px`,
              minWidth: `${expandedRowWidth}px`,
            }}
          >
            {expandedRows}
          </div>
        </AnimatedHeight>
      </td>
    </tr>
  );
};

ExpandedRow.defaultProps = {
  containerWidth: null,
};

export default ExpandedRow;
