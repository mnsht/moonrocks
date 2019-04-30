import React from 'react';
import styled from 'styled-components';
import {
  textAlign,
  letterSpacing,
  textStyle,
  colorStyle,
  themeGet
} from 'styled-system';
import Box from '../box';

const Text = styled(Box)(textAlign, letterSpacing);

Text.defaultProps = { ...Box.defaultProps };

export const InlineText = styled(Text)({});

InlineText.defaultProps = {
  ...Text.defaultProps,
  as: 'span'
};

InlineText.displayName = 'InlineText';

export const Paragraph = styled(Text)({});

Paragraph.defaultProps = {
  ...Text.defaultProps,
  as: 'p',
  mt: 0,
  mb: 3,
  lineHeight: 'paragraph'
};

Paragraph.displayName = 'Paragraph';

export const CappedText = styled(Text)(props => ({
  display: 'inline-block',
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
  color: 'darkGray'
};

CappedText.displayName = 'CappedText';

export const Heading = styled(Text)({ display: 'inline-block' }, textStyle);

Heading.defaultProps = {
  ...Text.defaultProps,
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
  as: 'a',
  color: 'primary'
};

InternalLink.displayName = 'InternalLink';

export const ExternalLink = ({ children, ...props }) => (
  <InternalLink {...props} target="_blank" rel="noopener noreferrer">
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
