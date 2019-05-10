import React from 'react';

import {
  TextInput,
  EmailInput,
  PasswordInput,
  CheckboxInput,
  CheckboxInputs,
  RadioInput,
  SwitchInput,
  PhoneInput,
  SSNInput,
  CurrencyInput,
  ParagraphInput,
  SelectInput,
  MultiSelectInput,
  DateInput
} from './inputs';

import { Column } from '../grid';

export default (
  { type, name, placeholder, tooltip, width, validation },
  formikProps
) => {
  const getInputType = type => {
    if (type === 'text') {
      return TextInput;
    } else if (type === 'email') {
      return EmailInput;
    } else if (type === 'password') {
      return PasswordInput;
    } else if (type === 'checkbox') {
      return CheckboxInput;
    } else if (type === 'checkboxes') {
      return CheckboxInputs;
    } else if (type === 'radio') {
      return RadioInput;
    } else if (type === 'switch') {
      return SwitchInput;
    } else if (type === 'phone') {
      return PhoneInput;
    } else if (type === 'ssn') {
      return SSNInput;
    } else if (type === 'currency') {
      return CurrencyInput;
    } else if (type === 'paragraph') {
      return ParagraphInput;
    } else if (type === 'select') {
      return SelectInput;
    } else if (type === 'multiselect') {
      return MultiSelectInput;
    } else if (type === 'date') {
      return DateInput;
    }

    return null;
  };

  const {
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    values
  } = formikProps;

  const required = validation.required;
  const messages =
    touched[name] && errors[name]
      ? { warnings: [], errors: [errors[name]] }
      : null;

  let FieldComponent;

  if (type === 'array') {
    console.log('DO AN ARRAY');
  } else {
    const Component = getInputType(type);

    // TODO: PATRICK... do initial value
    FieldComponent = (
      <Component
        name={name}
        value={values[name]}
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        messages={messages}
        onChange={value => setFieldValue(name, value)}
        onBlur={() => setFieldTouched(name, true)}
      />
    );
  }

  return (
    <Column key={name} width={width}>
      {FieldComponent}
    </Column>
  );
};
