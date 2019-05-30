import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import BackerCard from '.';

import { Column } from '../grid';

const stories = storiesOf('3. Complex|Backer Card', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const avatar = text(
    'Avatar',
    'http://www.ghostofaflea.com/archives/RaptorJesus.jpg',
    'Main'
  );
  const name = text('Title', 'Ben Wendel', 'Main');
  const timeAgo = text('Time ago', '2 days ago', 'Main');
  const description = text(
    'Description',
    'What a beautiful young boy, so excited for you Ben! Go get em in college, buddy.',
    'Main'
  );

  return (
    <Column width={[1, 2 / 3]}>
      <BackerCard
        avatar={avatar}
        name={name}
        timeAgo={timeAgo}
        description={description}
      />
    </Column>
  );
});
