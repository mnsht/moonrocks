import React from 'react';
import { storiesOf } from '@storybook/react';

import Steps from './';

const stories = storiesOf('2. Simple|Form/Steps', module);

const steps = [
  {
    complete: false,
    ready: true,
    title: 'Owner(s)',
    description: 'Define the administrators of this 529 account'
  },
  {
    complete: false,
    ready: false,
    title: 'Scholar',
    description: 'Tell us who the account is going to benefit'
  },
  {
    complete: false,
    ready: false,
    title: 'Confirm',
    description: 'Answer some security questions and confirm details'
  }
];

stories.add('default', () => {
  return (
    <Steps
      steps={steps}
      current={0}
      onChange={newPage => console.log('STEPS', newPage)}
    />
  );
});

stories.add('with current step set', () => {
  steps[0].complete = true;
  steps[1].ready = true;

  return (
    <Steps
      steps={steps}
      current={1}
      onChange={newPage => console.log('STEPS', newPage)}
    />
  );
});
