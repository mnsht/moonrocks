import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean, button } from "@storybook/addon-knobs";
import { StateDecorator, Store } from "@sambego/storybook-state";

import {
  TextInput,
  EmailInput,
  PasswordInput,
  CheckboxInput,
  CheckboxInputs,
  RadioInput,
  RadioInputs,
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

const store = new Store({
  messages: {
    warnings: [],
    errors: []
  }
});

stories.addDecorator(withKnobs);
stories.addDecorator(StateDecorator(store));

stories.add("as a text input", () => {
  const placeholder = text("Placeholder", "Type something...", "Main");
  const required = boolean("Is required?", true, "Main");
  const tooltip = text("Tooltip text", "Hello world!", "Main");

  const addMessage = (type, text) => {
    const newMessages = store.get("messages");

    newMessages[type].push(text);

    store.set({ messages: newMessages });
  };

  const removeMessage = type => {
    const newMessages = store.get("messages");

    newMessages[type].shift();

    store.set({ messages: newMessages });
  };

  button("Add warning", () => addMessage("warnings", "Password isn't strong"));
  button("Add error", () => addMessage("errors", "This field is required"));
  button("Remove warning", () => removeMessage("warnings"));
  button("Remove error", () => removeMessage("errors"));

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextInput
        placeholder={placeholder}
        required={required}
        tooltip={tooltip}
        messages={store.get("messages")}
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

stories.add("as a checkbox input", () => {
  const label = text("Label", "Do we wanna do this?", "Main");
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <CheckboxInput
        label={label}
        required={required}
        tooltip={tooltip}
        initialValue={true}
        onChange={value => console.log("STORY", value)}
      />
    </Box>
  );
});

stories.add("as multiple checkboxes", () => {
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  const options = [
    {
      value: "blue",
      label: "Blue pill"
    },
    {
      value: "red",
      label: "Red pill"
    },
    {
      value: "rainbow",
      label: "Rainbow pill"
    }
  ];

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <CheckboxInputs
        options={options}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log("STORY", value)}
      />
    </Box>
  );
});

stories.add("as multiple radios", () => {
  const required = boolean("Is required?", false, "Main");
  const tooltip = text("Tooltip text", null, "Main");

  const options = [
    {
      value: "blue",
      label: "Blue pill"
    },
    {
      value: "red",
      label: "Red pill"
    },
    {
      value: "rainbow",
      label: "Rainbow pill"
    }
  ];

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <RadioInputs
        options={options}
        required={required}
        tooltip={tooltip}
        onChange={value => console.log("STORY", value)}
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
