import styled from "styled-components";
import { Button as BaseButton } from "rebass";
import { themeGet } from "styled-system";

const Button = styled(BaseButton)(props => ({
  outline: 0,
  border: 0,
  textTransform: "uppercase",
  fontFamily: themeGet("fonts.main")(props),
  fontWeight: themeGet("fontWeights.extraBold")(props),
  letterSpacing: themeGet("letterSpacings.spaced")(props),
  transition: `background ${themeGet("animations.fast")(props)} ease-in-out`,
  userSelect: "none",
  cursor: props.disabled ? "default" : "pointer",
  opacity: props.disabled ? themeGet("opacities.1")(props) : 1,
  pointerEvents: props.disabled ? "none" : "initial"
}));

Button.defaultProps = {
  as: "button",
  variant: "primary",
  width: [1, "auto"],
  p: 3,
  mb: [2, 3],
  fontSize: [1, 1, 2],
  borderRadius: "normal"
};

Button.displayName = "Button";

export default Button;
