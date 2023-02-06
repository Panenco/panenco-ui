import '!style-loader!css-loader!./styles.css';
import { ThemeProvider } from 'styled-components';

import theme from '../src/themes/default';

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
    </ThemeProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewMode: 'docs',
  previewTabs: { 
    'storybook/docs/panel': {
      index: -1,
    },
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
