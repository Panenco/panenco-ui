export const sizeToNumber = (size?: number | string): number | undefined => {
  if (!size) return undefined;
  if (typeof size === 'number') return size;
  return parseInt(size, 10);
};
