import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, Link, SelectInput } from 'components';
import { generateItems } from './generateItems';
import { PUITheme, ThemeMode } from '../../utils/types';
import { StyledPagination, StyledListPagination } from './styles';

export type PaginationProps = {
  [key: string]: any;
  totalItems?: number;
  perPage: number;
  currentPage: number;
  disabled?: boolean;
} & (
  | {
      type?: 'table';
      contentBeforeSelect?: string;
      options?: any;
      onPageChange: any;
      onPerPageChange: any;
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
  ({ component?: 'link'; formatUrl: any } | { component?: 'button'; onButtonClick: (page: number) => void }) &
  React.HTMLAttributes<HTMLDivElement>;

export type PaginationComponentProps = {
  currentPage: number;
  totalItems: number;
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
  options,
  onPageChange,
  onPerPageChange,
  onButtonClick,
  totalItems,
  from,
  to,
  perPage,
  currentPage,
  pagesAmount,
  isFirst,
  disabled,
  formatUrl,
  pagesOptions,
  isLast,
  component = 'link',
  ...otherProps
}: PaginationComponentProps): JSX.Element => {
  const PageComponent = component === 'link' ? Link : 'button';

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
          options={options}
          className="paginationSelect"
          id="perPage"
          name="perPage"
          isSearchable={false}
          styles={additionStyles()}
          isDisabled={disabled}
          onChange={onPerPageChange}
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
        <PageComponent
          className={cx('paginationButton', (isFirst || disabled) && 'paginationButtonDisabled')}
          onClick={(): void => {
            onButtonClick(currentPage - 1);
          }}
          to={
            typeof formatUrl === 'object'
              ? { ...formatUrl, pathname: formatUrl.pathname(currentPage) }
              : formatUrl(currentPage)
          }
        >
          <Icon icon={Icon.icons.chevronLeft} className="paginationButtonIcon" />
        </PageComponent>
        <SelectInput
          options={pagesOptions}
          className="paginationSelect"
          id="page"
          name="page"
          isSearchable={false}
          styles={additionStyles()}
          isDisabled={disabled}
          onChange={onPageChange}
          value={pagesOptions.find((option) => Number(option.value) === Number(currentPage))}
        />
        <PageComponent
          className={cx('paginationButton', (isLast || disabled) && 'paginationButtonDisabled')}
          onClick={(): void => {
            onButtonClick(currentPage + 1);
          }}
          to={
            typeof formatUrl === 'object'
              ? { ...formatUrl, pathname: formatUrl.pathname(currentPage + 2) }
              : formatUrl(currentPage + 2)
          }
        >
          <Icon icon={Icon.icons.chevronRight} className="paginationButtonIcon" />
        </PageComponent>
      </div>
    </StyledPagination>
  );
};

const ListPagination = ({
  pagesAmount,
  currentPage,
  formatUrl,
  isFirst,
  isLast,
  disabled,
  className,
  theme,
  mode,
  variant,
  component = 'link',
  onButtonClick,
  ...otherProps
}: PaginationComponentProps): JSX.Element => {
  const items = generateItems({ pagesAmount, currentPage: currentPage + 1, ...otherProps });
  const PageComponent = component === 'link' ? Link : 'button';

  const renderListItem = (item: string | number): JSX.Element => {
    switch (item) {
      case 'ellipsis':
        return <div className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}>...</div>;
      case 'first':
        return (
          <PageComponent
            className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}
            onClick={() => onButtonClick(0)}
            to={typeof formatUrl === 'object' ? { ...formatUrl, pathname: formatUrl.pathname(1) } : formatUrl(1)}
          >
            First
          </PageComponent>
        );
      case 'last':
        return (
          <PageComponent
            className={cx('paginationListItem', disabled && 'paginationButtonDisabled')}
            onClick={() => onButtonClick(pagesAmount - 1)}
            to={
              typeof formatUrl === 'object'
                ? { ...formatUrl, pathname: formatUrl.pathname(pagesAmount) }
                : formatUrl(pagesAmount)
            }
          >
            Last
          </PageComponent>
        );
      case 'previous':
        return (
          <PageComponent
            className={cx('paginationListItem', (isFirst || disabled) && 'paginationButtonDisabled')}
            onClick={() => onButtonClick(currentPage - 1)}
            to={
              typeof formatUrl === 'object'
                ? { ...formatUrl, pathname: formatUrl.pathname(currentPage) }
                : formatUrl(currentPage)
            }
          >
            <Icon icon={Icon.icons.chevronLeft} className="paginationButtonIcon" />
            {variant === 'text' && <Text className="paginationButtonLeftText">Previous</Text>}
          </PageComponent>
        );
      case 'next':
        return (
          <PageComponent
            className={cx('paginationListItem', (isLast || disabled) && 'paginationButtonDisabled')}
            onClick={() => onButtonClick(currentPage + 1)}
            to={
              typeof formatUrl === 'object'
                ? { ...formatUrl, pathname: formatUrl.pathname(currentPage + 2) }
                : formatUrl(currentPage + 2)
            }
          >
            {variant === 'text' && <Text className="paginationButtonRightText">Next</Text>}
            <Icon icon={Icon.icons.chevronRight} className="paginationButtonIcon" />
          </PageComponent>
        );
      default:
        return (
          <PageComponent
            className={cx(
              'paginationListItem',
              disabled && 'paginationButtonDisabled',
              currentPage === (item as number) - 1 && 'paginationListItemActive',
            )}
            onClick={() => onButtonClick((item as number) - 1)}
            to={typeof formatUrl === 'object' ? { ...formatUrl, pathname: formatUrl.pathname(item) } : formatUrl(item)}
          >
            {item}
          </PageComponent>
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
  perPage = 12,
  formatUrl = (path?: any): string => path,
  onButtonClick = () => {},
  currentPage = 0,
  disabled = false,
  options = defaultOptions,
  type = 'list',
  variant = 'contained',
  ...otherProps
}: PaginationProps): JSX.Element => {
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
      currentPage={currentPage}
      pagesAmount={pagesAmount}
      isFirst={isFirst}
      disabled={disabled}
      onButtonClick={onButtonClick}
      formatUrl={formatUrl}
      pagesOptions={pagesOptions}
      isLast={isLast}
      variant={variant}
      {...otherProps}
    />
  );
};
