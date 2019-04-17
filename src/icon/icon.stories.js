import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { sizeKnob, colorKnob } from "../../storybook-helpers";
import { Check } from "styled-icons/fa-solid";

import Icon from "./";

const stories = storiesOf("Icon", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const size = sizeKnob("Size", 2, "Main");
  const color = colorKnob("Color", "success", "Main");

  return <Icon icon={Check} size={size} m={3} color={color} />;
});
