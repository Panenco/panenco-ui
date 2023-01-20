import '!style-loader!css-loader!./styles.css';

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
