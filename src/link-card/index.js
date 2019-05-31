import React from 'react';

import Card from '../card';
import { Heading, Paragraph, InternalLink } from '../typography';
import Icon from '../icon';

export default ({ icon, title, description, link, ...props }) => {
  return (
    <InternalLink to={link}>
      <Card {...props} p={4}>
        <Icon icon={icon} color="primary" size={4} />
        <Heading mt={3} as="h5" textStyle="h5Static">
          {title}
        </Heading>
        <Paragraph mb={0} color="darkGray">
          {description}
        </Paragraph>
      </Card>
    </InternalLink>
  );
};
