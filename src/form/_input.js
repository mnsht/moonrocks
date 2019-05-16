import React from 'react';
import { FieldArray } from 'formik';
import { Plus, Minus } from 'styled-icons/fa-solid';

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

import { Row, Column } from '../grid';
import { uuid } from '../_helpers';
import Divider from '../divider';
import Icon from '../icon';

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

    const {
      type,
      name,
      width,
      validation,
      fields,
      ...restOfInputProps
    } = input;
    const {
      errors,
      touched,
      setFieldValue,
      setFieldTouched,
      initialValues,
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

    if (type === 'array' && fields) {
      FieldComponent = (
        <FieldArray
          {...inputProps}
          render={arrayHelpers =>
            inputProps.value.map((empty, index) => {
              return (
                <Row key={index}>
                  {fields.map(({ width, ...input }) => (
                    <Column key={input.name} width={width}>
                      {React.createElement(getInputType(input.type), {
                        ...input,
                        name: `${inputProps.name}[${index}].${input.name}`,
                        value: input.initialValue
                      })}
                    </Column>
                  ))}
                  {inputProps.value.length > 1 && (
                    <Icon
                      icon={Minus}
                      onClick={() => arrayHelpers.remove(index)}
                    />
                  )}
                  <Icon
                    icon={Plus}
                    onClick={() => arrayHelpers.push(initialValues[name][0])}
                  />
                </Row>
              );
            })
          }
        />
      );
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
