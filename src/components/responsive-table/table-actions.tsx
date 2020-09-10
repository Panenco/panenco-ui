import { RowType, TableState, ColumnType } from './types';

const dynamicSort = ({ column, order }: { column: string; order: 'asc' | 'desc' }): any => {
  const result = order === 'asc' ? 1 : -1;
  return (a: any, b: any): number => {
    if (a[column] > b[column]) return result;
    if (a[column] < b[column]) return -result;
    return 0;
  };
};

const tryToRemoveColumns = ({
  constTableWidth,
  width,
  state,
}: {
  constTableWidth: number;
  width: number;
  state: TableState;
}): TableState => {
  const { columns } = state;
  let tableWidth = constTableWidth;
  const visibleColumns = columns.filter((column) => column.isVisible);
  const hiddenColumns = columns.filter((column) => !column.isVisible);

  visibleColumns.sort(dynamicSort({ column: 'priorityLevel', order: 'asc' }));
  while (tableWidth > width && visibleColumns.length > 1) {
    const removedColumn = visibleColumns.pop() as ColumnType;
    hiddenColumns.push({ ...removedColumn, isVisible: false });
    tableWidth -= removedColumn.minWidth;
  }
  if (visibleColumns.length === 1) {
    const firstColumn = visibleColumns.shift() as ColumnType;
    visibleColumns.push({ ...firstColumn, minWidth: width, prevWidth: firstColumn.minWidth });
  }
  const combinedColumns = [...visibleColumns, ...hiddenColumns];
  combinedColumns.sort(dynamicSort({ column: 'position', order: 'asc' }));
  return { ...state, columns: combinedColumns };
};

const closeAllRows = ({ rows }: { rows: Array<RowType> }): Array<RowType> => {
  return rows.map((row) => ({ ...row, isOpen: undefined }));
};

const tryToAddColumns = ({
  constTableWidth,
  width,
  state,
}: {
  constTableWidth: number;
  width: number;
  state: TableState;
}): TableState => {
  const { columns, rows } = state;
  let tableWidth = constTableWidth;
  const visibleColumns = columns.filter((column) => column.isVisible);
  const hiddenColumns = columns.filter((column) => !column.isVisible);
  hiddenColumns.sort(dynamicSort({ column: 'priorityLevel', order: 'desc' }));

  if (visibleColumns.length === 1) {
    const firstColumn = visibleColumns.shift() as ColumnType;
    visibleColumns.unshift({ ...firstColumn, minWidth: firstColumn.prevWidth || firstColumn.minWidth });
  }
  while (tableWidth < width && hiddenColumns.length) {
    const addedColumn = hiddenColumns.pop() as ColumnType;
    tableWidth += addedColumn.minWidth;
    if (
      tableWidth > width ||
      (state.priorityLevelThreshold && addedColumn.priorityLevel >= state.priorityLevelThreshold)
    ) {
      hiddenColumns.push(addedColumn);
      break;
    }
    visibleColumns.push({ ...addedColumn, isVisible: true });
  }

  if (visibleColumns.length === 1) {
    const firstColumn = visibleColumns.shift() as ColumnType;
    visibleColumns.push({ ...firstColumn, minWidth: width, prevWidth: firstColumn.minWidth });
  }

  if (visibleColumns.length > 1) {
    const firstColumn = visibleColumns.shift() as ColumnType;
    visibleColumns.unshift({
      ...firstColumn,
      minWidth: firstColumn.prevWidth || firstColumn.minWidth,
      prevWidth: undefined,
    });
  }

  const newRows = hiddenColumns.length ? rows : closeAllRows({ rows });
  const newColumns = [...visibleColumns, ...hiddenColumns];
  newColumns.sort(dynamicSort({ column: 'position', order: 'asc' }));
  return { ...state, columns: newColumns, rows: newRows };
};

export const resizeTable = ({ width, state }: { width: number; state: TableState }): TableState => {
  const { columns } = state;
  const visibleColumns = columns.filter((column) => column.isVisible);
  const tableWidth = visibleColumns.reduce((prevValue, { minWidth, prevWidth }) => {
    if (prevWidth) return prevValue + prevWidth;
    return prevValue + minWidth;
  }, 0);
  const newState =
    tableWidth > width
      ? tryToRemoveColumns({ constTableWidth: tableWidth, width, state })
      : tryToAddColumns({ constTableWidth: tableWidth, width, state });

  return newState;
};

export const expandRow = ({ rowIndex, state }: { rowIndex: string | number; state: TableState }): TableState => {
  const { rows } = state;
  const newRows = rows.map((row) => (row.id === rowIndex ? { ...row, isOpen: !row.isOpen } : row));
  return { ...state, rows: newRows };
};
