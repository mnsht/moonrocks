import React from 'react';
import Cleave from 'cleave.js/react';

import { Input } from '../_base';

export default ({ onChange, ...props }) => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numericOnly: true,
      blocks: [0, 3, 0, 3, 4],
      delimiters: ['(', ')', ' ', '-']
    }}
    onChange={event => {
      if (typeof onChange === 'function') onChange(event.target.rawValue);
    }}
  />
);
