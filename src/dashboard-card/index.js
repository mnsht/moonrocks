import React from 'react';
import styled from 'styled-components';

import Box from '../box';

export default ({
  avatar,
  name,
  hashId,
  financials,
  openDepositDialog,
  ...props
}) => {
  const { balance, principal, interest, withdrawals } = financials;
  const profileUrl = `/scholars/${hashId}/${name
    .split(' ')
    .join('-')
    .toLowerCase()}`;
  const overviewUrl = `/dashboard/plans/${hashId}/overview`;

  console.log(
    avatar,
    name,
    hashId,
    balance,
    principal,
    interest,
    withdrawals,
    profileUrl,
    overviewUrl
  );

  return <Box {...props}>Hello</Box>;
};
