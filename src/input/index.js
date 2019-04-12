import React from "react";

import { Input, Textarea, InputContainer } from "./_base";
import {
  InputPhone,
  InputSSN,
  InputHiddenSSN,
  InputCurrency,
  InputSelect,
  InputMultiSelect
} from "./_custom-inputs";
import Required from "./_required";

/*
- DONE: Text
- DONE: Email
- DONE: Phone
- DONE: SSN visible
- DONE: SSN hidden
- DONE: Currency
- DONE: Textarea
- Select
- Multiselect
- Date (with various formats)
- Borderless select (used in graphs on plan overview, could just be a variant of Select)
- Checkbox
- Radio
- Switch (instead of button toggle)
- DONE: Required for all
- Validation for all (or perhaps do this inside of app?)
- Success, warning, and alert states for all (with position absolute, not affecting next row)
- Tooltips for all (remember to export this, as it can also be used outside a form)

- MAYBE: Button toggle
- MAYBE: Left icons for all
*/

const BaseInput = ({ type, ...props }) => (
  <InputContainer>
    {(type === "text" || type === "email") && <Input {...props} type={type} />}
    {type === "paragraph" && <Textarea {...props} />}
    {type === "phone" && <InputPhone {...props} />}
    {type === "ssn" && <InputSSN {...props} />}
    {type === "currency" && <InputCurrency {...props} />}
    {type === "select" && <InputSelect {...props} />}
    {type === "multiselect" && <InputMultiSelect {...props} />}

    {props.required && <Required />}
  </InputContainer>
);

export const TextInput = props => <BaseInput type="text" {...props} />;
export const EmailInput = props => <BaseInput type="email" {...props} />;
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
