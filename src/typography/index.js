import React from 'react';
import styled from 'styled-components';
import {
  textAlign,
  letterSpacing,
  textStyle,
  colorStyle,
  themeGet
} from 'styled-system';
import { Link } from 'react-router-dom';
import Box from '../box';

const Text = styled(Box)(textAlign, letterSpacing);

Text.defaultProps = { ...Box.defaultProps };

export const InlineText = styled(Text)({});

InlineText.defaultProps = {
  ...Text.defaultProps,
  as: 'span',
  display: 'inline'
};

InlineText.displayName = 'InlineText';

export const Paragraph = styled(Text)({});

Paragraph.defaultProps = {
  ...Text.defaultProps,
  as: 'p',
  mt: 0,
  mb: 3,
  display: 'block',
  lineHeight: 'paragraph'
};

Paragraph.displayName = 'Paragraph';

export const CappedText = styled(Text)(props => ({
  userSelect: 'none',
  fontFamily: themeGet('fonts.main')(props),
  fontWeight: themeGet('fontWeights.extraBold')(props),
  textTransform: 'uppercase',
  letterSpacing: themeGet('letterSpacings.spaced')(props)
}));

CappedText.defaultProps = {
  ...Text.defaultProps,
  as: 'span',
  mt: 0,
  mb: 2,
  fontSize: [1, 1, 2],
  color: 'darkGray',
  display: 'inline-block'
};

CappedText.displayName = 'CappedText';

export const Heading = styled(Text)(textStyle);

Heading.defaultProps = {
  ...Text.defaultProps,
  display: 'block',
  as: 'h3',
  variant: 'h3',
  mt: [1, null, 2],
  mb: [2, null, 3],
  lineHeight: 'title',
  fontWeight: 'bold'
};

Heading.displayName = 'Heading';

export const InternalLink = styled(Text)(
  props => ({
    textDecoration: 'none',
    cursor: 'pointer',
    transition: `color ${themeGet('animations.fast')(props)} ease-in-out`
  }),
  colorStyle
);

InternalLink.defaultProps = {
  ...Text.defaultProps,
  as: Link,
  colors: 'primary'
};

InternalLink.displayName = 'InternalLink';

export const ExternalLinkProps = {
  target: '_blank',
  rel: 'noopener noreferrer'
};

export const ExternalLink = ({ children, to, ...props }) => (
  <InternalLink {...props} href={to} as="a" {...ExternalLinkProps}>
    {children}
  </InternalLink>
);

ExternalLink.displayName = 'ExternalLink';

export const InteractiveLink = ({ children, ...props }) => (
  <InternalLink {...props} as="span">
    {children}
  </InternalLink>
);

InteractiveLink.displayName = 'InteractiveLink';
