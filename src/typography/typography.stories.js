import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import { InlineText, Paragraph, CappedText } from "./";

const sampleParagraph = `
  This is just a sample paragraph with no exact meaning. The official records have been lost
  for decades and I am entering a hyperloop. One should approach such matters with precaution
  in order to maintain the status quo. Before I was a child, I had dreams of ribbons in the sky,
  but do not fall prey to the lies of elders. And as always, remember the timecube.
`;

const stories = storiesOf("Text", module);

stories.addDecorator(withKnobs);

stories.add("as inline text", () => {
  const content = text("Text", "Sample Text", "Main");

  return <InlineText>{content}</InlineText>;
});

stories.add("as a parargaph", () => {
  const content = text("Text", sampleParagraph, "Main");

  return (
    <React.Fragment>
      <Paragraph>{content}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </React.Fragment>
  );
});

stories.add("as capped text", () => {
  const content = text("Text", "Important Title", "Main");

  return (
    <React.Fragment>
      <CappedText>{content}</CappedText>
      <Paragraph>Content of something important</Paragraph>
    </React.Fragment>
  );
});
