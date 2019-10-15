import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Image from './';

const stories = storiesOf('1. Foundation|Image', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const src = text(
    'Image URL',
    'http://www.ghostofaflea.com/archives/RaptorJesus.jpg'
  );
  const alt = text('Alternate text', 'Jesus Christ');

  return <Image src={src} alt={alt} />;
});
