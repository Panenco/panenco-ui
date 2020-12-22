import { colors, weights, sizes } from 'styles';
import { PUITheme } from '../utils/types';

const defaultTheme: PUITheme = {
  colors: {
    ...colors,
    lightMode: colors,
    darkMode: colors,
  },
  typography: {
    weights,
    sizes,
  },
};

export default defaultTheme;
