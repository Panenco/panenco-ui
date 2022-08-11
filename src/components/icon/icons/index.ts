import * as iconsSm from './static-icons/16px';
import * as iconsMd from './static-icons/24px';
import * as iconsLg from './static-icons/28px';
import * as otherIcons from './static-icons/other-icons';

export const defaultIcons = {
  sm: { ...iconsSm, ...otherIcons },
  md: { ...iconsMd, ...otherIcons },
  lg: { ...iconsLg, ...otherIcons },
};
