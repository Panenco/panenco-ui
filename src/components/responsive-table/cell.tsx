import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Icon } from 'components';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { ThemeMode } from 'utils/types';
import { RowType, ExpandRowType, rowPropType } from './types';

interface CellProps {
  accessor: string;
  minWidth: number;
  cellIndex: number;
  row: RowType;
  rowIndex: string | number;
  expandRow: ExpandRowType;
  hiddenColumnLength: number;
  component?: any;
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
  const content = component ? (
    React.createElement(component, { row, rowIndex, cellIndex, accessor })
  ) : (
    <>{row.data[accessor]}</>
  );
  return (
    <td
      className="tableCell"
      style={{
        maxWidth: `${minWidth}px`,
        width: `${minWidth}px`,
        minWidth: `${minWidth}px`,
        color: mode === ThemeMode.light ? theme.colors.dark : theme.colors.light,
      }}
    >
      {icon}
      {content}
    </td>
  );
};

Cell.defaultProps = {
  component: null,
};

Cell.propTypes = {
  accessor: PropTypes.string.isRequired,
  minWidth: PropTypes.number.isRequired,
  cellIndex: PropTypes.number.isRequired,
  rowIndex: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  row: rowPropType.isRequired,
  expandRow: PropTypes.func.isRequired,
  hiddenColumnLength: PropTypes.number.isRequired,
  component: PropTypes.func,
};

export default Cell;
