export const sizeToString = (size?: number | string): string | undefined => {
  if (!size) return undefined;
  if (typeof size === 'number') return `${size}px`;
  return size;
};
