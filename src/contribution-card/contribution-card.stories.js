import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import ContributionCard from '.';

const stories = storiesOf('3. Complex|Contribution Card', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const avatar = text(
    'Avatar',
    'http://www.ghostofaflea.com/archives/RaptorJesus.jpg',
    'Main'
  );
  const name = text('Title', 'Ben Wendel', 'Main');
  const timeAgo = text('Time ago', '2 days ago', 'Main');
  const amount = text('Amount', '1500', 'Main');
  const type = select(
    'Type',
    ['contribution', 'deposit'],
    'contribution',
    'Main'
  );
  const isRecurring = boolean('Is recurring?', false, 'Main');

  return (
    <ContributionCard
      avatar={avatar}
      name={name}
      timeAgo={timeAgo}
      amount={amount}
      type={type}
      interval={isRecurring ? 'month' : null}
      onCancelRecurring={isRecurring ? () => console.log('Cancel me') : null}
    />
  );
});
