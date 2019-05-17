import React from 'react';
import Cleave from 'cleave.js/react';
import 'cleave.js/dist/addons/cleave-phone.us.js';

import { Input } from '../_base';

export default props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      phone: true,
      phoneRegionCode: 'US',
      prefix: '+1'
    }}
  />
);
