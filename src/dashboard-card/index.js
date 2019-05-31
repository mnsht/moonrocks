import React from 'react';
import { Link } from 'react-router-dom';

import { FaLink } from 'react-icons/fa';
import { FaFacebookSquare, FaTwitterSquare } from 'react-icons/fa';

import { currencyFormat } from '../_helpers';
import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import Avatar from '../avatar';
import { Heading, InternalLink } from '../typography';
import Button from '../button';
import Icon from '../icon';
import Statistic from '../statistic';

export default ({
  avatar,
  name,
  hashId,
  financials,
  openDepositDialog,
  openFacebook,
  openTwitter,
  onCopyProfile,
  ...props
}) => {
  const { balance, principal, interest, withdrawals } = financials;
  const profileUrl = `/scholars/${hashId}/${name
    .split(' ')
    .join('-')
    .toLowerCase()}`;
  const overviewUrl = `/dashboard/plans/${hashId}/overview`;

  const financialsArray = [
    {
      title: 'Balance',
      amount: balance
    },
    {
      title: 'Principal',
      tooltip:
        'The combined amount of money you and others have put into the account.',
      amount: principal
    },
    {
      title: 'Interest',
      tooltip:
        'Your principal money is invested, and this is the income earned off of your investments. AKA “Free Money”',
      amount: interest
    },
    {
      title: 'Withdrawal',
      tooltip:
        'Please make your withdrawals through NYSaves. We are working to make this available on Scholar Raise.',
      amount: withdrawals
    }
  ];

  return (
    <Card {...props} p={4}>
      <Flex flexDirection="column" alignItems="center">
        <Flex
          flexDirection={['column', 'row']}
          alignItems="center"
          justifyContent="space-between"
          width={['auto', '100%']}
          mb={[3, 4]}
        >
          <Flex
            flexDirection={['column', 'row']}
            alignItems="center"
            mb={[3, 0]}
          >
            <Avatar src={avatar} size={[4, 5]} />
            <Box ml={[0, 3]} mt={[3, 0]}>
              <InternalLink to={overviewUrl}>
                <Heading
                  textAlign={['center', 'left']}
                  fontWeight={['normal', 'bold']}
                  as="h3"
                  textStyle="h3"
                  mt={0}
                  mb={0}
                >
                  {name}
                </Heading>
              </InternalLink>
              <Flex
                justifyContent={['center', 'flex-start']}
                alignItems="center"
              >
                <Icon
                  icon={FaFacebookSquare}
                  size={2}
                  color="facebook"
                  hoverColor="facebookHover"
                  mr={3}
                  onClick={() => openFacebook(profileUrl)}
                />
                <Icon
                  icon={FaTwitterSquare}
                  size={2}
                  color="twitter"
                  hoverColor="twitterHover"
                  mr={3}
                  onClick={() => openTwitter(profileUrl)}
                />
                <Icon
                  icon={FaLink}
                  size={2}
                  color="lightGray"
                  hoverColor="mediumGray"
                  onClick={() => onCopyProfile(profileUrl)}
                />
              </Flex>
            </Box>
          </Flex>
          <Flex alignItems="center">
            <Button mb={0} onClick={openDepositDialog}>
              Deposit
            </Button>
            <Button mb={0} ml={3} to={profileUrl} variant="secondary" as={Link}>
              View Profile
            </Button>
          </Flex>
        </Flex>
        <Flex
          flexDirection={['column', 'row']}
          alignItems="center"
          justifyContent="space-between"
          width={['auto', '100%']}
        >
          {financialsArray.map(({ title, tooltip, amount }, index) => {
            const isLast = financialsArray.length - 1 === index;
            const isFirst = index === 0;

            return (
              <Statistic
                key={index}
                mb={isLast ? 0 : [3, 0]}
                alignItems={['center', 'flex-start']}
                width={['auto', null, `${100 / financialsArray.length}%`]}
                title={title}
                important={isFirst}
                value={currencyFormat(amount)}
                tooltip={tooltip}
              />
            );
          })}
        </Flex>
      </Flex>
    </Card>
  );
};
