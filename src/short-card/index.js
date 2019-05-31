import React from 'react';

import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { InlineText } from '../typography';
import Icon from '../icon';

export default ({ title, description, buttons, ...props }) => (
  <Card p={3} {...props}>
    <Flex justifyContent="space-between" alignItems="center">
      <Box
        mr={[2, 3]}
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        <InlineText fontWeight="bold" mb={1} style={{ display: 'block' }}>
          {title}
        </InlineText>
        <InlineText color="mediumGray">{description}</InlineText>
      </Box>
      <Flex>
        {buttons.map(({ icon, color, hoverColor, onClick }, index) => (
          <Icon
            icon={icon}
            color={color}
            hoverColor={hoverColor}
            size={0}
            ml={index !== 0 && 3}
            onClick={onClick}
          />
        ))}
      </Flex>
    </Flex>
  </Card>
);
