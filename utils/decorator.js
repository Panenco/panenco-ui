import * as React from 'react';
import { storiesOf } from '@storybook/react';
// import { withKnobs } from '@storybook/addon-knobs';
import { withReadme, withDocs } from 'storybook-readme';
import { ThemeProvider } from 'components/theme-provider';
import { NotificationContainer } from 'components/notification';
import ScreenDimensions from './ScreenDimensions';
// import defaultTheme from 'themes/default';
// import { ThemeMode } from 'utils/types';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const decorator = (title, doc, readme) =>
  storiesOf(title, module)
    // .addDecorator(withKnobs)
    .addDecorator(withDocs(doc))
    .addDecorator(withReadme(readme))
    .addDecorator((story) => (
      <ThemeProvider>
        {title === 'Grid' ? <ScreenDimensions>{story()}</ScreenDimensions> : story()}
        <NotificationContainer />
      </ThemeProvider>
    ));
