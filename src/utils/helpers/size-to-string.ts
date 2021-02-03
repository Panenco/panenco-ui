export const sizeToString = (size?: number | string): string | undefined => {
  if (typeof size === 'number') return `${size}px`;
  return size;
};
