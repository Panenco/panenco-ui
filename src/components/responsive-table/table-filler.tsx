import * as React from 'react';

import CellFiller from './cell-filler';

export interface TableFillerProps {
  rowsLength: number;
  columnsLength: number;
}

const TableFiller = ({ rowsLength, columnsLength }: TableFillerProps): JSX.Element => {
  const width = 100 / columnsLength;

  const fillerRender = [...Array(rowsLength)].map(() => (
    <tr>
      {[...Array(columnsLength)].map(() => (
        <CellFiller width={`${width}%`} />
      ))}
    </tr>
  ));
  return <>{fillerRender}</>;
};

export default TableFiller;
