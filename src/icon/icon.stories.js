import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";
import { colorKnob } from "../../storybook-helpers";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

import Icon from "./";

const stories = storiesOf("Icon", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const content = text("Text", "Sample Text", "Main");
  const color = colorKnob("Color", "primary", "Main");

  return <Icon icon={faCoffee} size={3} m={3} color={color} />;
});
