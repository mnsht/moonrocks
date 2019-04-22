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
- Fix issue error messages showing up below
- Fix props errors
*/

const eventOnChange = (event, type) => onChange => {
  if (!onChange) return;

  let value = event.target.value;

  if (type === "phone") {
    value = `+1${value
      .replace(/\D/g, "")
      .split(" ")
      .join("")}`;
  } else if (type === "ssn") {
    value = value.split("-").join("");
  } else if (type === "currency") {
    value = value
      .substr(1)
      .split(",")
      .join("");
  }

  if (!value || (type === "phone" && value === "+1")) return;

  return onChange(value);
};

const selectOnChange = (value, type) => onChange => {
  if (!onChange) return;

  if (type === "select") {
    return onChange(value.value);
  } else if (type === "multiselect") {
    return onChange(value.map(({ value }) => value));
  }
};

const BaseInput = props => {
  const hasMsgs =
    props.messages &&
    (shouldShowMessages(props.messages.warnings) ||
      shouldShowMessages(props.messages.errors));

  let InputComponent;

  if (props.inputType === "text") {
    InputComponent = (
      <Input
        {...props}
        hasMessages={hasMsgs}
        type="text"
        onChange={event => eventOnChange(event)(props.onChange)}
      />
    );
  } else if (props.inputType === "email") {
    InputComponent = (
      <Input
        {...props}
        hasMessages={hasMsgs}
        type="email"
        onChange={event => eventOnChange(event)(props.onChange)}
      />
    );
  } else if (props.inputType === "password") {
    InputComponent = (
      <Input
        {...props}
        hasMessages={hasMsgs}
        type="password"
        onChange={event => eventOnChange(event)(props.onChange)}
      />
    );
  } else if (props.inputType === "paragraph") {
    InputComponent = (
      <Textarea
        {...props}
        hasMessages={hasMsgs}
        onChange={event => eventOnChange(event)(props.onChange)}
      />
    );
  } else if (props.inputType === "phone") {
    InputComponent = (
      <CustomPhone
        {...props}
        hasMessages={hasMsgs}
        onChange={event => eventOnChange(event, "phone")(props.onChange)}
      />
    );
  } else if (props.inputType === "ssn") {
    InputComponent = (
      <CustomSSN
        {...props}
        hasMessages={hasMsgs}
        onChange={event => eventOnChange(event, "ssn")(props.onChange)}
      />
    );
  } else if (props.inputType === "currency") {
    InputComponent = (
      <CustomCurrency
        {...props}
        hasMessages={hasMsgs}
        onChange={event => eventOnChange(event, "currency")(props.onChange)}
      />
    );
  } else if (props.inputType === "date") {
    InputComponent = (
      <CustomDate
        {...props}
        hasMessages={hasMsgs}
        onChange={event => eventOnChange(event)(props.onChange)}
      />
    );
  } else if (props.inputType === "select") {
    InputComponent = (
      <CustomSelect
        {...props}
        hasMessages={hasMsgs}
        onChange={value => selectOnChange(value, "select")(props.onChange)}
      />
    );
  } else if (props.inputType === "multiselect") {
    InputComponent = (
      <CustomMultiSelect
        {...props}
        hasMessages={hasMsgs}
        onChange={value => selectOnChange(value, "multiselect")(props.onChange)}
      />
    );
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
