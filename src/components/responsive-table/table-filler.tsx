import * as React from 'react';
import uuid from 'uuid/v4';

import CellFiller from './cell-filler';

export interface TableFillerProps {
  rowsLength: number;
  columnsLength: number;
}

const TableFiller = ({ rowsLength, columnsLength }: TableFillerProps): JSX.Element => {
  const width = 100 / columnsLength;

  const fillerRender = [...Array(rowsLength)].map(() => (
    <tr key={uuid()}>
      {[...Array(columnsLength)].map(() => (
        <CellFiller key={uuid()} width={`${width}%`} />
      ))}
    </tr>
  ));
  return <>{fillerRender}</>;
};

export default TableFiller;
