import React from 'react';
import { ThemeProvider } from 'styled-components';
import StoryRouter from 'storybook-react-router';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';

import theme from '../src/theme';

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

addDecorator(StoryRouter());

const themeBreakpoints = {
  mobile: {
    name: 'Theme - Mobile',
    type: 'mobile',
    styles: {
      width: `${parseInt(theme.breakpoints[0]) / 2}em`,
      height: 'calc(100% - 24px)'
    }
  },
  tablet: {
    name: 'Theme - Tablet',
    type: 'tablet',
    styles: {
      width: theme.breakpoints[0],
      height: 'calc(100% - 24px)'
    }
  },
  desktop: {
    name: 'Theme - Desktop',
    type: 'desktop',
    styles: {
      width: theme.breakpoints[1],
      height: 'calc(100% - 24px)'
    }
  },
  widescreen: {
    name: 'Theme - Widescreen',
    type: 'desktop',
    styles: {
      width: theme.breakpoints[2],
      height: 'calc(100% - 24px)'
    }
  }
};

addParameters({
  viewport: {
    defaultViewport: 'widescreen',
    viewports: {
      ...themeBreakpoints,
      ...INITIAL_VIEWPORTS
    }
  }
});

addParameters({
  options: {
    panelPosition: 'right'
  }
});

const req = require.context('../src', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
