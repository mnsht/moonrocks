import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Note from './';

const stories = storiesOf('2. Simple|Note', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text(
    'Content',
    'Hey, remember to update the flux capacitor with lots of goodies.'
  );

  return <Note>{content}</Note>;
});
