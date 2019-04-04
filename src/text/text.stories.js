import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Text from "./";

const sampleParagraph = `
  This is just a sample paragraph with no exact meaning. The official records have been lost
  for decades and I am entering a hyperloop. One should approach such matters with precaution
  in order to maintain the status quo. Before I was a child, I had dreams of ribbons in the sky,
  but do not fall prey to the lies of elders. And as always, remember the timecube.
`;

const stories = storiesOf("Text", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const content = text("Text", "Sample Text", "Main");

  return <Text>{content}</Text>;
});

stories.add("as a parargaph", () => {
  const content = text("Text", sampleParagraph, "Main");

  return (
    <Text as="p" lineHeight="paragraph">
      {content}
    </Text>
  );
});
