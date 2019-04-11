import styled from "styled-components";
import {
  space,
  width,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  color,
  flex,
  order,
  alignSelf
} from "styled-system";

const Box = styled("div")(
  {
    boxSizing: "border-box",
    WebkitFontSmoothing: "antialiased"
  },
  space,
  width,
  fontFamily,
  fontWeight,
  fontSize,
  lineHeight,
  color,
  flex,
  order,
  alignSelf
);

Box.defaultProps = {
  as: "div",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal",
  fontWeight: "regular"
};

Box.displayName = "Box";

export default Box;
