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
- Validation for all (or perhaps do this inside of app?)
- Success, warning, and alert states for all (with position absolute, not affecting next row)
- DONE: Tooltips for all (remember to export this, as it can also be used outside a form)

- MAYBE: Button toggle
- MAYBE: Left icons for all
*/

const BaseInput = ({ type, ...props }) => (
  <InputContainer>
    {(type === "text" || type === "email" || type === "password") && (
      <Input {...props} type={type} />
    )}
    {type === "paragraph" && <Textarea {...props} />}
    {type === "phone" && <InputPhone {...props} />}
    {type === "ssn" && <InputSSN {...props} />}
    {type === "currency" && <InputCurrency {...props} />}
    {type === "select" && <InputSelect {...props} />}
    {type === "multiselect" && <InputMultiSelect {...props} />}
    {type === "date" && <InputDate {...props} />}

    {props.required && <Required {...props} />}
    {props.tooltip && <Tooltip {...props} withinInput />}
  </InputContainer>
);

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
