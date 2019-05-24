import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { FieldArray, getIn } from 'formik';
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
import { BareMessages } from './inputs/_messages';

import { uuid } from '../_helpers';
import { Row, Column } from '../grid';
import { CappedText, Heading } from '../typography';
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

export const generateBlankFieldArray = fields => {
  const blankFields = {};

  fields.forEach(({ name, initialValue }) => {
    blankFields[name] = initialValue || '';
  });

  return blankFields;
};

export default (
  { type, name, width, fields, button, ...restOfInputProps },
  { errors, touched, setFieldValue, setFieldTouched, values }
) => {
  const isArray = type === 'array' && fields;

  if (type === 'divider') {
    return (
      <Column key={uuid()} width={1}>
        <Divider mt={3} mb={4} />
      </Column>
    );
  }

  if (type === 'heading') {
    const { title, description } = restOfInputProps;

    return (
      <Column key={uuid()} width={1} mb={3}>
        {title && (
          <CappedText color="darkGray" style={{ display: 'block' }}>
            {title}
          </CappedText>
        )}
        {description && (
          <Heading
            as="span"
            textStyle="h4"
            color="mediumGray"
            fontWeight="normal"
            style={{ display: 'block' }}
          >
            {description}
          </Heading>
        )}
      </Column>
    );
  }

  const getInputType = type => {
    if (type === 'text') return TextInput;
    else if (type === 'email') return EmailInput;
    else if (type === 'password') return PasswordInput;
    else if (type === 'checkbox') return CheckboxInput;
    else if (type === 'checkboxes') return CheckboxInputs;
    else if (type === 'radio') return RadioInput;
    else if (type === 'switch') return SwitchInput;
    else if (type === 'phone') return PhoneInput;
    else if (type === 'ssn') return SSNInput;
    else if (type === 'currency') return CurrencyInput;
    else if (type === 'paragraph') return ParagraphInput;
    else if (type === 'select') return SelectInput;
    else if (type === 'multiselect') return MultiSelectInput;
    else if (type === 'date') return DateInput;

    console.log('WE HAVE A PROBLEM', type);

    return null;
  };

  const getMessages = name =>
    getIn(touched, name) && getIn(errors, name)
      ? {
          warnings: [],
          errors: [getIn(errors, name)]
        }
      : null;

  const getInputProps = (name, { validation, ...extra }) => ({
    ...extra,
    name,
    value: getIn(values, name),
    required: validation && validation.required,
    messages: getMessages(name),
    onChange: value => setFieldValue(name, value),
    onBlur: () => setFieldTouched(name, true)
  });

  const createInput = (type, name, extras) =>
    React.createElement(getInputType(type), getInputProps(name, extras));

  const getFieldArray = (arrayValue, arrayName, arrayHelpers) => {
    const messages = getMessages(arrayName);
    const shouldShowBareMessages =
      messages &&
      ((messages.errors.length > 0 && !Array.isArray(messages.errors[0])) ||
        (messages.warnings.length > 0 && !Array.isArray(messages.warnings[0])));

    return (
      <React.Fragment>
        {shouldShowBareMessages && <BareMessages messages={messages} />}
        {arrayValue.map((empty, index) => (
          <FieldArrayRow
            key={index}
            ml={-2}
            mr={arrayValue.length > 1 ? 4 : -2}
          >
            {fields.map(({ width, type, name, ...input }) => (
              <Column key={name} width={width}>
                {createInput(type, `${arrayName}[${index}].${name}`, input)}
              </Column>
            ))}
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
          onClick={() => arrayHelpers.push(generateBlankFieldArray(fields))}
        >
          {button}
        </Button>
      </React.Fragment>
    );
  };

  return (
    <Column key={name} width={width}>
      {isArray && (
        <FieldArray
          name={name}
          render={arrayHelpers =>
            getFieldArray(values[name], name, arrayHelpers)
          }
        />
      )}
      {!isArray && createInput(type, name, restOfInputProps)}
    </Column>
  );
};
