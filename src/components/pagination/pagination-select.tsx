import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, SelectInput, Button } from 'components';
import { generateItems } from './generateItems';
import { PUITheme, ThemeMode } from '../../utils/types';
import { StyledPagination, StyledListPagination } from './styles';

export type PaginationProps = {
  [key: string]: any;
  count?: number;
  rowsPerPage: number;
  page: number;
  disabled?: boolean;
  onButtonClick: (page: number) => void;
} & (
  | {
      type?: 'table';
      contentBeforeSelect?: string;
      rowsPerPageOptions?: any;
      onChangePage: any;
      onChangeRowsPerPage: any;
    }
  | {
      type?: 'list';
      hidePrevButton?: boolean;
      hideNextButton?: boolean;
      showLastButton?: boolean;
      showFirstButton?: boolean;
      variant?: 'contained' | 'outlined' | 'text';
    }
) &
  React.HTMLAttributes<HTMLDivElement>;

export type PaginationComponentProps = {
  page: number;
  count: number;
  mode: ThemeMode;
  theme: PUITheme;
  from: number;
  to: number;
  pagesAmount: number;
  isFirst: boolean;
  isLast: boolean;
  pagesOptions: { value: number; label: number }[];
} & PaginationProps;

const defaultOptions = [
  { label: '12', value: '12' },
  { label: '24', value: '24' },
  { label: '36', value: '36' },
  { label: '48', value: '48' },
];

const additionStyles = () => ({
  valueContainer: () => ({
    padding: 0,
    justifyContent: 'center',
  }),
  control: () => ({
    minHeight: '28px',
    padding: '0 5px',
  }),
  dropdownIndicator: () => ({
    padding: 0,
    width: '16px',
  }),
  option: () => ({
    paddingTop: '5px',
    paddingBottom: '5px',
  }),
});

const TablePagination = ({
  mode,
  theme,
  className,
  contentBeforeSelect,
  rowsPerPageOptions,
  onChangePage,
  onChangeRowsPerPage,
  onButtonClick,
  count,
  from,
  to,
  rowsPerPage,
  page,
  pagesAmount,
  isFirst,
  disabled,
  pagesOptions,
  isLast,
  ...otherProps
}: PaginationComponentProps): JSX.Element => {
  return (
    <StyledPagination mode={mode} theme={theme} className={cx('pagination', className)} {...otherProps}>
      <div className="paginationSection">
        <Text
          size={theme.typography.sizes.m}
          weight={theme.typography.weights.light}
          color={theme.colors.primary}
          className="paginationTextBeforeSelect"
        >
          {contentBeforeSelect}
        </Text>
        <SelectInput
          rowsPerPageOptions={rowsPerPageOptions}
          className="paginationSelect"
          id="rowsPerPage"
          name="rowsPerPage"
          isSearchable={false}
          styles={additionStyles()}
          isDisabled={disabled}
          onChange={onChangeRowsPerPage}
          value={rowsPerPageOptions.find((option) => Number(option.value) === Number(rowsPerPage))}
        />
        <div className={cx('paginationDivider', 'paginationDividerLeft')} />
        <Text size={theme.typography.sizes.m} color={theme.colors.primary} className="paginationText">
          {`${count > 0 ? from : 0}-${to} of ${count} items`}
        </Text>
      </div>
      <div className="paginationSection">
        <Text size={theme.typography.sizes.m} color={theme.colors.primary} className="paginationText">
          {`${page + 1} of ${pagesAmount} pages`}
        </Text>
        <div className={cx('paginationDivider', 'paginationDividerRight')} />
        <Button
          className="paginationButton"
          disabled={isFirst || disabled}
          iconLeft={Icon.icons.chevronLeft}
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onButtonClick(page - 1);
          }}
        />
        <SelectInput
          rowsPerPageOptions={pagesOptions}
          className="paginationSelect"
          id="page"
          name="page"
          isSearchable={false}
          styles={additionStyles()}
          isDisabled={disabled}
          onChange={onChangePage}
          value={pagesOptions.find((option) => Number(option.value) === Number(page))}
        />
        <Button
          className="paginationButton"
          disabled={isLast || disabled}
          iconRight={Icon.icons.chevronRight}
          iconClassName={cx('paginationButtonIcon', 'paginationButtonIconNoMargin')}
          onClick={(): void => {
            onButtonClick(page + 1);
          }}
        />
      </div>
    </StyledPagination>
  );
};

const ListPagination = ({
  pagesAmount,
  page,
  isFirst,
  isLast,
  disabled,
  className,
  theme,
  mode,
  variant,
  onButtonClick,
  ...otherProps
}: PaginationComponentProps): JSX.Element => {
  const items = generateItems({ pagesAmount, currentPage: page + 1, ...otherProps });

  const renderListItem = (item: string | number): JSX.Element => {
    switch (item) {
      case 'ellipsis':
        return <div className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}>...</div>;
      case 'first':
        return (
          <Button className="paginationListItem" disabled={disabled} onClick={() => onButtonClick(0)}>
            First
          </Button>
        );
      case 'last':
        return (
          <Button className="paginationListItem" disabled={disabled} onClick={() => onButtonClick(pagesAmount - 1)}>
            Last
          </Button>
        );
      case 'previous':
        return (
          <Button
            className="paginationListItem"
            disabled={isFirst || disabled}
            iconLeft={Icon.icons.chevronLeft}
            iconClassName={cx('paginationButtonIcon', variant !== 'text' && 'paginationButtonIconNoMargin')}
            onClick={() => onButtonClick(page - 1)}
          >
            {variant === 'text' && <Text>Previous</Text>}
          </Button>
        );
      case 'next':
        return (
          <Button
            className="paginationListItem"
            disabled={isLast || disabled}
            iconRight={Icon.icons.chevronRight}
            iconClassName={cx('paginationButtonIcon', variant !== 'text' && 'paginationButtonIconNoMargin')}
            onClick={() => onButtonClick(page + 1)}
          >
            {variant === 'text' && <Text>Next</Text>}
          </Button>
        );
      default:
        return (
          <Button
            className={cx('paginationListItem', page === (item as number) - 1 && 'paginationListItemActive')}
            disabled={disabled}
            onClick={() => onButtonClick((item as number) - 1)}
          >
            {item}
          </Button>
        );
    }
  };

  return (
    <StyledListPagination
      mode={mode}
      theme={theme}
      variant={variant}
      className={cx('pagination', className)}
      {...otherProps}
    >
      {items.map((item) => renderListItem(item))}
    </StyledListPagination>
  );
};

export const PaginationSelect = ({
  contentBeforeSelect = 'Show rows:',
  count = 150,
  rowsPerPage = 12,
  onButtonClick = () => {},
  page = 0,
  disabled = false,
  rowsPerPageOptions = defaultOptions,
  type = 'list',
  variant = 'contained',
  ...otherProps
}: PaginationProps): JSX.Element => {
  const from = page * rowsPerPage + 1;

  const isFirst = Number(page) === 0;
  const isLast = count <= rowsPerPage * page + Number(rowsPerPage);
  const pagesAmount = Math.ceil(count / rowsPerPage);
  const pagesOptions = [...Array(pagesAmount)].map((_, index) => ({ value: index, label: index + 1 }));

  const to = !isLast ? rowsPerPage * page + Number(rowsPerPage) : count;
  const theme = useTheme();
  const { mode } = useMode();
  const PaginationComponent = type === 'table' ? TablePagination : ListPagination;

  return (
    <PaginationComponent
      mode={mode}
      theme={theme}
      contentBeforeSelect={contentBeforeSelect}
      rowsPerPageOptions={rowsPerPageOptions}
      count={count}
      from={from}
      to={to}
      rowsPerPage={rowsPerPage}
      page={page}
      pagesAmount={pagesAmount}
      isFirst={isFirst}
      disabled={disabled}
      onButtonClick={onButtonClick}
      pagesOptions={pagesOptions}
      isLast={isLast}
      variant={variant}
      {...otherProps}
    />
  );
};
