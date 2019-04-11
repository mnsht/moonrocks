import React from "react";
import { storiesOf } from "@storybook/react";
import { withKnobs, text } from "@storybook/addon-knobs";

import Flex from "./";
import Box from "../box";

const stories = storiesOf("Flex", module);

stories.addDecorator(withKnobs);

stories.add("default", () => {
  const content = text("Text", "Sample Text", "Main");

  return (
    <Flex flexDirection={["column", "column", "row"]}>
      <Box p="2">{content}</Box>
      <Box p="2">{content}</Box>
      <Box p="2">{content}</Box>
    </Flex>
  );
});
