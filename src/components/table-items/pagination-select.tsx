import * as React from 'react';
import * as cx_ from 'classnames';
import { Link } from 'react-router-dom';
import { useTheme } from 'utils/hooks';
import { Text } from 'components/text';

import { Icon } from 'components/icon';
import s from './styles.scss';

const cx = cx_;

interface Props {
  totalItems?: number;
  onPagination?: () => void;
  perPage?: number;
  formatUrl?: any;
  className?: string;
  currentPage?: number;
  disabled?: boolean;
}

const PaginationSelect: React.FunctionComponent<Props> = (props: Props) => {
  const { totalItems = 0, perPage = 10, className, formatUrl = '', currentPage = 1, disabled = false } = props;
  const from = perPage * currentPage + 1;
  const isFirst = currentPage === 0;
  const isLast = totalItems <= perPage * currentPage + perPage;
  const to = !isLast ? perPage * currentPage + perPage : totalItems;
  const theme = useTheme();

  return (
    <div className={cx(s.pagination, className)}>
      <Text size={theme.typography.sizes.m} weight={theme.typography.weights.light} color={theme.colors.secondary}>
        Rows per page:
      </Text>
      <Text
        size={theme.typography.sizes.m}
        weight={theme.typography.weights.light}
        color={theme.colors.secondary}
        className={s.paginationText}
      >
        {`${totalItems > 0 ? from : 0}-${to} of ${totalItems}`}
      </Text>
      <Link
        className={cx(s.paginationButton, (isFirst || disabled) && s.paginationButtonDisabled)}
        to={formatUrl(currentPage)}
      >
        <Icon icon={Icon.icons.chevronLeft} className={s.paginationButtonIcon} />
      </Link>
      <Link
        className={cx(s.paginationButton, (isLast || disabled) && s.paginationButtonDisabled)}
        to={formatUrl(currentPage + 2)}
      >
        <Icon icon={Icon.icons.chevronRight} className={s.paginationButtonIcon} />
      </Link>
    </div>
  );
};

export { PaginationSelect };
