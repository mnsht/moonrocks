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

  console.log(avatar, name, hashId, balance, principal, interest, withdrawals);

  return <Box {...props}>Hello</Box>;
};
