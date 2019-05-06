import React from 'react';
import { storiesOf } from '@storybook/react';

import Steps from './';

const stories = storiesOf('Steps', module);

stories.add('default', () => {
  return (
    <Steps pages={4} onChange={newPage => console.log('STEPS', newPage)} />
  );
});

stories.add('with current page set', () => {
  return (
    <Steps
      pages={7}
      current={3}
      onChange={newPage => console.log('STEPS', newPage)}
    />
  );
});
