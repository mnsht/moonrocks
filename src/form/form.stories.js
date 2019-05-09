import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Form from './';

const stories = storiesOf('2. Simple|Form', module);

stories.addDecorator(withKnobs);

const singleForm = {
  submit: values => console.log('SUBMIT', values),
  button: 'Submit form',
  forms: [
    [
      {
        name: 'firstName',
        placeholder: 'First name',
        value: 'Wesley',
        type: 'text',
        validation: {
          min: 2,
          max: 50,
          required: true
        },
        width: [1, null, 1 / 3]
      },
      {
        name: 'lastName',
        placeholder: 'Last name',
        value: 'Belden',
        type: 'text',
        validation: {
          min: 4,
          max: 30,
          required: true
        },
        width: [1, null, 1 / 3]
      },
      {
        name: 'email',
        placeholder: 'Email address',
        type: 'email',
        tooltip: 'Make tooltips great again',
        validation: {
          required: true
        },
        width: [1, null, 1 / 3]
      },
      {
        name: 'ssn',
        placeholder: 'Social security number',
        type: 'ssn',
        validation: {
          required: true
        },
        width: [1, null, 1 / 3]
      }
    ]
  ]
};

const multipleForm = {};

stories.add('default', () => {
  return <Form {...singleForm} />;
});

stories.add('as a form wizard', () => {
  const steps = boolean('Should show steps?', true, 'Main');

  return <Form {...multipleForm} showSteps={steps} />;
});
