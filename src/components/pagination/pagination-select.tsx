import * as React from 'react';
import cx from 'classnames';
import { useTheme, useMode } from 'utils/hooks';
import { Text, Icon, Link, SelectInput } from 'components';
import { StyledPagination } from './styles';

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  totalItems?: number;
  onPagination?: () => void;
  perPage?: number;
  formatUrl?: any;
  currentPage?: number;
  disabled?: boolean;
  contentBeforeSelect?: string;
  options?: any;
}

const defaultOptions = [
  { label: '12', value: '12' },
  { label: '24', value: '24' },
  { label: '36', value: '36' },
  { label: '48', value: '48' },
];

const additionStyles = () => ({
  option: () => ({
    paddingTop: '5px',
    paddingBottom: '5px',
  }),
});

export const PaginationSelect = ({
  contentBeforeSelect = 'Rows per page:',
  totalItems = 48,
  perPage: perPageProp = 12,
  formatUrl = (path?: any) => '',
  currentPage: currentPageProp = 0,
  className,
  disabled = false,
  options = defaultOptions,
  ...otherProps
}: PaginationProps): JSX.Element => {
  const [perPage, setPerPage] = React.useState(perPageProp);
  const [currentPage, setCurrentPage] = React.useState(currentPageProp);
  const from = currentPage * perPage;

  const isFirst = Number(currentPage) <= 0;
  const isLast = totalItems <= perPage * currentPage + Number(perPage);
  // const prevValue = currentPage - perPage <= 0 ? 0 : currentPage - perPage;
  const to = !isLast ? perPage * currentPage + Number(perPage) : totalItems;
  const theme = useTheme();
  const { mode } = useMode();
  const prevPage = currentPage > 0 ? currentPage - 1 : 0;

  return (
    <StyledPagination mode={mode} theme={theme} className={cx('pagination', className)} {...otherProps}>
      <Text
        size={theme.typography.sizes.s}
        weight={theme.typography.weights.light}
        color={theme.colors.secondary}
        className="paginationTextBeforeSelect"
      >
        {contentBeforeSelect}
      </Text>
      <SelectInput
        options={options}
        className="paginationSelect"
        isSearchable={false}
        styles={additionStyles()}
        onChange={(option): void => setPerPage(option.value)}
        value={options.find((option) => Number(option.value) === Number(perPage))}
      />
      <Text size={theme.typography.sizes.s} color={theme.colors.secondary} className="paginationText">
        {`${totalItems > 0 ? from : 0}-${to} of ${totalItems}`}
      </Text>
      <Link
        className={cx('paginationButton', (isFirst || disabled) && 'paginationButtonDisabled')}
        onClick={(): void => {
          setCurrentPage(prevPage);
        }}
        to={formatUrl(prevPage)}
      >
        <Icon icon={Icon.icons.chevronLeft} className="paginationButtonIcon" />
      </Link>
      <Link
        className={cx('paginationButton', (isLast || disabled) && 'paginationButtonDisabled')}
        onClick={(): void => {
          setCurrentPage(currentPage + 1);
        }}
        to={formatUrl(currentPage + 1)}
      >
        <Icon icon={Icon.icons.chevronRight} className="paginationButtonIcon" />
      </Link>
    </StyledPagination>
  );
};
