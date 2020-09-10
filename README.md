# Panenco UI

Panenco UI is our own design system that is created to unify the way we create user interfaces.

It provides you a way for it's customization via Theming and Modes.

# Principles

### Theme

Theme - is a color pallete used for determination of whole project styling. While Panenco UI has it's crosstheme styles, that styles are project dependent. Choose or define Theme according to your project's branding colors, etc.

### Mode (Dark/Light appearence)

Each theme has two different appearences. So interfaces built on top of **Panenco UI** are ready to be used with `Light` or `Dark` modes.

# Installation and usage

Before starting, please read about usage of Panenco Packages with Github Package registry. Also ensure you have at least read access on it.

### Install

In the project you'd like to add our lovely **Panenco UI** to, just add it as a depencency:

```sh
yarn add @panenco/ui
```

### Use

To start importing and using components in your project, you need:

- Import css of **Panenco UI** from `@panenco/ui/lib/styles.css`. It could be any way of global import of styles into your project. For instance, using `import` in js with propper loader or using `@import` in your `css`.
- Include Panenco UI icons by importing `@panenco/ui/lib/spritesheet.svg` as file (to obtain it's URL and be able to inject it to DOM asyncronously) and pass it to `injectIcons` function as shown below.
- Wrap your application with `ThemeProvider` component from `@panenco/ui` and pass theme and mode to it (optionally).

```javascript
import React from 'react';
import { render } from 'react-dom';
import AppContainers from 'containers';
import { ThemeProvider, injectIcons } from '@panenco/ui';
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

Theme is just a nested object with properties defining appearence of your UI.

```typescript
type PUITheme = {
  colors: PUIColors & {
    darkMode?: PUIModeColors;
    lightMode?: PUIModeColors;
  };
  typography: {
    sizes: PUISizes;
    weights: PUIWeights;
  };
};
```

There are two properties `colors` and `typography`.

#### `colors` definition

Colors that are defined within theme is represented with next type:

```typescript
export type PUIColors = {
  // project colors
  background50: string;
  accent500: string;
  hover700: string;
  header900: string;

  // root colors
  alert: string;
  error: string;
  success: string;
  outline: string;
  light: string;
  border: string;
  secondary: string;
  primary: string;
  dark: string;
};
```

Also you have an option to override theme colors dependending on current **mode**.

```typescript
colors: PUIColors & {
    darkMode?: PUIModeColors;
    lightMode?: PUIModeColors;
};
```

Each mode is represented by similar to `PUIColors` type with all colors optional. This behaviour makes possible changing colors of your components depending on mode.

#### `typograpty` definition

Typography consists of two properties: `sizes` and `weights`. They are used as a base for `Text` component. Setting of this properties has an impact on all text sizes in all components around Panenco UI. Also, when using custom fonts, it's highly recommended to set propper `weights` of the font you use.

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
