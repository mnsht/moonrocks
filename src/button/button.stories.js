import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";

import { buttonVariantKnob } from "../../storybook-helpers";

import Button from "./";

const stories = storiesOf("Button", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const content = text("Text", "Sample Button", "Main");
  const disabled = boolean("Is disabled?", false, "Main");
  const variant = buttonVariantKnob("Type", "primary", "Main");

  return (
    <Button disabled={disabled} variant={variant}>
      {content}
    </Button>
  );
});
