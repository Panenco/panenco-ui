interface UsePaginationProps {
  page: number;
  count: number;
  rowsPerPage: number;
}

export const usePagination = ({page, count, rowsPerPage}: UsePaginationProps): [boolean, boolean, number] => {
  const isFirst = Number(page) === 0;
  const isLast = count <= rowsPerPage * page + Number(rowsPerPage);
  const pagesAmount = Math.ceil(count / rowsPerPage);

  return [isFirst, isLast, pagesAmount];
};
