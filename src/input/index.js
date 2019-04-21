import React from "react";

import Flex from "../flex";
import { Input, Textarea, InputContainer } from "./_base";
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
} from "./_custom";
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
- DONE: Checkbox
- DONE: Radio
- DONE: Switch (instead of button toggle)
- DONE: Required for all
- DONE: Tooltips for all (remember to export this, as it can also be used outside a form)
- DONE: Warning and alert states for all (with position absolute, not affecting next row)
- Validation for all (or perhaps do this inside of app?)
- See if all onChange events are firing correctly and all values are correctly outputting
- Refactor this page for simplicity
- Fix props errors
- Have a single story showing all inputs (responsive, kitchen sink)

- MAYBE: Button toggle
- MAYBE: Left icons for all
*/

const BaseInput = props => {
  const hasMsgs =
    props.messages &&
    (shouldShowMessages(props.messages.warnings) ||
      shouldShowMessages(props.messages.errors));

  let InputComponent;

  if (props.inputType === "text") {
    InputComponent = <Input {...props} hasMessages={hasMsgs} type="text" />;
  } else if (props.inputType === "email") {
    InputComponent = <Input {...props} hasMessages={hasMsgs} type="email" />;
  } else if (props.inputType === "password") {
    InputComponent = <Input {...props} hasMessages={hasMsgs} type="password" />;
  } else if (props.inputType === "paragraph") {
    InputComponent = <Textarea {...props} hasMessages={hasMsgs} />;
  } else if (props.inputType === "phone") {
    InputComponent = <CustomPhone {...props} hasMessages={hasMsgs} />;
  } else if (props.inputType === "ssn") {
    InputComponent = <CustomSSN {...props} hasMessages={hasMsgs} />;
  } else if (props.inputType === "currency") {
    InputComponent = <CustomCurrency {...props} hasMessages={hasMsgs} />;
  } else if (props.inputType === "date") {
    InputComponent = <CustomDate {...props} hasMessages={hasMsgs} />;
  } else if (props.inputType === "select") {
    InputComponent = <CustomSelect {...props} hasMessages={hasMsgs} />;
  } else if (props.inputType === "multiselect") {
    InputComponent = <CustomMultiSelect {...props} hasMessages={hasMsgs} />;
  }

  return (
    <InputContainer>
      {InputComponent}
      {props.required && <Required {...props} withinInput />}
      {props.tooltip && <Tooltip {...props} withinInput />}
      {hasMsgs && <Messages {...props} />}
    </InputContainer>
  );
};

const ChoiceBaseInput = props => {
  let InputComponent;

  if (props.inputType === "checkbox") {
    InputComponent = <CustomChoice {...props} />;
  } else if (props.inputType === "checkboxes") {
    InputComponent = <CustomChoices {...props} />;
  } else if (props.inputType === "radios") {
    InputComponent = <CustomChoices {...props} isRadio />;
  } else if (props.inputType === "switch") {
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
