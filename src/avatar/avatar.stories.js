import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { sizeKnob } from '../../storybook-helpers';

import Avatar from './';

const stories = storiesOf('2. Simple|Avatar', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const src = text(
    'Image URL',
    'http://www.ghostofaflea.com/archives/RaptorJesus.jpg',
    'Main'
  );
  const size = sizeKnob('Size', 4, 'Main');

  return <Avatar size={size} src={src} m={2} />;
});
