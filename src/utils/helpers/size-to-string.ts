export const sizeToString = (size: number | string | undefined): string | undefined => {
  if (typeof size === 'number') return `${size}px`;
  return size;
};
