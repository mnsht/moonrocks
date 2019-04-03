import React from "react";
import { storiesOf } from "@storybook/react";
import Box from "./";

storiesOf("Box", module)
  .add("with text", () => <Box>Hello World</Box>)
  .add("with emoji", () => <Box>😀 😎 👍 💯</Box>);
