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

const determineBorders = props => ({
  transition: `border ${themeGet("animations.fast")(props)} ease-in-out`,
  borderRadius: determineBorderRadius(props),
  border: `1px solid ${themeGet("colors.snow")(props)}`,
  "&:focus": {
    border: `1px solid ${themeGet("colors.primary")(props)}`
  }
});

export const Input = styled(Box)(props => ({
  padding: themeGet("space.3")(props),
  paddingRight: determineInputRightPadding(
    props.required,
    props.tooltip,
    themeGet("space.3")(props)
  ),
  width: "100%",
  ...determineBorders(props)
}));

Input.defaultProps = {
  ...Box.defaultProps,
  as: "input",
  mb: 3,
  backgroundColor: "trueWhite"
};

Input.displayName = "Input";

export const Textarea = styled(Input)({
  resize: "none",
  paddingTop: "10px",
  minHeight: "90px"
});

Textarea.defaultProps = {
  ...Box.defaultProps,
  ...Input.defaultProps,
  as: "textarea",
  lineHeight: "title"
};

Textarea.displayName = "Textarea";

export const InputContainer = styled(Box)({
  position: "relative"
});
