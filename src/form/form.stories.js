import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import * as Yup from 'yup';

import Form from './';

const stories = storiesOf('2. Simple|Form', module);

stories.addDecorator(withKnobs);

const singleForm = {
  submit: values => console.log('SUBMIT', values),
  button: 'Submit form',
  initial: {
    firstName: 'Wesley',
    lastName: 'Belden',
    email: '' // NOTE: All fields need to have an initial value or be set to empty string to avoid React error
  },
  validation: Yup.object().shape({
    firstName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    lastName: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    email: Yup.string()
      .email('Invalid email')
      .required('Required')
  }),
  forms: [
    [
      {
        name: 'firstName',
        placeholder: 'First name',
        type: 'text',
        width: [1, null, 1 / 3]
      },
      {
        name: 'lastName',
        placeholder: 'Last name',
        type: 'text',
        width: [1, null, 1 / 3]
      },
      {
        name: 'email',
        placeholder: 'Email address',
        type: 'email',
        tooltip: 'Make tooltips great again',
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
