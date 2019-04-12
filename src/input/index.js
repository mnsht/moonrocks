import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

import Box from "../box";
import { InlineText } from "../typography";

/*
- DONE: Text
- DONE: Email
- Phone
- Date
- SSN visible
- SSN hidden
- Select
- Borderless select (used in graphs on plan overview, could just be a variant of Select)
- Number
- Currency (similar to number input)
- Checkbox
- Radio
- Switch (instead of button toggle)
- DONE: Required for all
- Tooltips for all (remember to export this, as it can also be used outside a form)
- Validation for all (or perhaps do this inside of app?)
- Success, warning, and alert states for all (with position absolute, not affecting next row)

- MAYBE: Button toggle
- MAYBE: Left icons for all
*/

const REQUIRED_WIDTH = 14;

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

const Required = () => <RequiredElem>*</RequiredElem>;

const InputContainer = styled(Box)({
  position: "relative"
});

const determineInputRightPadding = props => {
  const { required } = props;

  let additionalPadding = 0;

  if (required) {
    additionalPadding += REQUIRED_WIDTH + themeGet("space.3")(props);
  }

  return themeGet("space.3")(props) + additionalPadding;
};

const Input = styled(Box)(props => ({
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
  lineHeight: "normal"
};

Input.displayName = "Input";

const BaseInput = ({ type, ...props }) => (
  <InputContainer>
    <Input {...props} type={type} />
    {props.required && <Required />}
  </InputContainer>
);

export const TextInput = props => <BaseInput type="text" {...props} />;
export const EmailInput = props => <BaseInput type="email" {...props} />;
