import React from "react";
import styled from "styled-components";
import { Text as BaseText } from "rebass";
import { textStyle, colorStyle, themeGet } from "styled-system";

export const InlineText = styled(BaseText)({
  WebkitFontSmoothing: "antialiased"
});

InlineText.defaultProps = {
  as: "span",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal"
};

InlineText.displayName = "InlineText";

export const Paragraph = styled(BaseText)({
  WebkitFontSmoothing: "antialiased"
});

Paragraph.defaultProps = {
  as: "p",
  mt: 0,
  mb: 3,
  fontFamily: "main",
  fontSize: 2,
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

export const Heading = styled(BaseText)(
  {
    WebkitFontSmoothing: "antialiased"
  },
  textStyle
);

Heading.defaultProps = {
  as: "h3",
  variant: "h3",
  mt: 2,
  mb: 3,
  fontFamily: "main",
  lineHeight: "title",
  fontWeight: "bold"
};

Heading.displayName = "Heading";

export const InternalLink = styled(BaseText)(
  props => ({
    WebkitFontSmoothing: "antialiased",
    textDecoration: "none",
    cursor: "pointer",
    transition: `color ${themeGet("animations.fast")(props)} ease-in-out`
  }),
  colorStyle
);

InternalLink.defaultProps = {
  as: "a",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal",
  color: "primary"
};

InternalLink.displayName = "InternalLink";

export const ExternalLink = ({ children, ...props }) => (
  <InternalLink {...props} target="_blank" rel="noopener noreferrer">
    {children}
  </InternalLink>
);

ExternalLink.displayName = "ExternalLink";

export const InteractiveLink = ({ children, ...props }) => (
  <InternalLink {...props} as="span">
    {children}
  </InternalLink>
);

InteractiveLink.displayName = "InteractiveLink";
