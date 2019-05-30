import React from 'react';

import Card from '../card';
import Flex from '../flex';
import { Heading, InlineText, Paragraph } from '../typography';
import { ResponsiveAvatar } from '../avatar';

export default ({ avatar, name, timeAgo, description, ...props }) => {
  const avatarSizes = [
    { size: 4, display: ['block', null, 'none'] },
    { size: 5, display: ['none', null, 'block'] }
  ];

  return (
    <Card p={[3, 4]} {...props}>
      <Flex alignItems="center">
        <ResponsiveAvatar src={avatar} sizes={avatarSizes} mr={3} />
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
};
