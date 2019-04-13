import styled from "styled-components";
import { themeGet } from "styled-system";

import { REQUIRED_SIZE } from "./_required";
import { TOOLTIP_SIZE } from "./_tooltip";

import Box from "../box";

const determineInputRightPadding = props => {
  const { required, tooltip } = props;

  let additionalPadding = 0;

  if (required) {
    additionalPadding += REQUIRED_SIZE + themeGet("space.3")(props);
  }
  if (tooltip) {
    additionalPadding += TOOLTIP_SIZE + themeGet("space.3")(props);
  }

  return themeGet("space.3")(props) + additionalPadding;
};

export const Input = styled(Box)(props => ({
  padding: themeGet("space.3")(props),
  paddingRight: determineInputRightPadding(props),
  width: "100%",
  transition: `border ${themeGet("animations.fast")(props)} ease-in-out`,
  borderRadius: themeGet("radii.normal")(props),
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
