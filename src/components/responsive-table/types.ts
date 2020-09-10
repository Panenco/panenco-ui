import * as PropTypes from 'prop-types';
import { PUITheme, ThemeMode } from 'utils/types';

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
}

export interface RowType {
  id: string | number;
  data: object;
  isOpen?: boolean;
}

export interface SortType {
  sort: string;
  direction: 'asc' | 'desc';
}

export type HandleSortType = (sortName: string, direction: 'asc' | 'desc') => void;
export type ExpandRowType = (rowIndex: string | number) => void;

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns: Array<ColumnType>;
  rows: Array<RowType>;
  itemsPerPage?: number;
  priorityLevelThreshold?: number;
  sort?: SortType;
  handleSort?: HandleSortType;
  innerRef?: any;
  theme?: PUITheme;
  mode?: ThemeMode;
}

export interface TableState {
  columns: Array<ColumnType>;
  rows: Array<RowType>;
  priorityLevelThreshold?: number;
  containerWidth?: number;
  props: TableProps;
}

export const columnsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    accessor: PropTypes.string,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
    priorityLevel: PropTypes.number,
    position: PropTypes.number,
    minWidth: PropTypes.number,
    isVisible: PropTypes.bool,
    sortName: PropTypes.string,
  }),
);

export const rowPropType = PropTypes.shape({
  id: PropTypes.string,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.object,
  isOpen: PropTypes.bool,
});

export const rowsPropType = PropTypes.arrayOf(rowPropType);

export const sortPropType = PropTypes.shape({
  sort: PropTypes.string,
  direction: PropTypes.oneOf(['asc', 'desc']),
});
