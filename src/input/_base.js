import styled from "styled-components";
import { themeGet } from "styled-system";

import { REQUIRED_SIZE } from "./_required";
import { TOOLTIP_SIZE } from "./_tooltip";

import Box from "../box";

export const determineInputRightPadding = (required, tooltip, spacer) => {
  let additionalPadding = 0;

  if (required) {
    additionalPadding += REQUIRED_SIZE + spacer;
  }

  if (tooltip) {
    additionalPadding += TOOLTIP_SIZE + spacer;
  }

  return spacer + additionalPadding;
};

const determineBorderRadius = props =>
  props.hasMessages
    ? `${themeGet("radii.normal")(props)}px ${themeGet("radii.normal")(
        props
      )}px 0px 0px`
    : themeGet("radii.normal")(props);

export const Input = styled(Box)(props => ({
  padding: themeGet("space.3")(props),
  paddingRight: determineInputRightPadding(
    props.required,
    props.tooltip,
    themeGet("space.3")(props)
  ),
  width: "100%",
  transition: `border ${themeGet("animations.fast")(props)} ease-in-out`,
  borderRadius: determineBorderRadius(props),
  border: `1px solid ${themeGet("colors.snow")(props)}`,
  "&:focus": {
    border: `1px solid ${themeGet("colors.primary")(props)}`
  }
}));

Input.defaultProps = {
  as: "input",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal",
  backgroundColor: "trueWhite",
  color: "black"
};

Input.displayName = "Input";

export const Textarea = styled(Input)({
  resize: "none",
  paddingTop: "10px",
  minHeight: "90px"
});

Textarea.defaultProps = {
  as: "textarea",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "title",
  backgroundColor: "trueWhite",
  color: "black"
};

Textarea.displayName = "Textarea";

export const InputContainer = styled(Box)({
  position: "relative"
});
