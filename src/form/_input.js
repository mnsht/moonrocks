import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { FieldArray } from 'formik';
import { Trash } from 'styled-icons/fa-solid';

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
import Button from '../button';

const FieldArrayRow = styled(Row)({
  position: 'relative'
});

const RemoveIcon = styled(Icon)(props => ({
  position: 'absolute',
  right: -themeGet('space.4')(props),
  top: `${themeGet('space.3')(props) + 1}px`, // 1px extra to accommodate for top border
  cursor: 'pointer',
  '& > svg': {
    color: themeGet('colors.lightGray')(props),
    transition: `color ${themeGet('animations.fast')(props)} ease-in-out`
  },
  '&:hover > svg': {
    color: themeGet('colors.mediumGray')(props)
  }
}));

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

const getFieldArray = (
  arrayValue,
  arrayName,
  arrayHelpers,
  button,
  fields,
  { initialValues, touched, errors, setFieldValue, setFieldTouched }
) => (
  <React.Fragment>
    {arrayValue.map((empty, index) => (
      <FieldArrayRow ml={-2} mr={arrayValue.length > 1 ? 4 : -2} key={index}>
        {fields.map(
          ({ width, type, name, validation, initialValue, ...input }) => (
            <Column key={name} width={width}>
              {React.createElement(getInputType(type), {
                ...input,
                name: `${arrayName}[${index}].${name}`,
                required: validation && validation.required,
                messages:
                  touched[name] && errors[name]
                    ? {
                        warnings: [],
                        errors: [errors[name]]
                      }
                    : null,
                onChange: value =>
                  setFieldValue(`${arrayName}[${index}].${name}`, value),
                onBlur: () =>
                  setFieldTouched(`${arrayName}[${index}].${name}`, true)
              })}
            </Column>
          )
        )}
        {arrayValue.length > 1 && (
          <RemoveIcon
            icon={Trash}
            size={0}
            onClick={() => arrayHelpers.remove(index)}
          />
        )}
      </FieldArrayRow>
    ))}
    <Button
      type="button"
      variant="secondary"
      onClick={() => arrayHelpers.push(initialValues[arrayName][0])}
    >
      {button}
    </Button>
  </React.Fragment>
);

export default (input, formikProps) => {
  if (!input) {
    return (
      <Column key={uuid()} width={1}>
        <Divider mt={3} mb={4} />
      </Column>
    );
  }

  const { type, name, width, validation, fields, ...restOfInputProps } = input;
  const {
    errors,
    touched,
    setFieldValue,
    setFieldTouched,
    values
  } = formikProps;

  const inputProps = {
    ...restOfInputProps,
    name,
    value: values[name],
    required: validation && validation.required,
    messages:
      touched[name] && errors[name]
        ? { warnings: [], errors: [errors[name]] }
        : null,
    onChange: value => setFieldValue(name, value),
    onBlur: () => setFieldTouched(name, true)
  };

  let FieldComponent;

  if (type === 'array' && fields) {
    FieldComponent = (
      <FieldArray
        {...inputProps}
        render={arrayHelpers =>
          getFieldArray(
            inputProps.value,
            inputProps.name,
            arrayHelpers,
            inputProps.button,
            fields,
            formikProps
          )
        }
      />
    );
  } else {
    FieldComponent = React.createElement(getInputType(type), inputProps);
  }

  return (
    <Column key={name} width={width}>
      {FieldComponent}
    </Column>
  );
};
