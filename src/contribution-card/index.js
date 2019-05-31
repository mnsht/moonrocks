import React from 'react';

import { currencyFormat } from '../_helpers';
import Card from '../card';
import Flex from '../flex';
import {
  Heading,
  CappedText,
  InteractiveLink,
  InlineText
} from '../typography';
import Avatar from '../avatar';

export default ({
  avatar,
  name,
  timeAgo,
  amount,
  type,
  interval,
  onCancelRecurring,
  ...props
}) => {
  const isRecurring = interval && onCancelRecurring;

  return (
    <Card {...props} p={[3, 4]}>
      <Flex flexDirection="column" alignItems="center">
        <Avatar src={avatar} size={[4, 5]} mb={2} />
        <Heading fontWeight="normal" as="h4" textStyle="h4" mb={2}>
          {name}
        </Heading>
        <CappedText color="lightGray">{timeAgo}</CappedText>
        <Heading fontWeight="normal" as="span" textStyle="h3">
          {currencyFormat(amount)}
          {isRecurring && ` / ${interval}`}
        </Heading>
        {!isRecurring && (
          <InlineText color="mediumGray">One-time {type}</InlineText>
        )}
        {isRecurring && (
          <InteractiveLink onClick={onCancelRecurring} colors="error">
            Cancel recurring contribution
          </InteractiveLink>
        )}
      </Flex>
    </Card>
  );
};
