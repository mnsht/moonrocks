import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import TransactionCard from '.';

const stories = storiesOf('3. Complex|Transaction Card', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const type = select(
    'Type',
    ['contribution', 'deposit', 'external', 'withdrawal'],
    'contribution',
    'Main'
  );
  const name =
    type === 'contribution' ? text('Name', 'Kate Madrigal', 'Main') : null;
  const timeAgo = text('Time ago', '2 weeks ago', 'Main');
  const description =
    type === 'contribution'
      ? text('Description', 'A lovely gift to a beautiful baby baby!', 'Main')
      : null;
  const amount = text('Amount', '140', 'Main');

  return (
    <TransactionCard
      name={name}
      type={type}
      timeAgo={timeAgo}
      description={description}
      amount={amount}
    />
  );
});
