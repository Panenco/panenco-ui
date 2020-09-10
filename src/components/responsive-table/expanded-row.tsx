import * as React from 'react';
import * as PropTypes from 'prop-types';
import AnimatedHeight from 'react-animate-height';
import { Text } from 'components';
import { RowType, ColumnType, rowPropType, columnsPropType } from './types';

interface ExpandedRowProps {
  row: RowType;
  hiddenColumns: Array<ColumnType>;
  visibleColumns: Array<ColumnType>;
  containerWidth?: number;
}

const ExpandedRow = ({ row, hiddenColumns, visibleColumns, containerWidth }: ExpandedRowProps): JSX.Element => {
  const expandedRows = hiddenColumns.map((column) => {
    return (
      <div key={column.accessor} className="tableHiddenCellContent">
        <Text className="tableHiddenCellContentLabel">{column.label}</Text>
        <Text className="tableHiddenCellContentText">{row.data[column.accessor]}</Text>
      </div>
    );
  });
  const tableWidth = visibleColumns.reduce((prevValue, { minWidth, prevWidth }) => {
    if (prevWidth) return prevValue + prevWidth;
    return prevValue + minWidth;
  }, 0);
  const expandedRowWidth = visibleColumns.length === 1 ? containerWidth : tableWidth;
  return (
    <tr className="tableBodyRow">
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

ExpandedRow.propTypes = {
  row: rowPropType.isRequired,
  visibleColumns: columnsPropType.isRequired,
  hiddenColumns: columnsPropType.isRequired,
  containerWidth: PropTypes.number,
};

export default ExpandedRow;
