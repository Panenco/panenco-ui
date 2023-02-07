# ⚠️ Will be DEPRECATED!!! soon ⚠️

Support for this package will be discontinued in the near future. Consider migrating to [Material UI](https://material-ui.com/).

# Panenco UI

Panenco UI is our React component library created to unify how we create user interfaces.

## Installation

Run one of the following commands to add Panenco UI to your project:

```
yarn add @panenco/ui
```

Peer dependencies:

- classnames
- react
- react-dom
- react-router-dom
- styled-components

## Usage

To start importing and using components in your project, you need the following:

- Import css of **Panenco UI** from `@panenco/ui/lib/styles.css`. It could be any way of global import of styles into your project. For instance, using `import` in js with a proper loader or using `@import` in your `css`.
- Include Panenco UI icons by importing `@panenco/ui/lib/spritesheet.svg` as a file (to obtain its URL and be able to inject it to DOM asynchronously) and pass it to the `injectIcons` function as shown below.
- Wrap your application with the `ThemeProvider` component from `styled-components` and pass the theme to it.

```javascript
import React from 'react';
import { render } from 'react-dom';
import AppContainers from 'containers';
import { ThemeProvider } from 'styled-components';
import { injectIcons } from '@panenco/ui';
import { theme } from './theme';

import '@panenco/ui/lib/styles.css';
import svgSprite from '!file-loader!@panenco/ui/lib/spritesheet.svg';

injectIcons(svgSprite);

const App = () => (
  <ThemeProvider theme={theme}>
    <AppContainers />
  </ThemeProvider>
);

render(<App />, document.getElementById('root'));
```

### Theme definition

A theme is just a nested object with properties defining the appearance of your UI. It's passed to the `ThemeProvider` component from `styled-components`, and then it's available in all components of Panenco UI. The theme is defined as:

```typescript
type PUITheme = {
  colors: PUIColors;
  typography: {
    sizes: PUISizes;
    weights: PUIWeights;
  };
};
```

There are two properties: `colors` and `typography`.

#### `colors` definition

Colors that are defined within a theme are represented with the following type:

```typescript
export type PUIColors = {
  alert: string;
  error: string;
  success: string;
  primary200: string;
  primary500: string;
  primary700: string;
  primary900: string;
  base100: string;
  base200: string;
  base300: string;
  base400: string;
  base500: string;
  base600: string;
  base700: string;
  base800: string;
  base900: string;
};
```

Also, you can override theme colors:

```typescript
colors: PUIColors;
```

#### `typography` definition

Typography consists of two properties: `sizes` and `weights`. They are used as a base for the `Text` component. The setting of these properties impacts all text sizes in all components around Panenco UI. Also, when using custom fonts, it's highly recommended to set the proper `weights` of the font you use.

```typescript
export type PUIWeights = {
  thin: number;
  light: number;
  regular: number;
  medium: number;
  bold: number;
  black: number;
};

export type TextSize = { textSize: string; lineHeight: string | number };

export type PUISizes = {
  xs: TextSize;
  s: TextSize;
  m: TextSize;
  l: TextSize;
  xl: TextSize;
  h3: TextSize;
  h2: TextSize;
  h1: TextSize;
};
```

### Styles injection order

**Note**: `styled-components` inject their styles at the bottom of the HTML `<head>`, which gives `@panenco/ui` precedence over your custom styles. To remove the need for `!important`, you need to change the CSS injection order using `useInjectStylesFirst` hook imported from `@panenco/ui`

```typescript
import { useInjectStylesFirst } from '@panenco/ui';

const App = () => {
  useInjectStylesFirst();
```

## Exported external modules (deprecated)

- react-focus-lock: https://github.com/theKashey/react-focus-lock
