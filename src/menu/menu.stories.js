import React from 'react';
import { storiesOf } from '@storybook/react';

import Menu from '.';

const stories = storiesOf('2. Simple|Menu', module);

const pages = [
  {
    title: 'Hello world',
    href: 'hello-world'
  },
  {
    title: 'Page',
    href: 'page'
  },
  {
    title: 'Page Two',
    href: 'page-two'
  },
  {
    title: 'Page Three',
    href: 'page-three'
  },
  {
    title: 'Another one',
    href: 'why-not'
  }
];

stories.add('default', () => {
  return (
    <Menu
      pages={pages}
      onChange={newPage =>
        console.log('MENU, maybe do a URL and content change?', newPage)
      }
    />
  );
});

stories.add('with current page set', () => {
  return (
    <Menu
      pages={pages}
      current={'page-two'}
      onChange={newPage =>
        console.log('MENU, maybe do a URL and content change?', newPage)
      }
    />
  );
});
