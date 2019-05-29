import React from 'react';
import styled from 'styled-components';
import { display } from 'styled-system';
import { Link } from 'react-router-dom';

import { Link as LinkIcon } from 'styled-icons/fa-solid';
import {
  FacebookSquare as Facebook,
  TwitterSquare as Twitter
} from 'styled-icons/fa-brands';

import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { ResponsiveAvatar } from '../avatar';
import { Heading, CappedText, InternalLink } from '../typography';
import Button from '../button';
import { default as BaseTooltip } from '../form/inputs/_tooltip';
import Icon from '../icon';

const Tooltip = styled(BaseTooltip)(display);

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
      title: 'Account Balance',
      amount: balance
    },
    {
      title: 'Principal',
      tooltip:
        'The combined amount of money you and others have put into the account.',
      amount: principal
    },
    {
      title: 'Interest Earned',
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

  const avatarSizes = [
    { size: 3, display: ['block', 'none'] },
    { size: 4, display: ['none', 'block'] }
  ];

  const currencyFormat = num => {
    let value = num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });

    if (value.substr(value.length - 3) === '.00')
      return value.substr(0, value.length - 3);

    return value;
  };

  return (
    <Card p={4} {...props}>
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
            <ResponsiveAvatar src={avatar} sizes={avatarSizes} />
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
                  icon={Facebook}
                  size={1}
                  color="facebook"
                  hoverColor="facebookHover"
                  mr={3}
                  onClick={() => openFacebook(profileUrl)}
                />
                <Icon
                  icon={Twitter}
                  size={1}
                  color="twitter"
                  hoverColor="twitterHover"
                  mr={3}
                  onClick={() => openTwitter(profileUrl)}
                />
                <Icon
                  icon={LinkIcon}
                  size={1}
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
              <Box
                mb={isLast ? 0 : [3, 0]}
                width={['auto', null, `${100 / financialsArray.length}%`]}
              >
                <Flex alignItems="center" mb={2}>
                  <CappedText
                    mb={0}
                    textAlign={['center', 'left']}
                    color={isFirst ? 'darkGray' : 'mediumGray'}
                  >
                    {title}
                  </CappedText>
                  {tooltip && (
                    <Tooltip
                      display={['none', null, 'block']}
                      tooltip={tooltip}
                      position="top-left"
                      ml={2}
                    />
                  )}
                </Flex>
                <Heading
                  textAlign={['center', 'left']}
                  fontWeight="normal"
                  mt={0}
                  mb={0}
                  as="span"
                  textStyle="h3"
                >
                  {currencyFormat(amount)}
                </Heading>
              </Box>
            );
          })}
        </Flex>
      </Flex>
    </Card>
  );
};
