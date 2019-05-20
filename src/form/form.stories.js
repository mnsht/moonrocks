import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';

import Form from './';

import { InlineText, InternalLink } from '../typography';

const createPage = (
  num,
  initials = false,
  validation = true,
  tooltips = false
) => {
  const genInitial = value => (initials ? { initialValue: value } : {});
  const genValidation = value => (validation ? { validation: value } : {});
  const genTooltips = value => (tooltips ? { tooltip: value } : {});

  const multipleOptions = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ];

  return [
    {
      name: `text-${num}`,
      type: 'text',
      placeholder: 'Full name',
      width: [1, null, 1 / 3],
      ...genInitial('Wesley Belden'),
      ...genValidation({
        min: 2,
        max: 50,
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `email-${num}`,
      type: 'email',
      placeholder: 'Email address',
      width: [1, null, 1 / 3],
      ...genInitial('wesley@scholarraise.com'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `phone-${num}`,
      type: 'phone',
      placeholder: 'Phone number',
      width: [1, null, 1 / 3],
      ...genInitial('6158675309'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `password-${num}`,
      type: 'password',
      placeholder: 'Password',
      width: [1, null, 1 / 3],
      ...genInitial('helloworld'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `password-again-${num}`,
      type: 'password',
      placeholder: 'Password (again)',
      width: [1, null, 1 / 3],
      ...genInitial('helloworld'),
      ...genValidation({
        required: true,
        reference: `password-${num}`
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `ssn-${num}`,
      type: 'ssn',
      placeholder: 'Social security number',
      width: [1, null, 1 / 3],
      // hidden: true, // Uncomment this and you'll get a "hidden" SSN input
      ...genInitial('123456789'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `currency-${num}`,
      type: 'currency',
      placeholder: 'Total contribution',
      width: [1, null, 1 / 3],
      ...genInitial('1234.56'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `date-${num}`,
      type: 'date',
      placeholder: 'Date (MM-DD)',
      width: [1, null, 1 / 3],
      ...genInitial('05-11'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `date-yearly-${num}`,
      type: 'date',
      placeholder: 'Date (MM-DD-YYYY)',
      width: [1, null, 1 / 3],
      hasYear: true,
      ...genInitial('05-11-1992'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `paragraph-${num}`,
      type: 'paragraph',
      placeholder: 'Start typing anything...',
      width: [1],
      ...genInitial("The world is an amazing place, don't you think so?"),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    null, // NOTE: this is a line break ;)
    {
      name: `radio-${num}`,
      type: 'radio',
      label: 'Favorite ice cream flavor?',
      options: multipleOptions,
      width: [1, null, 1 / 3],
      ...genInitial('chocolate'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `checkboxes-${num}`,
      type: 'checkboxes',
      label: 'What ice cream flavors do you like?',
      options: multipleOptions,
      width: [1, null, 1 / 3],
      ...genInitial(['chocolate', 'vanilla']),
      ...genValidation({
        required: true,
        length: 2
      }),
      ...genTooltips('Choose at least 2')
    },
    {
      name: `switch-${num}`,
      type: 'switch',
      off: 'Not to be',
      on: 'To be',
      width: [1, null, 1 / 3],
      ...genInitial(true),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `select-${num}`,
      type: 'select',
      placeholder: 'Select one...',
      options: multipleOptions,
      width: [1, null, 1 / 2],
      ...genInitial('chocolate'),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    },
    {
      name: `multiselect-${num}`,
      type: 'multiselect',
      placeholder: 'Select multiple...',
      options: multipleOptions,
      width: [1, null, 1 / 2],
      ...genInitial(['chocolate', 'vanilla']),
      ...genValidation({
        required: true,
        length: 2
      }),
      ...genTooltips('Choose at least 2')
    },
    null,
    {
      name: `array-${num}`,
      type: 'array',
      button: 'Add person',
      width: [1],
      ...genInitial([
        { name: 'Patrick Cason', email: 'patrick@scholarraise.com' },
        { name: 'Wesley Belden', email: 'wesley@scholarraise.com' }
      ]),
      ...genValidation({
        required: true,
        length: 2
      }),
      // There are (currently) no tooltips on the array, tooltips are left up to the fields
      fields: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Name',
          width: [1, null, 1 / 3],
          ...genInitial('Some guy'),
          ...genValidation({
            min: 4,
            max: 20,
            required: true
          }),
          ...genTooltips('Make tooltips great again')
        },
        {
          name: 'email',
          type: 'email',
          placeholder: 'Email address',
          width: [1, null, 2 / 3],
          ...genInitial('someguy@example.com'),
          ...genValidation({
            required: true
          }),
          ...genTooltips('Make tooltips great again')
        }
      ]
    },
    null,
    {
      name: `checkbox-${num}`,
      type: 'checkbox',
      label: (
        <InlineText>
          Please read the{' '}
          <InternalLink href="/">terms and conditions</InternalLink>
        </InlineText>
      ),
      width: [1],
      ...genInitial(true),
      ...genValidation({
        required: true
      }),
      ...genTooltips('Make tooltips great again')
    }
  ];
};

const stories = storiesOf('2. Simple|Form', module);

const store = new Store({
  singleForm: (iv, v, t) => ({
    submit: values => console.log('SUBMIT', values),
    button: 'Submit form',
    forms: [createPage(0, iv, v, t)]
  }),
  multipleForm: {
    submit: values => console.log('SUBMIT', values),
    button: 'Submit form',
    startAt: 1,
    forms: [createPage(0), createPage(1), createPage(2)]
  }
});

stories.addDecorator(withKnobs);

stories.add('default', () => {
  // This requires flipping the value here, it cannot be done as a Storybook control
  const initialValues = false;

  const validations = boolean(
    'Should show additional validations?',
    true,
    'Main'
  );
  const tooltips = boolean('Should show tooltips?', false, 'Main');

  return (
    <State store={store}>
      {({ singleForm }) => (
        <Form {...singleForm(initialValues, validations, tooltips)} />
      )}
    </State>
  );
});

stories.add('as a form wizard', () => {
  const steps = boolean('Should show steps?', true, 'Main');

  <State store={store}>
    {({ multipleForm }) => <Form {...multipleForm} showSteps={steps} />}
  </State>;
});
