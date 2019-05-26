import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
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

const CappedLink = styled(CappedText)(props => ({
  marginBottom: 0,
  padding: themeGet('space.2')(props),
  transition: `color ${themeGet('animations.fast')(props)} ease-in-out`,
  color: themeGet('colors.mediumGray')(props),
  '&:hover': {
    color: themeGet('colors.darkGray')(props)
  }
}));

export default ({ links }) => {
  return (
    <Flex flexDirection={['column', null, 'row']}>
      {links.map(({ to, onClick, title, button }, index) => {
        const CappedTitle = <CappedLink>{title}</CappedLink>;

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
    </Flex>
  );
};
