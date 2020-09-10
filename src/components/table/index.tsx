import * as React from 'react';
import * as ReactTable from 'react-table';
import { idGenerator } from 'utils/helpers/id-generator';
import { Icon, Text } from 'components';
import { useTheme, useMode } from 'utils/hooks';
import { useCombinedRefs } from 'utils/hooks/combinedrefs';

import cx from 'classnames';
import { Styles } from './style';

const { useSortBy, useTable } = ReactTable;

export interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  columns?: any;
  data?: any;
}

export function usePrevious(value) {
  const ref = React.useRef();
  React.useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ columns, data, ...props }: TableProps, ref): JSX.Element => {
    const theme = useTheme();
    const { mode } = useMode();
    const innerParentRef = React.useRef(null) as any;
    const innerTableRef = React.useRef(null) as any;
    const [parentWidth, setParentWidth] = React.useState(null) as any;
    const [tableWidth, setTableWidth] = React.useState(null) as any;
    const [currentPriority, setCurrentPriority] = React.useState(0) as any;
    const prevParentWidth = usePrevious(parentWidth) as any;
    const [openColumns, setOpenColumns] = React.useState([]) as any;
    const combineRefs = useCombinedRefs(innerTableRef, ref);

    const displayWindowSize = () => {
      setTableWidth(innerTableRef?.current?.offsetWidth);
      setParentWidth(innerParentRef?.current?.offsetWidth);
    };

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
      {
        columns,
        data,
      },
      useSortBy,
    );

    React.useLayoutEffect(() => {
      displayWindowSize();
    });

    React.useLayoutEffect(() => {
      displayWindowSize();
      window.addEventListener('resize', displayWindowSize);
      return (): void => {
        window.removeEventListener('resize', displayWindowSize);
      };
    }, []);

    React.useEffect(() => {
      if (prevParentWidth && prevParentWidth < parentWidth) {
        setCurrentPriority(currentPriority === 0 ? 0 : currentPriority - 1);
      }
      if (parentWidth < tableWidth) {
        const biggestPriority = headerGroups.reduce((acc, cur) => acc + cur.headers.length, 0);
        setCurrentPriority(biggestPriority - 1 > currentPriority ? currentPriority + 1 : biggestPriority - 1);
      }
    }, [tableWidth, parentWidth]);

    // console.log('BIG REDNER', tableWidth, parentWidth, currentPriority);
    return (
      <Styles theme={theme} mode={mode} ref={innerParentRef}>
        <table {...getTableProps()} {...props} ref={combineRefs} className="mainTable">
          <thead>
            {headerGroups.map((headerGroup) => {
              return (
                <tr {...headerGroup.getHeaderGroupProps()} className={cx('headerTr')} key={idGenerator()}>
                  <>
                    {Boolean(currentPriority) && <td />}
                    {headerGroup.headers.map((column) => {
                      const { isSortedDesc, canSort, getHeaderProps, render } = column;
                      if (column.priority < currentPriority) {
                        return null;
                      }

                      return (
                        <th {...getHeaderProps()} className="header" key={idGenerator()}>
                          <div className="tableHeaderWrapper">
                            <Text weight={theme.typography.weights.bold}>{render('Header')}</Text>
                            <span className="tableHeaderWrapperSortedBox">
                              {/* eslint-disable */}
                              {canSort ? (
                                <>
                                  <Icon
                                    icon={Icon.icons.chevronUp}
                                    className={cx(
                                      'tableHeaderWrapperSortedBoxIcon',
                                      isSortedDesc === true && 'tableHeaderWrapperSortedBoxIconActive',
                                    )}
                                    disabled={isSortedDesc === false}
                                  />
                                  <Icon
                                    icon={Icon.icons.chevronDown}
                                    className={cx(
                                      'tableHeaderWrapperSortedBoxIcon',
                                      isSortedDesc === false && 'tableHeaderWrapperSortedBoxIconActive',
                                    )}
                                    disabled={isSortedDesc === true}
                                  />
                                </>
                              ) : (
                                ''
                              )}
                              {/* eslint-enable */}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </>
                </tr>
              );
            })}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              const handleIconClick = () =>
                setOpenColumns((prevState) => {
                  const result = {
                    isOpen: true,
                    id: row.id,
                  };
                  const index = prevState.findIndex((innerState) => innerState.id === row.id);
                  if (index !== -1) {
                    const findObj = prevState.find((innerState) => innerState.id === row.id);
                    findObj.isOpen = !findObj.isOpen;
                    return [...prevState];
                  }
                  return [...prevState, result];
                });

              return (
                <React.Fragment key={idGenerator()}>
                  <tr {...row.getRowProps()} className={cx('bodyTr')}>
                    {Boolean(currentPriority) && (
                      <td>
                        <Icon icon={Icon.icons.plus} className="bodyTrIcon" onClick={handleIconClick} />
                      </td>
                    )}
                    {row.cells.map((cell) => {
                      const isRenderColumn = cell.column.priority >= currentPriority;
                      return isRenderColumn ? (
                        <td key={idGenerator()} {...cell.getCellProps()}>
                          <Text>{cell.render('Cell')}</Text>
                        </td>
                      ) : null;
                    })}
                  </tr>

                  {Boolean(currentPriority) && openColumns.find((obj) => obj.id === row.id)?.isOpen ? (
                    <tr>
                      <td />
                      <td colSpan={row.cells.length - currentPriority - 1} className="bodyMainHiddenTd">
                        <table>
                          <tbody>
                            {row.cells.reverse().map((cell) => {
                              if (cell.column.priority >= currentPriority) {
                                return null;
                              }
                              return (
                                <tr key={idGenerator()}>
                                  <th>{cell.render('Header')}</th>
                                  <td className="bodyMainHiddenTdInnerData">
                                    {cell.column.priority >= 0 ? <span>{cell.render('Cell')}</span> : null}
                                  </td>
                                </tr>
                              );
                            })}
                          </tbody>
                        </table>
                      </td>
                    </tr>
                  ) : null}
                </React.Fragment>
              );
            })}
          </tbody>
        </table>
      </Styles>
    );
  },
);
