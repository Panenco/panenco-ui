import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, Link, SelectInput } from 'components';
import { generateItems } from './generateItems';
import { PUITheme, ThemeMode } from '../../utils/types';
import { StyledPagination, StyledListPagination } from './styles';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  [key: string]: any;
  totalItems?: number;
  perPage?: number;
  formatUrl?: any;
  currentPage?: number;
  disabled?: boolean;
  contentBeforeSelect?: string;
  options?: any;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  showLastButton?: boolean;
  showFirstButton?: boolean;
  onPagination?: any;
  type?: 'table' | 'list';
  variant?: 'contained' | 'outlined' | 'text';
}

export interface PaginationComponentProps extends PaginationProps {
  currentPage: number;
  totalItems: number;
  mode: ThemeMode;
  theme: PUITheme;
  from: number;
  to: number;
  setPerPage: (val: number) => void;
  pagesAmount: number;
  isFirst: boolean;
  isLast: boolean;
  setCurrentPage: (val: number) => void;
  pagesOptions: { value: number; label: number }[];
}

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
  options,
  onPagination,
  totalItems,
  from,
  to,
  perPage,
  setPerPage,
  currentPage,
  pagesAmount,
  isFirst,
  disabled,
  setCurrentPage,
  formatUrl,
  pagesOptions,
  isLast,
  ...otherProps
}: PaginationComponentProps): JSX.Element => (
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
        options={options}
        className="paginationSelect"
        id="perPage"
        name="perPage"
        isSearchable={false}
        styles={additionStyles()}
        isDisabled={disabled}
        onChange={onPagination || ((option): void => setPerPage(option.value))}
        value={options.find((option) => Number(option.value) === Number(perPage))}
      />
      <div className={cx('paginationDivider', 'paginationDividerLeft')} />
      <Text size={theme.typography.sizes.m} color={theme.colors.primary} className="paginationText">
        {`${totalItems > 0 ? from : 0}-${to} of ${totalItems} items`}
      </Text>
    </div>
    <div className="paginationSection">
      <Text size={theme.typography.sizes.m} color={theme.colors.primary} className="paginationText">
        {`${currentPage + 1} of ${pagesAmount} pages`}
      </Text>
      <div className={cx('paginationDivider', 'paginationDividerRight')} />
      <Link
        className={cx('paginationButton', (isFirst || disabled) && 'paginationButtonDisabled')}
        onClick={(): void => {
          setCurrentPage(currentPage - 1);
        }}
        to={
          typeof formatUrl === 'object'
            ? { ...formatUrl, pathname: formatUrl.pathname(currentPage) }
            : formatUrl(currentPage)
        }
      >
        <Icon icon={Icon.icons.chevronLeft} className="paginationButtonIcon" />
      </Link>
      <SelectInput
        options={pagesOptions}
        className="paginationSelect"
        id="page"
        name="page"
        isSearchable={false}
        styles={additionStyles()}
        isDisabled={disabled}
        onChange={onPagination || ((option): void => setCurrentPage(option.value))}
        value={pagesOptions.find((option) => Number(option.value) === Number(currentPage))}
      />
      <Link
        className={cx('paginationButton', (isLast || disabled) && 'paginationButtonDisabled')}
        onClick={(): void => {
          setCurrentPage(currentPage + 1);
        }}
        to={
          typeof formatUrl === 'object'
            ? { ...formatUrl, pathname: formatUrl.pathname(currentPage + 2) }
            : formatUrl(currentPage + 2)
        }
      >
        <Icon icon={Icon.icons.chevronRight} className="paginationButtonIcon" />
      </Link>
    </div>
  </StyledPagination>
);

const ListPagination = ({
  pagesAmount,
  currentPage,
  formatUrl,
  setCurrentPage,
  isFirst,
  isLast,
  disabled,
  className,
  theme,
  mode,
  variant,
  ...otherProps
}: PaginationComponentProps): JSX.Element => {
  const items = generateItems({ pagesAmount, currentPage: currentPage + 1, ...otherProps });

  const renderListItem = (item: string | number): JSX.Element => {
    switch (item) {
      case 'ellipsis':
        return <div className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}>...</div>;
      case 'first':
        return (
          <Link
            className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}
            onClick={(): void => {
              setCurrentPage(0);
            }}
            to={typeof formatUrl === 'object' ? { ...formatUrl, pathname: formatUrl.pathname(1) } : formatUrl(1)}
          >
            First
          </Link>
        );
      case 'last':
        return (
          <Link
            className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}
            onClick={(): void => {
              setCurrentPage(pagesAmount - 1);
            }}
            to={
              typeof formatUrl === 'object'
                ? { ...formatUrl, pathname: formatUrl.pathname(pagesAmount) }
                : formatUrl(pagesAmount)
            }
          >
            Last
          </Link>
        );
      case 'previous':
        return (
          <Link
            className={cx('paginationListItem', (isFirst || disabled) && 'paginationButtonDisabled')}
            onClick={(): void => {
              setCurrentPage(currentPage - 1);
            }}
            to={
              typeof formatUrl === 'object'
                ? { ...formatUrl, pathname: formatUrl.pathname(currentPage) }
                : formatUrl(currentPage)
            }
          >
            <Icon icon={Icon.icons.chevronLeft} className="paginationButtonIcon" />
            {variant === 'text' && <Text className="paginationButtonLeftText">Previous</Text>}
          </Link>
        );
      case 'next':
        return (
          <Link
            className={cx('paginationListItem', (isLast || disabled) && 'paginationButtonDisabled')}
            onClick={(): void => {
              setCurrentPage(currentPage + 1);
            }}
            to={
              typeof formatUrl === 'object'
                ? { ...formatUrl, pathname: formatUrl.pathname(currentPage + 2) }
                : formatUrl(currentPage + 2)
            }
          >
            {variant === 'text' && <Text className="paginationButtonRightText">Next</Text>}
            <Icon icon={Icon.icons.chevronRight} className="paginationButtonIcon" />
          </Link>
        );
      default:
        return (
          <Link
            className={cx(
              'paginationListItem',
              disabled && 'paginationButtonDisabled',
              currentPage === (item as number) - 1 && 'paginationListItemActive',
            )}
            onClick={(): void => {
              setCurrentPage((item as number) - 1);
            }}
            to={typeof formatUrl === 'object' ? { ...formatUrl, pathname: formatUrl.pathname(item) } : formatUrl(item)}
          >
            {item}
          </Link>
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
  totalItems = 150,
  perPage: perPageProp = 12,
  formatUrl = (path?: any): string => path,
  currentPage: currentPageProp = 0,
  disabled = false,
  options = defaultOptions,
  type = 'list',
  variant = 'contained',
  ...otherProps
}: PaginationProps): JSX.Element => {
  const [perPage, setPerPage] = React.useState(perPageProp);
  const [currentPage, setCurrentPage] = React.useState(currentPageProp);
  const from = currentPage * perPage + 1;

  const isFirst = Number(currentPage) === 0;
  const isLast = totalItems <= perPage * currentPage + Number(perPage);
  const pagesAmount = Math.ceil(totalItems / perPage);
  const pagesOptions = [...Array(pagesAmount)].map((page, index) => ({ value: index, label: index + 1 }));

  const to = !isLast ? perPage * currentPage + Number(perPage) : totalItems;
  const theme = useTheme();
  const { mode } = useMode();
  const PaginationComponent = type === 'table' ? TablePagination : ListPagination;

  return (
    <PaginationComponent
      mode={mode}
      theme={theme}
      contentBeforeSelect={contentBeforeSelect}
      options={options}
      totalItems={totalItems}
      from={from}
      to={to}
      perPage={perPage}
      setPerPage={setPerPage}
      currentPage={currentPage}
      pagesAmount={pagesAmount}
      isFirst={isFirst}
      disabled={disabled}
      setCurrentPage={setCurrentPage}
      formatUrl={formatUrl}
      pagesOptions={pagesOptions}
      isLast={isLast}
      variant={variant}
      {...otherProps}
    />
  );
};
