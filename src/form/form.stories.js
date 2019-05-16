import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';

import Form from './';

import { InlineText, InternalLink } from '../typography';

const stories = storiesOf('2. Simple|Form', module);

stories.addDecorator(withKnobs);

const multipleOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const createPage = num => [
  {
    name: `text-${num}`,
    placeholder: 'Full name',
    initialValue: 'Wesley Belden',
    type: 'text',
    validation: {
      min: 2,
      max: 50,
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
    name: `phone-${num}`,
    placeholder: 'Phone number',
    type: 'phone',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `password-${num}`,
    placeholder: 'Password',
    type: 'password',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `password-again-${num}`,
    placeholder: 'Password (again)',
    type: 'password',
    validation: {
      required: true,
      reference: `password-${num}`
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `ssn-${num}`,
    placeholder: 'Social security number',
    type: 'ssn',
    // hidden: true, // Uncomment this and you'll get a "hidden" SSN input
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `currency-${num}`,
    placeholder: 'Does nothing...',
    type: 'currency',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `date-${num}`,
    placeholder: 'Date',
    type: 'date',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `date-yearly-${num}`,
    placeholder: 'Date (with a year)',
    type: 'date',
    hasYear: true,
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `paragraph-${num}`,
    placeholder: 'Start typing anything...',
    type: 'paragraph',
    validation: {
      required: true
    },
    width: [1]
  },
  null, // NOTE: this is a line break ;)
  {
    name: `checkboxes-${num}`,
    label: 'What ice cream flavors do you like?',
    options: multipleOptions,
    type: 'checkboxes',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `radio-${num}`,
    label: 'What is your favorite ice cream flavor?',
    tooltip: 'Choose one quickly!',
    options: multipleOptions,
    type: 'radio',
    validation: {
      required: true
    },
    width: [1, null, 1 / 3]
  },
  {
    name: `switch-${num}`,
    off: 'Not to be',
    on: 'To be',
    tooltip: 'Choose wisely',
    type: 'switch',
    width: [1, null, 1 / 3]
  },
  {
    name: `select-${num}`,
    placeholder: 'Select one...',
    options: multipleOptions,
    type: 'select',
    validation: {
      required: true
    },
    width: [1, null, 1 / 2]
  },
  {
    name: `multiselect-${num}`,
    placeholder: 'Select multiple...',
    options: multipleOptions,
    type: 'multiselect',
    validation: {
      required: true
    },
    width: [1, null, 1 / 2]
  },
  {
    name: `checkbox-${num}`,
    label: (
      <InlineText>
        Please read the{' '}
        <InternalLink href="/">terms and conditions</InternalLink>
      </InlineText>
    ),
    type: 'checkbox',
    validation: {
      required: true
    },
    width: [1]
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
