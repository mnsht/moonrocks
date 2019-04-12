import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { TextInput, EmailInput, PhoneInput, SSNInput } from "./";
import Box from "../box";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

stories.add("as text input", () => {
  const placeholder = text("Placeholder", "Sample Text", "Main");
  const required = boolean("Is required?", false, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextInput placeholder={placeholder} required={required} />
    </Box>
  );
});

stories.add("as email input", () => {
  const placeholder = text("Placeholder", "Type your email...", "Main");
  const required = boolean("Is required?", false, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <EmailInput placeholder={placeholder} required={required} />
    </Box>
  );
});

stories.add("as phone input", () => {
  const placeholder = text("Placeholder", "Type your phone number...", "Main");
  const required = boolean("Is required?", false, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <PhoneInput placeholder={placeholder} required={required} />
    </Box>
  );
});

stories.add("as SSN input", () => {
  const placeholder = text("Placeholder", "Type your SSN...", "Main");
  const required = boolean("Is required?", false, "Main");
  const hidden = boolean("Is hidden?", false, "Main");
  const value = hidden ? text("SSN", "***-**-1210", "Main") : null;

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <SSNInput
        placeholder={placeholder}
        required={required}
        hidden={hidden}
        value={value}
      />
    </Box>
  );
});
