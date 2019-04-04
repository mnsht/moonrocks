import styled from "styled-components";
import { Button as BaseButton } from "rebass";
import { themeGet, letterSpacing } from "styled-system";

const Button = styled(BaseButton)(
  props => ({
    outline: 0,
    border: 0,
    textTransform: "uppercase",
    fontFamily: themeGet("fonts.copy")(props),
    fontWeight: themeGet("fontWeights.extraBold")(props),
    cursor: "pointer"
  }),
  letterSpacing
);

Button.defaultProps = {
  as: "button",
  variant: "primary",
  width: [1, "auto"],
  p: 3,
  mb: [2, 3],
  fontSize: [1, 1, 2],
  letterSpacing: "spaced",
  borderRadius: "normal"
};

Button.displayName = "Button";

export default Button;
