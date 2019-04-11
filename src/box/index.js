import styled from "styled-components";
import { Box as BaseBox } from "rebass";
import { fontFamily, lineHeight } from "styled-system";

const Box = styled(BaseBox)(
  {
    WebkitFontSmoothing: "antialiased"
  },
  fontFamily,
  lineHeight
);

Box.defaultProps = {
  as: "div",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal"
};

Box.displayName = "Box";

export default Box;
