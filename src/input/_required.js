import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { InlineText } from "../typography";

export const REQUIRED_WIDTH = 14;

const RequiredElem = styled(InlineText)(props => ({
  position: "absolute",
  height: `${REQUIRED_WIDTH}px`,
  width: `${REQUIRED_WIDTH}px`,
  lineHeight: "0.85",
  top: "20px",
  right: themeGet("space.3")(props),
  fontWeight: themeGet("fontWeights.extraBold")(props),
  color: themeGet("colors.error")(props),
  fontSize: themeGet("fontSizes.5")(props),
  userSelect: "none"
}));

export default () => <RequiredElem>*</RequiredElem>;
