import React from "react";

import { Input, Textarea, InputContainer } from "./_base";
import {
  InputPhone,
  InputSSN,
  InputHiddenSSN,
  InputCurrency,
  InputSelect,
  InputMultiSelect,
  InputDate
} from "./_custom-inputs";
import Required from "./_required";
import Tooltip from "./_tooltip";
import Messages, { shouldShow as shouldShowMessages } from "./_messages";

/*
- DONE: Text
- DONE: Email
- DONE: Phone
- DONE: SSN visible
- DONE: SSN hidden
- DONE: Currency
- DONE: Textarea
- DONE: Select
- DONE: Multiselect
- DONE: Borderless select (used in graphs on plan overview, could just be a variant of Select)
- DONE: Date (with various formats)
- DONE: Password
- Checkbox
- Radio
- Switch (instead of button toggle)
- DONE: Required for all
- DONE: Tooltips for all (remember to export this, as it can also be used outside a form)
- DONE: Warning and alert states for all (with position absolute, not affecting next row)
- Validation for all (or perhaps do this inside of app?)
- See if all onChange events are firing correctly and all values are correctly outputting
- Refactor this page for simplicity

- MAYBE: Button toggle
- MAYBE: Left icons for all
*/

const BaseInput = props => {
  const hasMsgs =
    props.messages &&
    (shouldShowMessages(props.messages.warnings) ||
      shouldShowMessages(props.messages.errors));

  let InputComponent;

  if (props.type === "text") {
    InputComponent = <Input {...props} hasMessages={hasMsgs} type="text" />;
  } else if (props.type === "email") {
    InputComponent = <Input {...props} hasMessages={hasMsgs} type="email" />;
  } else if (props.type === "password") {
    InputComponent = <Input {...props} hasMessages={hasMsgs} type="password" />;
  } else if (props.type === "paragraph") {
    InputComponent = <Textarea {...props} hasMessages={hasMsgs} />;
  } else if (props.type === "phone") {
    InputComponent = <InputPhone {...props} hasMessages={hasMsgs} />;
  } else if (props.type === "ssn") {
    InputComponent = <InputSSN {...props} hasMessages={hasMsgs} />;
  } else if (props.type === "currency") {
    InputComponent = <InputCurrency {...props} hasMessages={hasMsgs} />;
  } else if (props.type === "date") {
    InputComponent = <InputDate {...props} hasMessages={hasMsgs} />;
  } else if (props.type === "select") {
    InputComponent = <InputSelect {...props} hasMessages={hasMsgs} />;
  } else if (props.type === "multiselect") {
    InputComponent = <InputMultiSelect {...props} hasMessages={hasMsgs} />;
  }

  return (
    <InputContainer>
      {InputComponent}
      {props.required && <Required {...props} />}
      {props.tooltip && <Tooltip {...props} withinInput />}
      {hasMsgs && <Messages {...props} />}
    </InputContainer>
  );
};

export const TextInput = props => <BaseInput type="text" {...props} />;
export const EmailInput = props => <BaseInput type="email" {...props} />;
export const PasswordInput = props => <BaseInput type="password" {...props} />;
export const PhoneInput = props => <BaseInput type="phone" {...props} />;
export const SSNInput = ({ hidden, ...props }) =>
  hidden ? (
    <InputHiddenSSN>SSN: {props.value}</InputHiddenSSN>
  ) : (
    <BaseInput type="ssn" {...props} />
  );
export const CurrencyInput = props => <BaseInput type="currency" {...props} />;
export const ParagraphInput = props => (
  <BaseInput type="paragraph" {...props} />
);
export const SelectInput = props => <BaseInput type="select" {...props} />;
export const MultiSelectInput = props => (
  <BaseInput type="multiselect" {...props} />
);
export const DateInput = props => <BaseInput type="date" {...props} />;
