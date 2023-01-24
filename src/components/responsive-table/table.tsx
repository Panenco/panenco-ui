/* eslint-disable react/static-property-placement */
import { throttle } from 'lodash-es';
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { ColumnType } from '.';

import Columns from './columns';
import Rows from './rows';
import { Styles } from './style';
import { expandRow, resizeTable } from './table-actions';
import { TableProps, TableState } from './types';

class Table extends React.Component<TableProps, TableState> {
  static separateColumns(cols: ColumnType[]): ColumnType[][] {
    const visible: ColumnType[] = [];
    const hidden: ColumnType[] = [];

    cols.forEach((col) => {
      if (col.isVisible) visible.push(col);
      else hidden.push(col);
    });

    return [visible, hidden];
  }

  divRef: React.RefObject<HTMLTableElement>;

  divSizeObserver: ResizeObserver;

  static defaultProps = {
    itemsPerPage: 10,
    shouldResize: true,
    sort: null,
    handleSort: null,
  };

  constructor(props) {
    super(props);
    const { columns, rows, priorityLevelThreshold } = props;

    this.state = {
      columns,
      rows,
      priorityLevelThreshold,
      props,
    };

    this.divRef = React.createRef();

    this.resizeTable = this.resizeTable.bind(this);
    this.expandRow = this.expandRow.bind(this);
  }

  static getDerivedStateFromProps(newProps: TableProps, state: TableState): TableState {
    if (
      newProps.rows !== state.props.rows ||
      newProps.columns !== state.props.columns ||
      newProps.priorityLevelThreshold !== state.props.priorityLevelThreshold
    ) {
      return {
        ...state,
        priorityLevelThreshold: newProps.priorityLevelThreshold,
        rows: newProps.rows,
        columns: newProps.columns,
        props: newProps,
      };
    }
    return state;
  }

  componentDidMount(): void {
    this.divSizeObserver = new ResizeObserver(
      throttle((entries) => {
        // eslint-disable-next-line array-callback-return
        entries.forEach((entry) => {
          // eslint-disable-next-line react/destructuring-assignment
          if (this.state.containerWidth !== entry.contentRect.width) {
            this.resizeTable(entry.contentRect.width);
            this.setState((currentState) => {
              return { ...currentState, containerWidth: this?.divRef?.current?.offsetWidth };
            });
          }
        });
      }, 150),
    );
    this.divSizeObserver.observe(this?.divRef?.current as Element);
    this.resizeTable(this?.divRef?.current?.offsetWidth as number);
    this.setState((currentState) => {
      return { ...currentState, containerWidth: this?.divRef?.current?.offsetWidth };
    });
  }

  componentWillUnmount(): void {
    this.divSizeObserver.disconnect();
  }

  expandRow(rowIndex: string | number): void {
    this.setState((currentState) => {
      return expandRow({ rowIndex, state: currentState });
    });
  }

  resizeTable(width: number): void {
    const { shouldResize } = this.props;
    if (shouldResize) {
      this.setState((currentState) => {
        return resizeTable({ width, state: currentState });
      });
    }
  }

  render(): JSX.Element {
    const { containerWidth, columns, rows } = this.state;
    const {
      itemsPerPage,
      sort,
      handleSort,
      innerRef,
      isLoading,
      iconCreator,
      sortIcons,
      // exclude custom props so they don't appear as a dom attributes
      /* eslint-disable */
      columns: cols,
      priorityLevelThreshold,
      shouldResize,
      /* eslint-enable */

      ...tableProps
    } = this.props;

    const [visibleCols, hiddenCols] = Table.separateColumns(columns);

    return (
      <Styles ref={this.divRef}>
        <table className='table' ref={innerRef} {...tableProps}>
          <Columns columns={visibleCols} sort={sort} handleSort={handleSort} sortIcons={sortIcons} />
          <Rows
            rows={rows}
            itemsPerPage={itemsPerPage}
            visibleColumns={visibleCols}
            hiddenColumns={hiddenCols}
            expandRow={this.expandRow}
            containerWidth={containerWidth}
            isLoading={isLoading}
            iconCreator={iconCreator}
          />
        </table>
      </Styles>
    );
  }
}

export const ResponsiveTable = React.forwardRef((props: TableProps, ref): JSX.Element => {
  return <Table innerRef={ref} {...props} />;
});
