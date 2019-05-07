import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean, button } from '@storybook/addon-knobs';
import { StateDecorator, Store } from '@sambego/storybook-state';

import {
  TextInput,
  EmailInput,
  PasswordInput,
  CheckboxInput,
  CheckboxInputs,
  RadioInputs,
  SwitchInput,
  PhoneInput,
  SSNInput,
  CurrencyInput,
  ParagraphInput,
  SelectInput,
  MultiSelectInput,
  DateInput
} from './';
import Box from '../../box';
import { Container, Row, Column } from '../../grid';

const sampleOptions = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
];

const stories = storiesOf('2. Simple|Form/Inputs', module);

const store = new Store({
  messages: {
    warnings: [],
    errors: []
  }
});

stories.addDecorator(withKnobs);
stories.addDecorator(StateDecorator(store));

const addMessage = (type, text) => {
  const newMessages = store.get('messages');

  newMessages[type].push(text);

  store.set({ messages: newMessages });
};

const removeMessage = type => {
  const newMessages = store.get('messages');

  newMessages[type].shift();

  store.set({ messages: newMessages });
};

stories.add('everything but the kitchen sink', () => {
  const required = boolean('Is required?', true, 'Main');
  const tooltip = text('Tooltip text', 'Hello world!', 'Main');
  const messages = store.get('messages');

  const onChange = (key, value) => {
    store.set({ [key]: value });

    console.log('STORE', key, value, store.get());
  };

  button('Add warning', () => addMessage('warnings', "Password isn't strong"));
  button('Add error', () => addMessage('errors', 'This field is required'));
  button('Remove warning', () => removeMessage('warnings'));
  button('Remove error', () => removeMessage('errors'));

  const options = [
    {
      value: 'blue',
      label: 'Blue pill'
    },
    {
      value: 'red',
      label: 'Red pill'
    },
    {
      value: 'rainbow',
      label: 'Rainbow pill'
    }
  ];

  return (
    <Container>
      <Row>
        <Column width={[1, null, 1 / 3]}>
          <TextInput
            placeholder="Text input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('text', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <EmailInput
            placeholder="Email input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('email', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <PasswordInput
            placeholder="Password input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('password', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <PhoneInput
            placeholder="Phone input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('phone', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <SSNInput
            placeholder="SSN input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('ssn', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <CurrencyInput
            placeholder="Currency input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('currency', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <ParagraphInput
            placeholder="Paragraph input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('paragraph', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <DateInput
            placeholder="Date input (MM-DD)"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('date', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <DateInput
            placeholder="Date input (MM-DD-YYYY)"
            required={required}
            tooltip={tooltip}
            messages={messages}
            hasYear
            onChange={value => onChange('date-long', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <SelectInput
            placeholder="Select input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            options={sampleOptions}
            onChange={value => onChange('select', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <MultiSelectInput
            placeholder="Multiselect input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            options={sampleOptions}
            onChange={value => onChange('multiselect', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <CheckboxInput
            label="Checkbox input"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('checkbox', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <CheckboxInputs
            label="Checkbox inputs"
            options={options}
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('checkboxes', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <RadioInputs
            label="Radio inputs"
            options={options}
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('radios', value)}
          />
        </Column>
        <Column width={[1, null, 1 / 3]}>
          <SwitchInput
            off="Off"
            on="On"
            required={required}
            tooltip={tooltip}
            messages={messages}
            onChange={value => onChange('switch', value)}
          />
        </Column>
      </Row>
    </Container>
  );
});

stories.add('as a text input', () => {
  const placeholder = text('Placeholder', 'Type something...', 'Main');
  const required = boolean('Is required?', true, 'Main');
  const tooltip = text('Tooltip text', 'Hello world!', 'Main');

  button('Add warning', () => addMessage('warnings', "Password isn't strong"));
  button('Add error', () => addMessage('errors', 'This field is required'));
  button('Remove warning', () => removeMessage('warnings'));
  button('Remove error', () => removeMessage('errors'));

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        messages={store.get('messages')}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as an email input', () => {
  const placeholder = text('Placeholder', 'Type your email...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <EmailInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as an password input', () => {
  const placeholder = text('Placeholder', 'Type your password...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <PasswordInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a checkbox input', () => {
  const label = text('Label', 'Do we wanna do this?', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <CheckboxInput
        label={label}
        required={required}
        tooltip={tooltip}
        initialValue={true}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as multiple checkboxes', () => {
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  const options = [
    {
      value: 'blue',
      label: 'Blue pill'
    },
    {
      value: 'red',
      label: 'Red pill'
    },
    {
      value: 'rainbow',
      label: 'Rainbow pill'
    }
  ];

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <CheckboxInputs
        options={options}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as multiple radios', () => {
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  const options = [
    {
      value: 'blue',
      label: 'Blue pill'
    },
    {
      value: 'red',
      label: 'Red pill'
    },
    {
      value: 'rainbow',
      label: 'Rainbow pill'
    }
  ];

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <RadioInputs
        options={options}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a switch input', () => {
  const on = text('On', 'To be', 'Main');
  const off = text('Off', 'Not to be', 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <SwitchInput
        initialValue={true}
        on={on}
        off={off}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a phone input', () => {
  const placeholder = text('Placeholder', 'Type your phone number...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <PhoneInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as an SSN input', () => {
  const placeholder = text('Placeholder', 'Type your SSN...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');
  const hidden = boolean('Is hidden?', false, 'Main');
  const value = hidden ? text('SSN', '***-**-1210', 'Main') : null;

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <SSNInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        hidden={hidden}
        value={value}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a currency input', () => {
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <CurrencyInput
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a paragraph input', () => {
  const placeholder = text('Placeholder', 'Type a number...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <ParagraphInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a select input', () => {
  const placeholder = text('Placeholder', 'Select something...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');
  const borderless = boolean('Is borderless?', false, 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <SelectInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        borderless={borderless}
        options={sampleOptions}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a multiselect input', () => {
  const placeholder = text('Placeholder', 'Select multiple things...', 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <MultiSelectInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        options={sampleOptions}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a date input (mm-dd-yyyy)', () => {
  const placeholder = text(
    'Placeholder',
    `Type a date (mm-dd-yyyy)...`,
    'Main'
  );
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <DateInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        hasYear
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});

stories.add('as a date input (mm-dd)', () => {
  const placeholder = text('Placeholder', `Type a date (mm-dd)...`, 'Main');
  const required = boolean('Is required?', false, 'Main');
  const tooltip = text('Tooltip text', '', 'Main');

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <DateInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log('STORY', value)}
      />
    </Box>
  );
});
