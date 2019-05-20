import React from 'react';
import Cleave from 'cleave.js/react';

import { Input } from '../_base';

export default ({ onChange, ...props }) => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      numeralPositiveOnly: true,
      prefix: '$',
      noImmediatePrefix: true,
      rawValueTrimPrefix: true
    }}
    onChange={event => {
      if (typeof onChange === 'function') onChange(event.target.rawValue);
    }}
  />
);
