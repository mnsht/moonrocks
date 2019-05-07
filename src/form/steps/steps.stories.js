import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, button } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';

import Steps from './';

const stories = storiesOf('2. Simple|Form/Steps', module);

const store = new Store({
  steps: [
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
  ]
});

stories.addDecorator(withKnobs);

stories.add('default', () => {
  button('Mark step 1 complete', () => {
    const steps = [...store.get('steps')];
    steps[0].complete = true;
    steps[1].ready = true;

    store.set({ steps });
  });

  button('Mark step 2 complete', () => {
    const steps = [...store.get('steps')];
    steps[0].complete = true;
    steps[1].ready = true;
    steps[1].complete = true;
    steps[2].ready = true;

    store.set({ steps });
  });

  button('Mark step 3 complete', () => {
    const steps = [...store.get('steps')];
    steps[0].complete = true;
    steps[1].ready = true;
    steps[1].complete = true;
    steps[2].ready = true;
    steps[2].complete = true;

    store.set({ steps });
  });

  return (
    <State store={store}>
      {({ steps }) => (
        <Steps
          steps={steps}
          onChange={newPage => console.log('CURRENT STEP', newPage)}
        />
      )}
    </State>
  );
});
