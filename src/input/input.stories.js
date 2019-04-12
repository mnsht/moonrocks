import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { TextInput, EmailInput } from "./";
import Box from "../box";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

stories.add("as text input", () => {
  const content = text("Text", "Sample Text", "Main");
  const required = boolean("Is required?", false, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <TextInput placeholder={content} required={required} />
    </Box>
  );
});

stories.add("as email input", () => {
  const content = text("Text", "Type your email...", "Main");
  const required = boolean("Is required?", false, "Main");

  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <EmailInput placeholder={content} required={required} />
    </Box>
  );
});
