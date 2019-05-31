import React from 'react';

import { FaCreditCard, FaUniversity, FaTrash } from 'react-icons/fa';

import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { InlineText } from '../typography';
import Icon from '../icon';

export default ({ type, addedOn, lastFour, onRemove, ...props }) => (
  <Card {...props} p={[3, 4]}>
    <Flex justifyContent="space-between" mb={[5, 6]}>
      <Box
        style={{
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          overflow: 'hidden'
        }}
      >
        <Flex alignItems="center" mb={2}>
          <Icon
            icon={type === 'card' ? FaCreditCard : FaUniversity}
            color="mediumGray"
            size={1}
            mr={2}
          />
          <InlineText fontWeight="bold" fontSize={3} ml={[0, 1]}>
            {type === 'card' ? 'Card' : 'Bank account'}
          </InlineText>
        </Flex>
        <InlineText color="mediumGray">Added on {addedOn}</InlineText>
      </Box>
      <Icon
        icon={FaTrash}
        color="error500"
        hoverColor="error700"
        size={1}
        onClick={onRemove}
      />
    </Flex>
    <InlineText fontWeight="bold" letterSpacing="crazy" fontSize={3}>
      {type === 'card' ? '**** **** **** ' : '*****'}
      {lastFour}
    </InlineText>
  </Card>
);
