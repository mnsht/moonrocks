import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Form from './';

const stories = storiesOf('2. Simple|Form', module);

stories.addDecorator(withKnobs);

const createPage = num => [
  {
    name: `firstName-${num}`,
    placeholder: 'First name',
    initialValue: 'Wesley',
    type: 'text',
    validation: {
      min: 2,
      max: 50,
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `lastName-${num}`,
    placeholder: 'Last name',
    initialValue: 'Belden',
    type: 'text',
    validation: {
      min: 4,
      max: 30,
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `email-${num}`,
    placeholder: 'Email address',
    type: 'email',
    tooltip: 'Make tooltips great again',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `ssn-${num}`,
    placeholder: 'Social security number',
    type: 'ssn',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `phone-${num}`,
    placeholder: 'Phone number',
    type: 'phone',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  }
];

const singleForm = {
  submit: values => console.log('SUBMIT', values),
  button: 'Submit form',
  forms: [createPage(0)]
};

const multipleForm = {
  submit: values => console.log('SUBMIT', values),
  button: 'Submit form',
  startAt: 1,
  forms: [createPage(0), createPage(1), createPage(2)]
};

stories.add('default', () => {
  return <Form {...singleForm} />;
});

stories.add('as a form wizard', () => {
  const steps = boolean('Should show steps?', true, 'Main');

  return <Form {...multipleForm} showSteps={steps} />;
});
