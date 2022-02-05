import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, SelectInput, Button } from 'components';
import { usePagination } from './usePagination';
import { StyledPagination } from './styles';
import { additionalStyles } from '../select/style'

interface PaginationOption {
  label: string;
  value: number;
}

export type TablePaginationProps = {
  [key: string]: any;
  count?: number;
  rowsPerPage: number;
  page: number;
  disabled?: boolean;
  contentBeforeSelect?: string;
  rowsPerPageOptions?: any;
  onChangePage: (page: number | PaginationOption) => void;
  onChangeRowsPerPage: any;
  locales?: { 
    itemsPerPage: string;
    displayingItems: (rangeStart: number, rangeEnd: number, count: number ) => string;
    currentPage: (currentPage: number, allPages: number) => string
  },
  selectStyles?: {
    [key: string]: (...args) => { [k: string]: any }
  } 
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
      ...additionalStyles('valueContainer', styles, provided, state)
    }),
    control: (provided, state) => ({
      minHeight: '48px',
      padding: '0 5px',
      ...additionalStyles('control', styles, provided, state)
    }),
    dropdownIndicator: (provided, state) => ({
      padding: 0,
      width: '16px',
      ...additionalStyles('dropdownIndicator', styles, provided, state)
    }),
    option: (provided, state) => ({
      paddingTop: '5px',
      paddingBottom: '5px',
      ...additionalStyles('option', styles, provided, state)
    }),
  }
  return Object.keys(styles).filter(key => !Object.keys(defaultStyles).includes(key)).reduce((res, key) => {
    return {
      ...res,
      [key]: styles[key]
    }
  },
  defaultStyles)
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
    displayingItems: (rangeStart: number, rangeEnd: number, pCount: number) => `Displaying ${rangeStart}-${rangeEnd} of ${pCount} items`,
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
  const { mode } = useMode();

  const rowsPerPageHandler = (option: PaginationOption): void => onChangeRowsPerPage(option.value);

  return (
    <StyledPagination mode={mode} theme={theme} className={cx('pagination', className)} {...otherProps}>
      <div className="paginationSection">
        <Text
          size={theme.typography.sizes.m}
          weight={theme.typography.weights.light}
          color={theme.colors.base900}
          className="paginationText"
        >
          {locales.itemsPerPage}
        </Text>
        <SelectInput
          options={rowsPerPageOptions}
          className="paginationSelect"
          id="rowsPerPage"
          name="rowsPerPage"
          isSearchable={false}
          styles={customSelectStyles(selectStyles)}
          isDisabled={disabled}
          onChange={rowsPerPageHandler}
          value={rowsPerPageOptions.find((option) => Number(option.value) === Number(rowsPerPage))}
        />
        <Text size={theme.typography.sizes.m} color={theme.colors.base900} className="paginationText">
          {locales.displayingItems(rangeStart, rangeEnd, count)}
        </Text>
      </div>
      <div className="paginationSection">
        <Text size={theme.typography.sizes.m} color={theme.colors.base900} className="paginationText">
          {locales.currentPage(page + 1, pagesAmount)}
        </Text>
        <Button
          className="paginationButton"
          disabled={isFirst || disabled}
          iconLeft={Icon.icons.chevronLeft}
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onChangePage(page - 1);
          }}
        />
        <SelectInput
          options={pagesOptions}
          className="paginationSelect"
          id="page"
          name="page"
          isSearchable={false}
          styles={customSelectStyles(selectStyles)}
          isDisabled={disabled}
          onChange={(option): void => onChangePage(option.value)}
          value={pagesOptions.find((option) => Number(option.value) === Number(page))}
        />
        <Button
          className="paginationButton"
          disabled={isLast || disabled}
          iconRight={Icon.icons.chevronRight}
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onChangePage(page + 1);
          }}
        />
      </div>
    </StyledPagination>
  );
};
