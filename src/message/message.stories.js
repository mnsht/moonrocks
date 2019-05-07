import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { SpaceShuttle } from 'styled-icons/fa-solid';

import Message from './';

const stories = storiesOf('2. Simple|Message', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const type = select(
    'Type',
    ['info', 'primary', 'success', 'warning', 'error'],
    'primary',
    'Main'
  );
  const title = text('Title', 'Mission accomplished', 'Main');
  const content = text(
    'Content',
    'Congratulations on creating a plan for Sam!  While we’re wrapping up all the details in a nice, little bow, wouldn’t it be great if you started spreading the news?  Send invites to friends and family and get the contributions rolling in.',
    'Main'
  );

  return (
    <Message type={type} icon={SpaceShuttle} title={title} content={content} />
  );
});
