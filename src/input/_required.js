import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { TOOLTIP_SIZE } from "./_tooltip";
import { InlineText } from "../typography";

export const REQUIRED_SIZE = 14;

const RequiredElem = styled(InlineText)(props => ({
  position: "absolute",
  height: `${REQUIRED_SIZE}px`,
  width: `${REQUIRED_SIZE}px`,
  lineHeight: "0.85",
  top: "20px",
  right: props.tooltip
    ? themeGet("space.3")(props) + TOOLTIP_SIZE + themeGet("space.3")(props)
    : themeGet("space.3")(props),
  fontWeight: themeGet("fontWeights.extraBold")(props),
  color: themeGet("colors.error")(props),
  fontSize: themeGet("fontSizes.5")(props),
  userSelect: "none"
}));

export default ({ tooltip }) => (
  <RequiredElem tooltip={tooltip}>*</RequiredElem>
);
