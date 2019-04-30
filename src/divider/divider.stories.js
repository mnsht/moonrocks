import React from 'react';
import { storiesOf } from '@storybook/react';

import Divider from './';

import { Paragraph } from '../typography';

const stories = storiesOf('Divider', module);

stories.add('default', () => {
  return (
    <React.Fragment>
      <Paragraph>Hello world</Paragraph>
      <Divider my={3} mx={2} /> {/* Could also do backgroundColor */}
      <Paragraph>Hello world</Paragraph>
    </React.Fragment>
  );
});
