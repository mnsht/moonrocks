import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import {
  TextInput,
  EmailInput,
  PasswordInput,
  PhoneInput,
  SSNInput,
  CurrencyInput,
  ParagraphInput,
  SelectInput,
  MultiSelectInput,
  DateInput
} from "./";
import Box from "../box";

const sampleOptions = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" }
];

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

stories.add("as a text input", () => {
  const placeholder = text("Placeholder", "Type something...", "Main");
  const required = boolean("Is required?", true, "Main");
  const tooltip = text("Tooltip text", "Hello world!", "Main");

  const messages = {
    warnings: ["You are agly", "I don't like your boots"],
    errors: ["This field is required"]
  };

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        messages={messages}
      />
    </Box>
  );
});

stories.add("as an email input", () => {
  const placeholder = text("Placeholder", "Type your email...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <EmailInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
      />
    </Box>
  );
});

stories.add("as an password input", () => {
  const placeholder = text("Placeholder", "Type your password...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <PasswordInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
      />
    </Box>
  );
});

stories.add("as a phone input", () => {
  const placeholder = text("Placeholder", "Type your phone number...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <PhoneInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
      />
    </Box>
  );
});

stories.add("as an SSN input", () => {
  const placeholder = text("Placeholder", "Type your SSN...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");
  const hidden = boolean("Is hidden?", false, "Main");
  const value = hidden ? text("SSN", "***-**-1210", "Main") : null;

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <SSNInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        hidden={hidden}
        value={value}
      />
    </Box>
  );
});

stories.add("as a currency input", () => {
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <CurrencyInput required={required} tooltip={tooltip} />
    </Box>
  );
});

stories.add("as a paragraph input", () => {
  const placeholder = text("Placeholder", "Type a number...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <ParagraphInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
      />
    </Box>
  );
});

stories.add("as a select input", () => {
  // Use this as a reference... the props are passed right through: https://react-select.com/
  const placeholder = text("Placeholder", "Select something...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");
  const borderless = boolean("Is borderless?", false, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <SelectInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        borderless={borderless}
        options={sampleOptions}
      />
    </Box>
  );
});

stories.add("as a multiselect input", () => {
  // Use this as a reference... the props are passed right through: https://react-select.com/
  const placeholder = text("Placeholder", "Select multiple things...", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <MultiSelectInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        options={sampleOptions}
      />
    </Box>
  );
});

stories.add("as a date input (mm-dd-yyyy)", () => {
  const placeholder = text(
    "Placeholder",
    `Type a date (mm-dd-yyyy)...`,
    "Main"
  );
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <DateInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        hasYear
      />
    </Box>
  );
});

stories.add("as a date input (mm-dd)", () => {
  const placeholder = text("Placeholder", `Type a date (mm-dd)...`, "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <DateInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
      />
    </Box>
  );
});
