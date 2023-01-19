import * as React from 'react';

import { icons, IconType } from 'components';
import ExpandedRow from './expanded-row';
import Row from './row';
import TableFiller from './table-filler';
import { ColumnType, ExpandRowType, RowType } from './types';

interface RowsProps {
  containerWidth?: number;
  expandRow: ExpandRowType;
  hiddenColumns: Array<ColumnType>;
  iconCreator?: (rowIsOpen: boolean) => IconType | keyof typeof icons.sm;
  isLoading?: boolean;
  itemsPerPage?: number;
  rows: Array<RowType>;
  visibleColumns: Array<ColumnType>;
}

const Rows = ({
  rows,
  visibleColumns,
  hiddenColumns,
  expandRow,
  containerWidth = 0,
  itemsPerPage = 10,
  iconCreator,
  isLoading,
}: RowsProps): JSX.Element => {
  const tableRows = rows.reduce((r: Array<JSX.Element>, row) => {
    const rowComponent = (
      <Row
        key={`${row.id}-1`}
        row={row}
        rowIndex={row.id}
        visibleColumns={visibleColumns}
        hiddenColumns={hiddenColumns}
        iconCreator={iconCreator}
        expandRow={expandRow}
      />
    );
    const expandedRowComponent = (
      <ExpandedRow
        key={`${row.id}-2`}
        row={row}
        rowIndex={row.id}
        hiddenColumns={hiddenColumns}
        visibleColumns={visibleColumns}
        containerWidth={containerWidth}
      />
    );
    r.push(rowComponent);
    r.push(expandedRowComponent);
    return r;
  }, []);

  let content;

  if (isLoading) {
    content = <TableFiller columnsLength={visibleColumns.length} rowsLength={itemsPerPage} />;
  } else if (tableRows.length) {
    content = tableRows;
  }
  return <tbody>{content}</tbody>;
};

Rows.defaultProps = {
  containerWidth: 0,
  isLoading: false,
  itemsPerPage: 10,
  iconCreator: null,
};

export default Rows;
