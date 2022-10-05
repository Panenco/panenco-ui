import { icons, IconType } from 'components';

export type DataAttributeKey = `data-${string}`;

export interface ColumnType {
  accessor: string;
  className?: string;
  component?: any;
  isVisible: boolean;
  label: any;
  minWidth: number;
  position: number;
  prevWidth?: number;
  priorityLevel: number;
  sortName?: string;
  thProps?: React.TableHTMLAttributes<HTMLTableCellElement> & {
    [dataAttribute: DataAttributeKey]: any;
  };
}

export interface RowType<T = Record<string, any>> {
  data: T;
  id: string | number;
  isOpen?: boolean;
}

export interface SortType {
  direction: 'asc' | 'desc';
  sort: string;
}

export type HandleSortType = (sortName: string, direction: 'asc' | 'desc') => void;
export type ExpandRowType = (rowIndex: string | number) => void;

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns: ColumnType[];
  handleSort?: HandleSortType;
  iconCreator?: (rowIsOpen: boolean) => IconType | keyof typeof icons.sm;
  innerRef?: any;
  isLoading?: boolean;
  itemsPerPage?: number;
  priorityLevelThreshold?: number;
  rows: RowType[];
  shouldResize?: boolean;
  sort?: SortType;
  sortIcons?: SortIconsType;
}

export interface SortIconsType {
  down: IconType | keyof typeof icons.sm;
  up: IconType | keyof typeof icons.sm;
}

export interface TableState {
  columns: ColumnType[];
  containerWidth?: number;
  priorityLevelThreshold?: number;
  props: TableProps;
  rows: RowType[];
}

export type CustomCellProps<T = Record<string, any>> = {
  accessor: string;
  cellIndex: number;
  row: RowType<T>;
  rowIndex: number | string;
};
