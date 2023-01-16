import * as cx from 'classnames';

import * as React from 'react';

export interface CellFillerProps {
  width: string;
}
const CellFiller = ({ width, ...props }: CellFillerProps): JSX.Element => (
  <td {...props} className={cx('tableCell', 'tableCellFiller')} style={{ maxWidth: `${width}px`, width: `${width}px` }}>
    <div className='fillerWrapper'>
      <div />
    </div>
  </td>
);

export default CellFiller;
