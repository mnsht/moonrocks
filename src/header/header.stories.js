import React from 'react';
import { storiesOf } from '@storybook/react';

import Header from './';

const stories = storiesOf('2. Simple|Header', module);

const links = {
  left: [],
  right: []
};

const user = {};

stories.add('default', () => {
  return <Header links={links} user={user} />;
});
