import * as React from 'react';
import { idGenerator } from 'utils/helpers';

import CellFiller from './cell-filler';

export interface TableFillerProps {
  columnsLength: number;
  rowsLength: number;
}

const TableFiller = ({ rowsLength, columnsLength }: TableFillerProps): JSX.Element => {
  const width = 100 / columnsLength;

  const fillerRender = [...Array(rowsLength)].map(() => (
    <tr key={idGenerator()}>
      {[...Array(columnsLength)].map(() => (
        <CellFiller key={idGenerator()} width={`${width}%`} />
      ))}
    </tr>
  ));
  return <>{fillerRender}</>;
};

export default TableFiller;
