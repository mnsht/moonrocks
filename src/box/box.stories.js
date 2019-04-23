import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Box from './';

const stories = storiesOf('Box', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text('Text', 'Sample Text', 'Main');

  return <Box>{content}</Box>;
});
