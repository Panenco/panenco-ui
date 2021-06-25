import * as React from 'react';
import { Icon, Text } from 'components';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { ThemeMode } from 'utils/types';
import { RowType, ExpandRowType, CustomCellProps } from './types';

export interface CellProps {
  accessor: string;
  minWidth: number;
  cellIndex: number;
  row: RowType;
  rowIndex: string | number;
  expandRow: ExpandRowType;
  hiddenColumnLength: number;
  component?: React.ComponentType<CustomCellProps>;
}

const Cell = ({
  accessor,
  minWidth,
  cellIndex,
  row,
  rowIndex,
  expandRow,
  hiddenColumnLength,
  component,
}: CellProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();
  const IS_FIRST_CELL = cellIndex === 0;
  const IS_HIDDEN_COLUMNS = hiddenColumnLength !== 0;
  const icon =
    IS_FIRST_CELL && IS_HIDDEN_COLUMNS ? (
      <Icon
        className={cx(
          'tableCellButtonIcon',
          row.isOpen === true ? 'animationIconOpen' : null,
          row.isOpen === false ? 'animationIconClose' : null,
        )}
        onClick={(): void => {
          expandRow(rowIndex);
        }}
        icon={Icon.icons.chevronRight}
      />
    ) : null;

  const content = component
    ? React.createElement(component, { row, rowIndex, cellIndex, accessor })
    : row.data[accessor];
  return (
    <td
      className="tableCell"
      style={{
        maxWidth: `${minWidth}px`,
        color: mode === ThemeMode.light ? theme.colors.dark : theme.colors.light,
      }}
    >
      {icon ? (
        <div className="tableCellWrap">
          {icon}
          {typeof content === 'string' ? <Text className="tableCellWrapContent">{content}</Text> : content}
        </div>
      ) : (
        content
      )}
    </td>
  );
};

Cell.defaultProps = {
  component: null,
};

export default Cell;
