import { PUITheme } from 'utils/types';
import { colors, weights, sizes } from 'styles';

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
