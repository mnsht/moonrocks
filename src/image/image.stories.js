import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Image from "./";

const stories = storiesOf("Image", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const src = text(
    "Image URL",
    "http://www.ghostofaflea.com/archives/RaptorJesus.jpg",
    "Main"
  );
  const alt = text("Alternate text", "Jesus Christ", "Main");

  return <Image src={src} alt={alt} />;
});
