import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Box from './';

const stories = storiesOf('1. Foundation|Box', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text('Text', 'Sample Text');

  return <Box>{content}</Box>;
});
