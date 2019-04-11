import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { TextInput } from "./";

const stories = storiesOf("Input", module);

stories.addDecorator(withKnobs);

stories.add("as inline text", () => {
  const content = text("Text", "Sample Text", "Main");

  return <TextInput placeholder={content} />;
});
