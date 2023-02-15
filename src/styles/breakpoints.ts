export const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '840px',
  lg: '1332px',
};

export const gridLayout = {
  lg: { bottom: '1332px', gridSize: 12, gutter: '24px' },
  md: { bottom: '840px', break: '1332px', gridSize: 12, gutter: '24px' },
  sm: { bottom: '600px', break: '840px', gridSize: 12, gutter: '16px' },
  xs: { bottom: '1px', break: '600px', gridSize: 12, gutter: '16px' },
};
