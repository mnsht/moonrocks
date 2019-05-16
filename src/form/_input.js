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
import { uuid } from '../_helpers';
import Divider from '../divider';

export default (input, formikProps) => {
  if (input) {
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

    const { type, name, width, validation, ...restOfInputProps } = input;
    const {
      errors,
      touched,
      setFieldValue,
      setFieldTouched,
      values
    } = formikProps;

    const inputProps = {
      name,
      value: values[name],
      required: validation && validation.required,
      messages:
        touched[name] && errors[name]
          ? { warnings: [], errors: [errors[name]] }
          : null,
      ...restOfInputProps
    };

    let FieldComponent;

    if (type === 'array') {
      console.log('DO AN ARRAY');
    } else {
      const Component = getInputType(type);

      FieldComponent = (
        <Component
          {...inputProps}
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
  }

  return (
    <Column key={uuid()} width={1}>
      <Divider mt={3} mb={4} />
    </Column>
  );
};
