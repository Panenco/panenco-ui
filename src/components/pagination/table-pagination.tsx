import * as React from 'react';
import * as cx from 'classnames';

import { useTheme } from 'utils/hooks';
import { Text, SelectInput, Button } from 'components';
import { usePagination } from './usePagination';
import { StyledPagination } from './styles';
import { additionalStyles } from '../select/style';

interface PaginationOption {
  label: string;
  value: number;
}

export type TablePaginationProps = {
  [key: string]: any;
  contentBeforeSelect?: string;
  count?: number;
  disabled?: boolean;
  locales?: {
    currentPage: (currentPage: number, allPages: number) => string;
    displayingItems: (rangeStart: number, rangeEnd: number, count: number) => string;
    itemsPerPage: string;
  };
  onChangePage: (page: number | PaginationOption) => void;
  onChangeRowsPerPage: any;
  page: number;
  rowsPerPage: number;
  rowsPerPageOptions?: any;
  selectStyles?: {
    [key: string]: (...args) => { [k: string]: any };
  };
} & React.HTMLAttributes<HTMLDivElement>;

const defaultOptions = [
  { label: '12', value: 12 },
  { label: '24', value: 24 },
  { label: '36', value: 36 },
  { label: '48', value: 48 },
];

const customSelectStyles = (styles) => {
  const defaultStyles = {
    valueContainer: (provided, state) => ({
      padding: 0,
      justifyContent: 'center',
      ...additionalStyles('valueContainer', styles, provided, state),
    }),
    control: (provided, state) => ({
      minHeight: '48px',
      padding: '0 5px',
      ...additionalStyles('control', styles, provided, state),
    }),
    dropdownIndicator: (provided, state) => ({
      padding: 0,
      width: '16px',
      ...additionalStyles('dropdownIndicator', styles, provided, state),
    }),
    option: (provided, state) => ({
      paddingTop: '5px',
      paddingBottom: '5px',
      ...additionalStyles('option', styles, provided, state),
    }),
  };
  return Object.keys(styles)
    .filter((key) => !Object.keys(defaultStyles).includes(key))
    .reduce((res, key) => {
      return {
        ...res,
        [key]: styles[key],
      };
    }, defaultStyles);
};

export const TablePagination = ({
  count = 150,
  rowsPerPage = 12,
  page = 0,
  disabled = false,
  rowsPerPageOptions = defaultOptions,
  onChangeRowsPerPage,
  onChangePage,
  className,
  selectStyles = {},
  locales = {
    itemsPerPage: 'Items per page',
    displayingItems: (rangeStart: number, rangeEnd: number, pCount: number) =>
      `Displaying ${rangeStart}-${rangeEnd} of ${pCount} items`,
    currentPage: (currentPage: number, pagesAmount: number) => `${currentPage} of ${pagesAmount} pages`,
  },
  ...otherProps
}: TablePaginationProps): JSX.Element => {
  const [isFirst, isLast, pagesAmount] = usePagination({ page, count, rowsPerPage });
  const from = page * rowsPerPage + 1;
  const to = !isLast ? rowsPerPage * page + Number(rowsPerPage) : count;
  const pagesOptions = [...Array(pagesAmount)].map((_, index) => ({ value: index, label: index + 1 }));

  const rangeStart = count > 0 ? from : 0;
  const rangeEnd = to;

  const theme = useTheme();

  const rowsPerPageHandler = (option: PaginationOption): void => onChangeRowsPerPage(option.value);

  return (
    <StyledPagination theme={theme} className={cx('pagination', className)} {...otherProps}>
      <div className='paginationSection'>
        <Text
          size={theme.typography.sizes.m}
          weight={theme.typography.weights.light}
          color={theme.colors.base900}
          className='paginationText'
        >
          {locales.itemsPerPage}
        </Text>
        <SelectInput
          options={rowsPerPageOptions}
          className='paginationSelect'
          id='rowsPerPage'
          name='rowsPerPage'
          isSearchable={false}
          styles={customSelectStyles(selectStyles)}
          isDisabled={disabled}
          onChange={rowsPerPageHandler}
          value={rowsPerPageOptions.find((option) => Number(option.value) === Number(rowsPerPage))}
        />
        <Text size={theme.typography.sizes.m} color={theme.colors.base900} className='paginationText'>
          {locales.displayingItems(rangeStart, rangeEnd, count)}
        </Text>
      </div>
      <div className='paginationSection'>
        <Text size={theme.typography.sizes.m} color={theme.colors.base900} className='paginationText'>
          {locales.currentPage(page + 1, pagesAmount)}
        </Text>
        <Button
          className='paginationButton'
          disabled={isFirst || disabled}
          iconLeft='chevronLeft'
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onChangePage(page - 1);
          }}
        />
        <SelectInput
          options={pagesOptions}
          className='paginationSelect'
          id='page'
          name='page'
          isSearchable={false}
          styles={customSelectStyles(selectStyles)}
          isDisabled={disabled}
          onChange={(option): void => onChangePage(option.value)}
          value={pagesOptions.find((option) => Number(option.value) === Number(page))}
        />
        <Button
          className='paginationButton'
          disabled={isLast || disabled}
          iconRight='chevronRight'
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onChangePage(page + 1);
          }}
        />
      </div>
    </StyledPagination>
  );
};
