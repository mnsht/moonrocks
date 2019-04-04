import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { spacingKnob, fontSizeKnob, colorKnob } from "../../storybook-helpers";

import Box from ".";

const stories = storiesOf("Box", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const content = text("Text", "Hello world", "Main");
  const font = fontSizeKnob("Font size", 2, "Main");

  const m = spacingKnob("Margin", 4, "Spacing");
  const p = spacingKnob("Padding", 4, "Spacing");

  const color = colorKnob("Text color", "secondary", "Colors");
  const bg = colorKnob("Background", "primary", "Colors");

  return (
    <Box
      p={p}
      m={m}
      fontSize={font}
      color={color}
      bg={bg}
      width={[2 / 3, 1 / 2, 1 / 4, 1 / 6]}
    >
      {content}
    </Box>
  );
});
