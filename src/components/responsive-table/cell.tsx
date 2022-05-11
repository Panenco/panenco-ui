import * as React from 'react';
import { Icon, Text } from 'components';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { ThemeMode } from 'utils/types';
import { ButtonIcon } from 'components/button-icon';
import { RowType, ExpandRowType, CustomCellProps } from './types';

export interface CellProps {
  accessor: string;
  minWidth: number;
  cellIndex: number;
  row: RowType;
  rowIndex: string | number;
  expandRow: ExpandRowType;
  hiddenColumnLength: number;
  className?: string;
  component?: React.ComponentType<CustomCellProps>;
  iconCreator?: (rowIsOpen: boolean) => string;
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
  iconCreator,
  className,
}: CellProps): JSX.Element => {
  const theme = useTheme();
  const { mode } = useMode();
  const IS_FIRST_CELL = cellIndex === 0;
  const IS_HIDDEN_COLUMNS = hiddenColumnLength !== 0;

  const getIcon = (): string => {
    if (typeof iconCreator === 'function') {
      return iconCreator(!!row.isOpen);
    }

    // default is plus/minus from panenco ui
    return row.isOpen ? 'minus' : 'plus';
  };

  const content = component
    ? React.createElement(component, { row, rowIndex, cellIndex, accessor })
    : row.data[accessor];
  return (
    <td
      className={cx('tableCell', className)}
      style={{
        maxWidth: `${minWidth}px`,
        color: mode === ThemeMode.light ? theme.colors.base900 : theme.colors.base100,
      }}
    >
      {IS_FIRST_CELL && IS_HIDDEN_COLUMNS ? (
        <div className='tableCellWrap'>
          <ButtonIcon
            className='tableCellButtonIcon'
            onClick={(): void => {
              expandRow(rowIndex);
            }}
            icon={Icon.icons[getIcon()]}
          />
          {typeof content === 'string' ? <Text className='tableCellWrapContent'>{content}</Text> : content}
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
