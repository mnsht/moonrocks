import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import { TOOLTIP_SIZE } from "./_tooltip";
import { InlineText } from "../typography";

export const REQUIRED_SIZE = 14;

const determinePositioning = props => {
  if (props.withinInput) {
    return {
      position: "absolute",
      top: "20px",
      right: determineRightPosition(props)
    };
  } else {
    return {
      marginRight: themeGet("space.3")(props)
    };
  }
};

const determineRightPosition = props => {
  const { tooltip, inputType } = props;

  let additionalSpacing = 0;

  if (tooltip) {
    additionalSpacing += themeGet("space.3")(props) + TOOLTIP_SIZE;
  }

  if (inputType === "select" || inputType === "multiselect") {
    additionalSpacing += 38;
  }

  return themeGet("space.3")(props) + additionalSpacing;
};

const RequiredElem = styled(InlineText)(props => ({
  ...determinePositioning(props),
  height: `${REQUIRED_SIZE}px`,
  width: `${REQUIRED_SIZE}px`,
  lineHeight: "0.85",
  fontWeight: themeGet("fontWeights.extraBold")(props),
  color: themeGet("colors.error")(props),
  fontSize: themeGet("fontSizes.5")(props),
  userSelect: "none"
}));

export default props => <RequiredElem {...props}>*</RequiredElem>;
