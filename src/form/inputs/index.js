import React from 'react';

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
} from './custom';
import Required from './_required';
import Tooltip from './_tooltip';
import Messages, { BareMessages } from './_messages';

const eventOnChange = (event, type) => onChange => {
  if (!onChange) return;

  if (type === 'currency' || type === 'ssn' || type === 'phone') {
    return onChange(event);
  } else if (type === 'select') {
    return onChange(event.value);
  } else if (type === 'multiselect') {
    return onChange(event.map(({ value }) => value));
  } else {
    return onChange(event.target.value);
  }
};

const Base = ({ type, onChange, ...props }) => {
  const inputProps = Object.assign({}, props);
  inputProps.onChange = event => eventOnChange(event, type)(onChange);

  let InputComponent;

  if (type === 'text' || type === 'email' || type === 'password') {
    InputComponent = <Input {...inputProps} type={type} />;
  } else if (type === 'paragraph') {
    InputComponent = <Textarea {...inputProps} />;
  } else if (type === 'phone') {
    InputComponent = <CustomPhone {...inputProps} />;
  } else if (type === 'ssn') {
    InputComponent = <CustomSSN {...inputProps} />;
  } else if (type === 'currency') {
    InputComponent = <CustomCurrency {...inputProps} />;
  } else if (type === 'date') {
    InputComponent = <CustomDate {...inputProps} />;
  } else if (type === 'select') {
    InputComponent = <CustomSelect {...inputProps} />;
  } else if (type === 'multiselect') {
    InputComponent = <CustomMultiSelect {...inputProps} />;
  }

  return (
    <InputContainer>
      {InputComponent}
      {props.required && <Required {...props} type={type} withinInput />}
      {props.tooltip && <Tooltip {...props} type={type} withinInput />}
      {props.messages && <Messages {...props} type={type} />}
    </InputContainer>
  );
};

const ChoiceBase = ({ type, ...props }) => {
  let InputComponent;

  if (type === 'checkbox') {
    InputComponent = <CustomChoice {...props} />;
  } else if (type === 'checkboxes') {
    InputComponent = <CustomChoices {...props} />;
  } else if (type === 'radios') {
    InputComponent = <CustomChoices {...props} isRadio />;
  } else if (type === 'switch') {
    InputComponent = <CustomSwitch {...props} />;
  }

  return (
    <InputContainer>
      {InputComponent}
      {props.messages && <BareMessages {...props} />}
    </InputContainer>
  );
};

export const TextInput = props => <Base type="text" {...props} />;
export const EmailInput = props => <Base type="email" {...props} />;
export const PasswordInput = props => <Base type="password" {...props} />;
export const CheckboxInput = props => <ChoiceBase type="checkbox" {...props} />;
export const CheckboxInputs = props => (
  <ChoiceBase type="checkboxes" {...props} />
);
export const RadioInput = props => <ChoiceBase type="radios" {...props} />;
export const SwitchInput = props => <ChoiceBase type="switch" {...props} />;
export const PhoneInput = props => <Base type="phone" {...props} />;
export const SSNInput = ({ hidden, ...props }) =>
  hidden ? (
    <CustomHiddenSSN>SSN: {props.value}</CustomHiddenSSN>
  ) : (
    <Base type="ssn" {...props} />
  );
export const CurrencyInput = props => <Base type="currency" {...props} />;
export const ParagraphInput = props => <Base type="paragraph" {...props} />;
export const SelectInput = props => <Base type="select" {...props} />;
export const MultiSelectInput = props => <Base type="multiselect" {...props} />;
export const DateInput = props => <Base type="date" {...props} />;
