import React from 'react';

import Flex from '../flex';
import { CappedText, Heading } from '../typography';
import Tooltip, { TOOLTIP_SIZE } from '../form/inputs/_tooltip';

export default ({ title, value, important, tooltip, ...props }) => (
  <Flex {...props} flexDirection="column">
    <Flex alignItems="center" mb={2} style={{ height: TOOLTIP_SIZE }}>
      <CappedText mb={0} color={important ? 'darkGray' : 'mediumGray'}>
        {title}
      </CappedText>
      {tooltip && <Tooltip tooltip={tooltip} position="top-left" ml={2} />}
    </Flex>
    <Heading fontWeight="normal" mt={0} mb={0} as="span" textStyle="h3">
      {value}
    </Heading>
  </Flex>
);
