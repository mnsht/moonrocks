import styled from "styled-components";
import Box from "../box";
import {
  themeGet,
  borders,
  borderColor,
  borderRadius,
  buttonStyle
} from "styled-system";

const Button = styled(Box)(
  props => ({
    appearance: "none",
    border: 0,
    display: "inline-block",
    textAlign: "center",
    fontFamily: themeGet("fonts.main")(props),
    fontWeight: themeGet("fontWeights.extraBold")(props),
    letterSpacing: themeGet("letterSpacings.spaced")(props),
    lineHeight: themeGet("lineHeights.normal")(props),
    textDecoration: "none",
    textTransform: "uppercase",
    userSelect: "none",
    transition: `background ${themeGet("animations.fast")(props)} ease-in-out`,
    cursor: props.disabled ? "default" : "pointer",
    opacity: props.disabled ? themeGet("opacities.1")(props) : 1,
    pointerEvents: props.disabled ? "none" : "initial"
  }),
  borders,
  borderColor,
  borderRadius,
  buttonStyle
);

Button.defaultProps = {
  as: "button",
  variant: "primary",
  width: [1, "auto"],
  p: 3,
  mb: [2, 3],
  fontSize: [1, null, 2],
  borderRadius: "normal"
};

Button.displayName = "Button";

export default Button;
