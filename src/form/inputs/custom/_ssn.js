import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import Cleave from 'cleave.js/react';

import { Input } from '../_base';
import { InlineText } from '../../../typography';

export const CustomSSN = ({ onChange, ...props }) => (
  <Input
    {...props}
    as={Cleave}
    options={{
      blocks: [3, 2, 4],
      delimiter: '-',
      numericOnly: true
    }}
    onChange={event => {
      if (typeof onChange === 'function') onChange(event.target.rawValue);
    }}
  />
);

export const CustomHiddenSSN = styled(InlineText)(props => ({
  fontWeight: themeGet('fontWeights.bold')(props),
  userSelect: 'none',
  display: 'block',
  padding: `${themeGet('space.3')(props)}px 0px`
}));
