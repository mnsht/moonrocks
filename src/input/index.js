import React from 'react';

import Flex from '../flex';
import { Input, Textarea, InputContainer } from './_base';
import {
  CustomChoice,
  CustomChoices,
  CustomSwitch,
  CustomPhone,
  CustomSSN,
  CustomHiddenSSN,
  CustomCurrency,
  CustomSelect,
  CustomMultiSelect,
  CustomDate
} from './_custom';
import Required from './_required';
import Tooltip from './_tooltip';
import Messages from './_messages';

/*
TODO:
- Fix props errors
*/

const eventOnChange = (event, type) => onChange => {
  if (!onChange) return;

  let value;

  if (type === 'select' || type === 'multiselect') {
    value = event;
  } else {
    value = event.target.value;
  }

  if (type === 'phone') {
    value = `+1${value
      .replace(/\D/g, '')
      .split(' ')
      .join('')}`;
  } else if (type === 'ssn') {
    value = value.split('-').join('');
  } else if (type === 'currency') {
    value = value
      .substr(1)
      .split(',')
      .join('');
  } else if (type === 'select') {
    value = value.value;
  } else if (type === 'multiselect') {
    value = value.map(({ value }) => value);
  }

  if (!value || (type === 'phone' && value === '+1')) return;

  return onChange(value);
};

const BaseInput = props => {
  const inputProps = Object.assign({}, props);
  inputProps.onChange = event =>
    eventOnChange(event, props.inputType)(props.onChange);

  let InputComponent;

  console.log('BASE INPUT', inputProps);

  if (props.inputType === 'text') {
    InputComponent = <Input {...inputProps} type="text" />;
  } else if (props.inputType === 'email') {
    InputComponent = <Input {...inputProps} type="email" />;
  } else if (props.inputType === 'password') {
    InputComponent = <Input {...inputProps} type="password" />;
  } else if (props.inputType === 'paragraph') {
    InputComponent = <Textarea {...inputProps} />;
  } else if (props.inputType === 'phone') {
    InputComponent = <CustomPhone {...inputProps} />;
  } else if (props.inputType === 'ssn') {
    InputComponent = <CustomSSN {...inputProps} />;
  } else if (props.inputType === 'currency') {
    InputComponent = <CustomCurrency {...inputProps} />;
  } else if (props.inputType === 'date') {
    InputComponent = <CustomDate {...inputProps} />;
  } else if (props.inputType === 'select') {
    InputComponent = <CustomSelect {...inputProps} />;
  } else if (props.inputType === 'multiselect') {
    InputComponent = <CustomMultiSelect {...inputProps} />;
  }

  return (
    <InputContainer>
      {InputComponent}
      {props.required && <Required {...props} withinInput />}
      {props.tooltip && <Tooltip {...props} withinInput />}
      {props.messages && <Messages {...props} />}
    </InputContainer>
  );
};

const ChoiceBaseInput = props => {
  let InputComponent;

  if (props.inputType === 'checkbox') {
    InputComponent = <CustomChoice {...props} />;
  } else if (props.inputType === 'checkboxes') {
    InputComponent = <CustomChoices {...props} />;
  } else if (props.inputType === 'radios') {
    InputComponent = <CustomChoices {...props} isRadio />;
  } else if (props.inputType === 'switch') {
    InputComponent = <CustomSwitch {...props} />;
  }

  return (
    <InputContainer>
      {(props.required || props.tooltip) && (
        <Flex alignItems="center" mb={2}>
          {props.required && <Required {...props} />}
          {props.tooltip && <Tooltip {...props} position="top-right" />}
        </Flex>
      )}
      {InputComponent}
    </InputContainer>
  );
};

export const TextInput = props => <BaseInput inputType="text" {...props} />;
export const EmailInput = props => <BaseInput inputType="email" {...props} />;
export const PasswordInput = props => (
  <BaseInput inputType="password" {...props} />
);
export const CheckboxInput = props => (
  <ChoiceBaseInput inputType="checkbox" {...props} />
);
export const CheckboxInputs = props => (
  <ChoiceBaseInput inputType="checkboxes" {...props} />
);
export const RadioInputs = props => (
  <ChoiceBaseInput inputType="radios" {...props} />
);
export const SwitchInput = props => (
  <ChoiceBaseInput inputType="switch" {...props} />
);
export const PhoneInput = props => <BaseInput inputType="phone" {...props} />;
export const SSNInput = ({ hidden, ...props }) =>
  hidden ? (
    <CustomHiddenSSN>SSN: {props.value}</CustomHiddenSSN>
  ) : (
    <BaseInput inputType="ssn" {...props} />
  );
export const CurrencyInput = props => (
  <BaseInput inputType="currency" {...props} />
);
export const ParagraphInput = props => (
  <BaseInput inputType="paragraph" {...props} />
);
export const SelectInput = props => <BaseInput inputType="select" {...props} />;
export const MultiSelectInput = props => (
  <BaseInput inputType="multiselect" {...props} />
);
export const DateInput = props => <BaseInput inputType="date" {...props} />;
