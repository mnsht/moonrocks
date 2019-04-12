import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

import Cleave from "cleave.js/react";

import Box from "../box";
import { InlineText } from "../typography";

/*
- DONE: Text
- DONE: Email
- DONE: Phone
- DONE: SSN visible
- DONE: SSN hidden
- Number
- Currency (similar to number input)
- Textarea
- Select
- Date (with various formats)
- Borderless select (used in graphs on plan overview, could just be a variant of Select)
- Checkbox
- Radio
- Switch (instead of button toggle)
- DONE: Required for all
- Validation for all (or perhaps do this inside of app?)
- Success, warning, and alert states for all (with position absolute, not affecting next row)
- Tooltips for all (remember to export this, as it can also be used outside a form)

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

const InputPhone = props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numericOnly: true,
      blocks: [0, 3, 0, 3, 4],
      delimiters: ["(", ")", " ", "-"]
    }}
  />
);

const InputSSN = props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      blocks: [3, 2, 4],
      delimiter: "-",
      numericOnly: true
    }}
  />
);

const InputHiddenSSN = styled(InlineText)(props => ({
  fontWeight: themeGet("fontWeights.bold")(props),
  userSelect: "none"
}));

const InputContainer = styled(Box)({
  position: "relative"
});

const BaseInput = ({ type, ...props }) => (
  <InputContainer>
    {(type === "text" || type === "email") && <Input {...props} type={type} />}
    {type === "phone" && <InputPhone {...props} />}
    {type === "ssn" && <InputSSN {...props} />}
    {props.required && <Required />}
  </InputContainer>
);

export const TextInput = props => <BaseInput type="text" {...props} />;
export const EmailInput = props => <BaseInput type="email" {...props} />;
export const PhoneInput = props => <BaseInput type="phone" {...props} />;
export const SSNInput = ({ hidden, ...props }) =>
  hidden ? (
    <InputHiddenSSN>SSN: {props.value}</InputHiddenSSN>
  ) : (
    <BaseInput type="ssn" {...props} />
  );
