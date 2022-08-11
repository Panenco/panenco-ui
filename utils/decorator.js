// eslint-disable-next-line import/no-unresolved
import * as React from 'react';
// eslint-disable-next-line import/no-unresolved
import { storiesOf } from '@storybook/react';
// import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'components/theme-provider';
import ScreenDimensions from './ScreenDimensions';
// import defaultTheme from 'themes/default';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const decorator = (title) =>
  storiesOf(title, module)
    // .addDecorator(withKnobs)
    .addDecorator((story) => (
      <ThemeProvider>{title === 'Grid' ? <ScreenDimensions>{story()}</ScreenDimensions> : story()}</ThemeProvider>
    ));
