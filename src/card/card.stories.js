import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Card from './';

const stories = storiesOf('1. Foundation|Card', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text('Text', 'What a beautiful card!');

  return (
    <Card p={3} m={3}>
      {content}
    </Card>
  );
});
