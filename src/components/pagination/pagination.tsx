import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, Button } from 'components';
import { generateItems } from './generateItems';
import { StyledListPagination } from './styles';
import { usePagination } from './usePagination';

export type PaginationProps = {
  [key: string]: any;
  count?: number;
  rowsPerPage: number;
  page: number;
  disabled?: boolean;
  onButtonClick: (page: number) => void;
  hidePrevButton?: boolean;
  hideNextButton?: boolean;
  showLastButton?: boolean;
  showFirstButton?: boolean;
  variant?: 'contained' | 'outlined' | 'text';
  locales: {
    first: string;
    last: string;
    previous: string;
    next: string;
  };
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
  },
  ...otherProps
}: PaginationProps): JSX.Element => {
  const [isFirst, isLast, pagesAmount] = usePagination({ page, count, rowsPerPage });

  const theme = useTheme();
  const { mode } = useMode();
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
          <Button className="paginationListItem" disabled={disabled} onClick={(): void => onButtonClick(0)}>
            {locales.first}
          </Button>
        );
      case 'last':
        return (
          <Button
            className="paginationListItem"
            disabled={disabled}
            onClick={(): void => onButtonClick(pagesAmount - 1)}
          >
            {locales.last}
          </Button>
        );
      case 'previous':
        return (
          <Button
            className="paginationListItem"
            disabled={isFirst || disabled}
            iconLeft={Icon.icons.chevronLeft}
            iconClassName={cx('paginationButtonIcon', variant !== 'text' && 'paginationButtonIconNoMargin')}
            onClick={(): void => onButtonClick(page - 1)}
          >
            {variant === 'text' && <Text>{locales.previous}</Text>}
          </Button>
        );
      case 'next':
        return (
          <Button
            className="paginationListItem"
            disabled={isLast || disabled}
            iconRight={Icon.icons.chevronRight}
            iconClassName={cx('paginationButtonIcon', variant !== 'text' && 'paginationButtonIconNoMargin')}
            onClick={(): void => onButtonClick(page + 1)}
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
      {items.map((item, i) => (
        // eslint-disable-next-line
        <React.Fragment key={`item-${i}`}>{renderListItem(item)}</React.Fragment>
      ))}
    </StyledListPagination>
  );
};
