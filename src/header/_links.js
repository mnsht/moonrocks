import React from 'react';
import styled from 'styled-components';
import { themeGet, display } from 'styled-system';
import { Link } from 'react-router-dom';

import Flex from '../flex';
import Button from '../button';
import {
  CappedText,
  InternalLink,
  ExternalLink,
  ExternalLinkProps,
  InteractiveLink
} from '../typography';

const getVariant = ({ variant, ...props }) => {
  if (variant === 'light') {
    return {
      color: themeGet('colors.mediumGray')(props),
      '&:hover': {
        color: themeGet('colors.darkGray')(props)
      }
    };
  } else if (variant === 'dark') {
    return {
      color: themeGet('colors.mediumGray')(props),
      '&:hover': {
        color: themeGet('colors.snow')(props)
      }
    };
  } else if (variant === 'transparent') {
    return {
      color: themeGet('colors.lightGray')(props),
      '&:hover': {
        color: themeGet('colors.darkGray')(props)
      }
    };
  }

  return null;
};

const Links = styled(Flex)(display);

const CappedLink = styled(CappedText)(props => ({
  marginBottom: 0,
  padding: themeGet('space.2')(props),
  transition: `color ${themeGet('animations.fast')(props)} ease-in-out`,
  ...getVariant(props)
}));

const determineDisplay = breakpoint => {
  if (breakpoint === 'above') {
    return ['none', null, 'flex'];
  } else if (breakpoint === 'below') {
    return ['flex', null, 'none'];
  }

  return 'none';
};

export default ({ links, breakpoint, variant }) => (
  <Links
    flexDirection={['column', null, 'row']}
    alignItems="center"
    display={determineDisplay(breakpoint)}
  >
    {links.map(({ to, onClick, title, button }, index) => {
      const CappedTitle = (
        <CappedLink
          variant={breakpoint === 'above' ? variant : 'light'} // Don't show variants on mobile layouts
          mr={[0, null, 2]}
        >
          {title}
        </CappedLink>
      );

      if (!to && onClick) {
        if (button) {
          return (
            <Button onClick={onClick} my={2} key={index}>
              {title}
            </Button>
          );
        }

        return (
          <InteractiveLink onClick={onClick} key={index}>
            {CappedTitle}
          </InteractiveLink>
        );
      } else if (to && !onClick) {
        const isExternal = to.includes('http://') || to.includes('https://');

        if (button) {
          if (isExternal) {
            return (
              <Button
                href={to}
                as="a"
                my={2}
                key={index}
                {...ExternalLinkProps}
              >
                {title}
              </Button>
            );
          }
          return (
            <Button to={to} as={Link} my={2} key={index}>
              {title}
            </Button>
          );
        }

        const TheLink = isExternal ? ExternalLink : InternalLink;

        return (
          <TheLink to={to} key={index}>
            {CappedTitle}
          </TheLink>
        );
      }

      return null;
    })}
  </Links>
);
