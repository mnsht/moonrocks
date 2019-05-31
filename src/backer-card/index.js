import React from 'react';

import Card from '../card';
import Flex from '../flex';
import { Heading, InlineText, Paragraph } from '../typography';
import Avatar from '../avatar';

export default ({ avatar, name, timeAgo, description, ...props }) => (
  <Card {...props} p={[3, 4]}>
    <Flex alignItems="center">
      <Avatar src={avatar} size={[4, null, 5]} mr={3} />
      <Flex
        flexDirection={['column', 'row']}
        justifyContent="space-between"
        alignItems={['flex-start', 'center']}
        width="100%"
      >
        <Heading as="h4" textStyle="h3" mt={0} mb={0}>
          {name}
        </Heading>
        <InlineText color="lightGray">{timeAgo}</InlineText>
      </Flex>
    </Flex>
    <Paragraph mt={3} mb={0} color="darkGray">
      {description}
    </Paragraph>
  </Card>
);
