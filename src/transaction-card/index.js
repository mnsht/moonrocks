import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import { currencyFormat } from '../_helpers';
import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { Heading, InlineText, Paragraph } from '../typography';

const getName = type => {
  if (type === 'deposit') return 'Deposit';
  else if (type === 'external') return 'External Deposit';
  else if (type === 'withdrawal') return 'Withdrawal';

  return '';
};

const getDescription = type => {
  if (type === 'deposit') return 'A deposit made into your 529 account';
  else if (type === 'external')
    return 'A deposit made directly into your 529 account';
  else if (type === 'withdrawal')
    return 'A withdrawal made from your 529 account';

  return '';
};

const getBorderColor = type => {
  if (type === 'contribution') return 'primary900';
  else if (type === 'deposit') return 'primary500';
  else if (type === 'withdrawal') return 'error500';
  else if (type === 'external') return 'lightGray';
};

const TransactionCard = styled(Card)(props => ({
  borderLeft: `${themeGet('space.2')(props)}px solid ${themeGet(
    `colors.${getBorderColor(props.type)}`
  )(props)}`
}));

const ContentBox = styled(Box)({
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
});

const HiddenParagraph = styled(Paragraph)({
  flex: 1,
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
  overflow: 'hidden'
});

export default ({ name, type, timeAgo, description, amount, ...props }) => (
  <TransactionCard {...props} p={3} type={type}>
    <Flex alignItems="center">
      <ContentBox width={['auto', 200]} mr={3}>
        <Heading as="h5" textStyle="h5" style={{ display: 'inline' }}>
          {type === 'contribution' ? name : getName(type)}
        </Heading>
        <InlineText mt={1} color="lightGray" style={{ display: 'block' }}>
          {timeAgo}
        </InlineText>
      </ContentBox>
      <HiddenParagraph mb={0} mr={3} display={['none', 'block']}>
        {type === 'contribution' ? description : getDescription(type)}
      </HiddenParagraph>
      <InlineText
        color="mediumGray"
        fontWeight="bold"
        textAlign="right"
        style={{ marginLeft: 'auto' }}
      >
        {currencyFormat(amount)}
      </InlineText>
    </Flex>
  </TransactionCard>
);
