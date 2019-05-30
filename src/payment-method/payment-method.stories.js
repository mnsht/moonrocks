import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import PaymentMethod from '.';

import { Column } from '../grid';

const stories = storiesOf('3. Complex|Payment Method', module);

stories.addDecorator(withKnobs);

stories.add('as a card', () => {
  const type = select('Type', ['card', 'bank'], 'card', 'Main');
  const addedOn = text('Added on', 'June 7th, 2018', 'Main');
  const lastFour = text('Last 4 digits', '1234', 'Main');

  return (
    <Column width={[1, 1 / 2, 1 / 3]}>
      <PaymentMethod
        type={type}
        addedOn={addedOn}
        lastFour={lastFour}
        onRemove={() => console.log('Remove me')}
      />
    </Column>
  );
});
