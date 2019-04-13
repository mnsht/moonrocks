import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs } from "@storybook/addon-knobs";
import { sizeKnob, colorKnob } from "../../storybook-helpers";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

import Icon, { iconLibrary } from "./";

const stories = storiesOf("Icon", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const size = sizeKnob("Size", 2, "Main");
  const color = colorKnob("Color", "success", "Main");

  iconLibrary.add(faCheck);

  return <Icon icon="check" size={size} m={3} color={color} />;
});
