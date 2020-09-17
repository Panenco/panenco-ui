/* eslint-disable react/static-property-placement */
import * as React from 'react';
import { throttle } from 'lodash-es';
import ResizeObserver from 'resize-observer-polyfill';
import { useTheme, useMode } from 'utils/hooks';
import Columns from './columns';
import Rows from './rows';
import { expandRow, resizeTable } from './table-actions';
import { TableProps, TableState } from './types';
import { Styles } from './style';

class Table extends React.Component<TableProps, TableState> {
  divRef: React.RefObject<HTMLElement>;

  divSizeObserver: ResizeObserver;

  static defaultProps = {
    itemsPerPage: null,
    priorityLevelThreshold: null,
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
    if (newProps.rows !== state.props.rows) {
      return { ...state, rows: newProps.rows, props: newProps };
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
    this.setState((currentState) => {
      return resizeTable({ width, state: currentState });
    });
  }

  render(): JSX.Element {
    const { columns, rows, containerWidth } = this.state;
    const {
      columns: columnsProp,
      rows: rowsProp,
      priorityLevelThreshold,
      itemsPerPage,
      sort,
      handleSort,
      innerRef,
      theme,
      mode,
      ...tableProps
    } = this.props;
    const visibleColumns = columns.filter((column) => column.isVisible);
    const hiddenColumns = columns.filter((column) => !column.isVisible);

    return (
      <Styles theme={theme} mode={mode} ref={this.divRef}>
        <table className="table" ref={innerRef} {...tableProps}>
          <Columns columns={visibleColumns} sort={sort} handleSort={handleSort} />
          <Rows
            rows={rows}
            itemsPerPage={itemsPerPage}
            visibleColumns={visibleColumns}
            hiddenColumns={hiddenColumns}
            expandRow={this.expandRow}
            containerWidth={containerWidth}
          />
        </table>
      </Styles>
    );
  }
}

export const ResponsiveTable = React.forwardRef(
  (props: TableProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    return <Table innerRef={ref} theme={theme} mode={mode} {...props} />;
  },
);
