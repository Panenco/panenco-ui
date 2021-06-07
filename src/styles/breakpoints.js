export const breakpoints = {
  xs: '0',
  s: '600px',
  m: '720px',
  ml: '840px',
  l: '960px',
  xl: '1328px',
};

// export const breakpoints = {
//   xs: '0',
//   s: '600px',
//   m: '960px',
//   l: '1280px',
//   xl: '1920px',
// };

export const gridLayout = {
  xl: { bottom: '1328px', gridSize: 12, gutter: '24px' },
  l: { bottom: '960px', break: '1328px', gridSize: 12, gutter: '24px' },
  ml: { bottom: '840px', break: '960px', gridSize: 12, gutter: '24px' },
  m: { bottom: '720px', break: '840px', gridSize: 12, gutter: '24px' },
  s: { bottom: '600px', break: '720px', gridSize: 12, gutter: '16px' },
  xs: { bottom: '1px', break: '600px', gridSize: 12, gutter: '16px' },
};
