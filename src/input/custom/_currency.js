import React from 'react';
import Cleave from 'cleave.js/react';

import { Input } from '../_base';

export default props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numeral: true,
      numeralThousandsGroupStyle: 'thousand',
      prefix: '$'
    }}
  />
);
