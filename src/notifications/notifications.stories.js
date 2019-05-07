import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Notifications, { NotificationsConsumer } from './';

import Flex from '../flex';
import Button from '../button';

const stories = storiesOf('2. Simple|Notifications', module);

const texts = [
  'This is a great notification',
  'Perhaps the greatest ever',
  'Notifications will never be the same',
  'God bless notifications',
  'No more crooked notifications'
];

const types = ['success', 'warning', 'error', 'info'];

const getRandom = items => items[Math.floor(Math.random() * items.length)];

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const position = select(
    'Position',
    ['top-left', 'top', 'top-right', 'bottom-right', 'bottom', 'bottom-left'],
    'bottom-left'
  );

  return (
    <Notifications position={position}>
      <NotificationsConsumer>
        {({ addNotification }) => (
          <Flex
            alignItems={
              position === 'top' || position === 'bottom'
                ? 'flex-start'
                : 'center'
            }
            flexDirection="column"
          >
            <Button
              onClick={() =>
                addNotification({
                  text: getRandom(texts),
                  type: getRandom(types)
                })
              }
            >
              Add Notification
            </Button>
            <Button
              onClick={() =>
                addNotification({
                  text: getRandom(texts),
                  type: getRandom(types),
                  sticky: true
                })
              }
            >
              Add Notification (sticky)
            </Button>
          </Flex>
        )}
      </NotificationsConsumer>
    </Notifications>
  );
});
