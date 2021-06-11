export const breakpoints = {
  xs: '0',
  sm: '600px',
  md: '960px',
  lg: '1280px',
  xl: '1920px',
};

// export const breakpoints = {
//   xs: '0',
//   s: '600px',
//   m: '960px',
//   l: '1280px',
//   xl: '1920px',
// };

export const gridLayout = {
  xl: { bottom: '1920px', gridSize: 12, gutter: '24px' },
  lg: { bottom: '1280px', break: '1920px', gridSize: 12, gutter: '24px' },
  md: { bottom: '960px', break: '1280px', gridSize: 12, gutter: '24px' },
  sm: { bottom: '600px', break: '960px', gridSize: 12, gutter: '16px' },
  xs: { bottom: '1px', break: '600px', gridSize: 12, gutter: '16px' },
};
