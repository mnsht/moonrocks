import React from 'react';

import Flex from '../flex';
import { InternalLink, ExternalLink, InteractiveLink } from '../typography';

const getVariant = variant => {
  if (variant === 'light') return 'mediumGray';
  else if (variant === 'dark') return 'white';
  else if (variant === 'transparent') return 'lightGray';

  return null;
};

export default ({ links, variant }) => (
  <Flex flexDirection="column">
    {links.map(({ to, onClick, title }, index) => {
      const linkProps = {
        key: index,
        py: 1,
        colors: getVariant(variant)
      };

      if (!to && onClick) {
        return (
          <InteractiveLink onClick={onClick} {...linkProps}>
            {title}
          </InteractiveLink>
        );
      } else if (to && !onClick) {
        const TheLink =
          to.includes('http://') || to.includes('https://')
            ? ExternalLink
            : InternalLink;

        return (
          <TheLink to={to} {...linkProps}>
            {title}
          </TheLink>
        );
      }

      return null;
    })}
  </Flex>
);
