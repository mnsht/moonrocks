import React from 'react';
import { storiesOf } from '@storybook/react';

import Pagination from './';

const stories = storiesOf('2. Simple|Pagination', module);

stories.add('default', () => {
  return (
    <Pagination
      pages={4}
      onChange={newPage => console.log('PAGINATION', newPage)}
    />
  );
});

stories.add('with current page set', () => {
  return (
    <Pagination
      pages={7}
      current={3}
      onChange={newPage => console.log('PAGINATION', newPage)}
    />
  );
});
