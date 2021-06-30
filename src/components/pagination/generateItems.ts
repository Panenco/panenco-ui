interface GenerateItemsProps {
  boundaryCount?: number;
  pagesAmount?: number;
  hideNextButton?: boolean;
  hidePrevButton?: boolean;
  currentPage?: number;
  showFirstButton?: boolean;
  showLastButton?: boolean;
  siblingCount?: number;
}

export const generateItems = (props: GenerateItemsProps): (string | number)[] => {
  const {
    boundaryCount = 1,
    pagesAmount = 1,
    hideNextButton = false,
    hidePrevButton = false,
    currentPage = 1,
    showFirstButton = false,
    showLastButton = false,
    siblingCount = 1,
  } = props;

  const range = (start: number, end: number): number[] => {
    const length = end - start + 1;

    return Array.from({ length }, (_, i) => start + i);
  };

  const startPages = range(1, Math.min(boundaryCount, pagesAmount));
  const endPages = range(Math.max(pagesAmount - boundaryCount + 1, boundaryCount + 1), pagesAmount);

  const siblingsStart = Math.max(
    Math.min(currentPage - siblingCount, pagesAmount - boundaryCount - siblingCount * 2 - 1),
    boundaryCount + 2,
  );

  const siblingsEnd = Math.min(
    Math.max(currentPage + siblingCount, boundaryCount + siblingCount * 2 + 2),
    endPages[0] - 2,
  );

  const itemList = [
    ...(hidePrevButton ? [] : ['previous']),
    ...(showFirstButton ? ['first'] : []),
    ...startPages,

    // eslint-disable-next-line no-nested-ternary
    ...(siblingsStart > boundaryCount + 2
      ? ['ellipsis']
      : boundaryCount + 1 < pagesAmount - boundaryCount
      ? [boundaryCount + 1]
      : []),

    ...range(siblingsStart, siblingsEnd),

    // eslint-disable-next-line no-nested-ternary
    ...(siblingsEnd < pagesAmount - boundaryCount - 1
      ? ['ellipsis']
      : pagesAmount - boundaryCount > boundaryCount
      ? [pagesAmount - boundaryCount]
      : []),

    ...endPages,
    ...(showLastButton ? ['last'] : []),
    ...(hideNextButton ? [] : ['next']),
  ];

  return itemList;
};
