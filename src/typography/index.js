import styled from "styled-components";
import { Text as BaseText } from "rebass";
import { textStyle, themeGet } from "styled-system";

export const InlineText = styled(BaseText)(
  {
    WebkitFontSmoothing: "antialiased"
  },
  textStyle
);

InlineText.defaultProps = {
  as: "span",
  m: 0,
  fontFamily: "main",
  fontSize: [1, 1, 2],
  lineHeight: "normal"
};

InlineText.displayName = "InlineText";

export const Paragraph = styled(BaseText)(
  {
    WebkitFontSmoothing: "antialiased"
  },
  textStyle
);

Paragraph.defaultProps = {
  as: "p",
  mt: 0,
  mb: 3,
  fontFamily: "main",
  fontSize: [1, 1, 2],
  lineHeight: "paragraph"
};

Paragraph.displayName = "Paragraph";

export const CappedText = styled(BaseText)(props => ({
  WebkitFontSmoothing: "antialiased",
  display: "inline-block",
  userSelect: "none",
  fontFamily: themeGet("fonts.main")(props),
  fontWeight: themeGet("fontWeights.extraBold")(props),
  textTransform: "uppercase",
  letterSpacing: themeGet("letterSpacings.spaced")(props)
}));

CappedText.defaultProps = {
  as: "span",
  mt: 0,
  mb: 2,
  fontSize: [1, 1, 2],
  color: "darkGray"
};

CappedText.displayName = "CappedText";
