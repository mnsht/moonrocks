import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import Header from './';

const stories = storiesOf('2. Simple|Header', module);

stories.addDecorator(withKnobs);

const links = {
  left: [],
  right: []
};

const user = {};

stories.add('default', () => {
  const logo = text(
    'Logo',
    'https://scholarraise.com/static/media/logo.8ecccc62.svg',
    'Main'
  );
  const variant = select(
    'Variant',
    ['light', 'dark', 'transparent'],
    'light',
    'Main'
  );

  return <Header logo={logo} links={links} user={user} variant={variant} />;
});
