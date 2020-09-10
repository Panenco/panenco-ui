import * as React from 'react';
import * as cx_ from 'classnames';
import { Icon } from 'components/icon';
import { Cell } from './cell';

const cx = cx_;
import s from './styles.scss';

interface Props {
  className?: string,
  children?: React.ReactNode,
  isTable?: boolean,
  name?: string,
  sort?: any,
  handleSort: (name: any) => void,
}

class HeaderCell extends React.Component<Props, {}>  {
  handleSortClick = (name: string) => () => {
    this.props.handleSort(name);
  };

  render() {
    const { className, children, name, sort, ...props } = this.props;
    const asc = sort && sort.direction === 'asc' && sort.sort === name;
    const desc = sort && sort.direction === 'desc' && sort.sort === name;

    return (
      <Cell className={cx(s.tableHeaderCell, className)} {...props}>
        <button
          name={name}
          type="button"
          className={cx(s.tableHeaderCellContent, !name && s.tableHeaderCellContentDisable)}
        >
          <div className={cx(s.tableHeaderCellContentText, (asc || desc) && s.tableHeaderCellContentTextActive)}>
            {children}
          </div>
          {sort && (
            <div className={cx(s.tableHeaderCellContentSquare, !name && s.tableHeaderCellContentSquareHide)}>
              <Icon
                icon={Icon.icons.chevronUp}
                className={cx(
                  s.tableHeaderCellContentSquareIcon,
                  asc && s.tableHeaderCellContentSquareIconActive,
                  !name && s.tableHeaderCellContentSquareHide,
                )}
              />
              <Icon
                icon={Icon.icons.chevronDown}
                className={cx(
                  s.tableHeaderCellContentSquareIcon,
                  desc && s.tableHeaderCellContentSquareIconActive,
                  !name && s.tableHeaderCellContentSquareHide,
                )}
              />
            </div>
          )}
        </button>
      </Cell>
    );
  }
}

export { HeaderCell };
