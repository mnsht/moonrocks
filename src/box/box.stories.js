import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { spacingKnob, fontSizeKnob, colorKnob } from "../../storybook-helpers";

import Box from "./";

const stories = storiesOf("Box", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const content = text("Text", "Hello world");

  const m = spacingKnob("Margin", 4, "Spacing");
  const p = spacingKnob("Padding", 4, "Spacing");
  const font = fontSizeKnob("Font size", 2);
  const color = colorKnob("Text color", "lightgray", "Colors");
  const bg = colorKnob("Background", "blue", "Colors");

  return (
    <Box p={p} m={m} fontSize={font} color={color} bg={bg}>
      {content}
    </Box>
  );
});
