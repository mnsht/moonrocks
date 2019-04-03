import React from "react";
import { ThemeProvider } from "styled-components";
import { configure, addDecorator } from "@storybook/react";

import theme from "../src/theme";

addDecorator(storyFn => (
  <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>
));

const req = require.context("../src", true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
