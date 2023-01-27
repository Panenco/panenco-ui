import * as React from 'react';
import cx from 'classnames';

import { Text, Button } from 'components';
import { generateItems } from './generateItems';
import { StyledListPagination } from './styles';
import { usePagination } from './usePagination';

export type PaginationProps = {
  [key: string]: any;
  count?: number;
  disabled?: boolean;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  locales?: {
    first: string;
    goToFirstPage: string;
    goToLastPage: string;
    goToNextPage: string;
    goToPage: (page: number) => string;
    goToPreviousPage: string;
    last: string;
    next: string;
    previous: string;
  };
  onButtonClick: (page: number) => void;
  page: number;
  rowsPerPage: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
} & React.HTMLAttributes<HTMLDivElement>;

export const Pagination = ({
  count = 150,
  rowsPerPage = 12,
  onButtonClick = (): void => {},
  page = 0,
  disabled = false,
  className,
  variant = 'contained',
  locales = {
    first: 'First',
    last: 'Last',
    previous: 'Previous',
    next: 'Next',
    goToFirstPage: 'Go to the first page',
    goToLastPage: 'Go to the last page',
    goToNextPage: 'Go to the next page',
    goToPreviousPage: 'Go to the previous page',
    goToPage: (pageNumber: number): string => `Go to page ${pageNumber}`,
  },
  ...otherProps
}: PaginationProps): JSX.Element => {
  const [isFirst, isLast, pagesAmount] = usePagination({ page, count, rowsPerPage });

  const items = generateItems({ pagesAmount, currentPage: page + 1, ...otherProps });

  const renderListItem = (item: string | number): JSX.Element => {
    switch (item) {
      case 'ellipsis':
        return (
          <div
            className={cx('paginationListItem', 'paginationListItemEllipsis', disabled && 'paginationButtonDisabled')}
          >
            ...
          </div>
        );
      case 'first':
        return (
          <Button
            className='paginationListItem'
            disabled={disabled}
            onClick={(): void => onButtonClick(0)}
            aria-label={locales.goToFirstPage}
            title={locales.goToFirstPage}
          >
            {locales.first}
          </Button>
        );
      case 'last':
        return (
          <Button
            className='paginationListItem'
            disabled={disabled}
            onClick={(): void => onButtonClick(pagesAmount - 1)}
            aria-label={locales.goToLastPage}
            title={locales.goToLastPage}
          >
            {locales.last}
          </Button>
        );
      case 'previous':
        return (
          <Button
            className='paginationListItem'
            disabled={isFirst || disabled}
            iconLeft='chevronLeft'
            iconClassName={cx('paginationButtonIcon', variant !== 'text' && 'paginationButtonIconNoMargin')}
            onClick={(): void => onButtonClick(page - 1)}
            aria-label={locales.goToPreviousPage}
            title={locales.goToPreviousPage}
          >
            {variant === 'text' && <Text>{locales.previous}</Text>}
          </Button>
        );
      case 'next':
        return (
          <Button
            className='paginationListItem'
            disabled={isLast || disabled}
            iconRight='chevronRight'
            iconClassName={cx('paginationButtonIcon', variant !== 'text' && 'paginationButtonIconNoMargin')}
            onClick={(): void => onButtonClick(page + 1)}
            aria-label={locales.goToNextPage}
            title={locales.goToNextPage}
          >
            {variant === 'text' && <Text>{locales.next}</Text>}
          </Button>
        );
      default:
        return (
          <Button
            className={cx('paginationListItem', page === (item as number) - 1 && 'paginationListItemActive')}
            disabled={disabled}
            onClick={(): void => onButtonClick((item as number) - 1)}
            aria-label={locales.goToPage(item as number)}
            title={locales.goToPage(item as number)}
            aria-current={page === (item as number) - 1}
          >
            {item}
          </Button>
        );
    }
  };

  return (
    <StyledListPagination variant={variant} className={cx('pagination', className)} {...otherProps}>
      {items.map((item, i) => (
        // eslint-disable-next-line
        <React.Fragment key={`item-${i}`}>{renderListItem(item)}</React.Fragment>
      ))}
    </StyledListPagination>
  );
};
