export type DataAttributeKey = `data-${string}`;

export interface ColumnType {
  accessor: string;
  label: any;
  priorityLevel: number;
  position: number;
  minWidth: number;
  isVisible: boolean;
  sortName?: string;
  component?: any;
  prevWidth?: number;
  className?: string;
  thProps?: React.TableHTMLAttributes<HTMLTableCellElement> & {
    [dataAttribute: DataAttributeKey]: any;
  };
}

export interface RowType<T = Record<string, any>> {
  id: string | number;
  data: T;
  isOpen?: boolean;
}

export interface SortType {
  sort: string;
  direction: 'asc' | 'desc';
}

export type HandleSortType = (sortName: string, direction: 'asc' | 'desc') => void;
export type ExpandRowType = (rowIndex: string | number) => void;

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns: ColumnType[];
  rows: RowType[];
  itemsPerPage?: number;
  priorityLevelThreshold?: number;
  sort?: SortType;
  handleSort?: HandleSortType;
  innerRef?: any;
  isLoading?: boolean;
  shouldResize?: boolean;
  iconCreator?: (rowIsOpen: boolean) => string;
  headerColor?: string;
  rowsColor?: string;
  striped?: boolean;
}

export interface TableState {
  columns: ColumnType[];
  rows: RowType[];
  props: TableProps;
  priorityLevelThreshold?: number;
  containerWidth?: number;
}

export type CustomCellProps<T = Record<string, any>> = {
  row: RowType<T>;
  rowIndex: number | string;
  cellIndex: number;
  accessor: string;
};
