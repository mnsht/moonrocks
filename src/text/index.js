import styled from "styled-components";
import { Text as BaseText } from "rebass";
import { textStyle } from "styled-system";

const Text = styled(BaseText)(
  {
    WebkitFontSmoothing: "antialiased"
  },
  textStyle
);

Text.defaultProps = {
  as: "span",
  m: 0,
  fontFamily: "main",
  fontSize: [1, 1, 2],
  lineHeight: "normal"
};

Text.displayName = "Text";

export default Text;
