import * as React from 'react';
import cx from 'classnames';
import { Icon, Text } from 'components';
import { SortType, HandleSortType, DataAttributeKey } from './types';

interface HeaderCellProps extends React.TableHTMLAttributes<HTMLTableCellElement> {
  label: any;
  minWidth: number;
  sortName?: string;
  sort?: SortType;
  handleSort?: HandleSortType;
  thProps?: React.TableHTMLAttributes<HTMLTableCellElement> & {
    [dataAttribute: DataAttributeKey]: any;
  };
}

const HeaderCell = ({ label, minWidth, sortName, sort, handleSort, ...props }: HeaderCellProps): JSX.Element => {
  const asc = sort && sort.direction === 'asc' && sort.sort === sortName && 'asc';
  const desc = sort && sort.direction === 'desc' && sort.sort === sortName && 'desc';
  const [direction, setDirection] = React.useState(asc || desc) as ['asc' | 'desc', any];
  React.useEffect(() => {
    if (!asc && !desc) setDirection('desc');
  }, [sort]);
  const handleSortClick = (): void => {
    if (handleSort) handleSort(sortName as string, direction);
    setDirection((d) => (d === 'desc' ? 'asc' : 'desc'));
  };
  return (
    <th
      className="tableCell"
      style={{ maxWidth: `${minWidth}px`, width: `${minWidth}px`, minWidth: `${minWidth}px` }}
      {...props}
    >
      <button
        type="button"
        className={cx('tableHeaderButton', !sortName && 'tableHeaderButtonDisabled')}
        onClick={handleSortClick}
        disabled={!sortName}
      >
        <Text className="tableHeaderText">{label}</Text>
        {sortName ? (
          <div className="tableHeaderContent">
            <Icon icon={Icon.icons.chevronUp} className={cx('tableHeaderIcon', asc && 'tableHeaderIconActive')} />
            <Icon icon={Icon.icons.chevronDown} className={cx('tableHeaderIcon', desc && 'tableHeaderIconActive')} />
          </div>
        ) : null}
      </button>
    </th>
  );
};

HeaderCell.defaultProps = {
  sortName: null,
  sort: null,
  handleSort: null,
};

export default HeaderCell;
