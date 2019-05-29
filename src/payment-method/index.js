import React from 'react';

import { CreditCard, University, Trash } from 'styled-icons/fa-solid';

import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { InlineText } from '../typography';
import Icon from '../icon';

export default ({ type, addedOn, lastFour, onRemove, ...props }) => (
  <Card p={[3, 4]} {...props}>
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
            icon={type === 'card' ? CreditCard : University}
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
        icon={Trash}
        color="error500"
        hoverColor="error700"
        onClick={onRemove}
      />
    </Flex>
    <InlineText fontWeight="bold" letterSpacing="crazy" fontSize={3}>
      {type === 'card' ? '**** **** **** ' : '*****'}
      {lastFour}
    </InlineText>
  </Card>
);
