import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { FaSpaceShuttle } from 'react-icons/fa';

import Message from './';

import { Column } from '../grid';

const stories = storiesOf('2. Simple|Message', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const type = select(
    'Type',
    ['info', 'primary', 'success', 'warning', 'error'],
    'primary'
  );
  const title = text('Title', 'Mission accomplished');
  const content = text(
    'Content',
    'Congratulations on creating a plan for Sam!  While we’re wrapping up all the details in a nice, little bow, wouldn’t it be great if you started spreading the news?  Send invites to friends and family and get the contributions rolling in.'
  );

  return (
    <Column width={[1, 2 / 3, 1 / 2]}>
      <Message
        type={type}
        icon={FaSpaceShuttle}
        title={title}
        content={content}
      />
    </Column>
  );
});
