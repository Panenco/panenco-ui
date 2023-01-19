import 'styled-components';
import { PUITheme } from './src/utils/types';

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends PUITheme {}
}
