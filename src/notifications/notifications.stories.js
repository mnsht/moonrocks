import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select } from '@storybook/addon-knobs';

import Notifications, {
  NotificationsContextProvider,
  NotificationsContextConsumer
} from './';

import Button from '../button';

const stories = storiesOf('Notifications', module);

const add = (addNotification, notifications, isSticky = false) => {
  const texts = [
    'This is a great notification',
    'Perhaps the greatest ever',
    'Notifications will never be the same',
    'God bless notifications',
    'No more crooked notifications'
  ];

  const types = ['success', 'warning', 'error', 'info'];

  const getRandom = items => items[Math.floor(Math.random() * items.length)];

  notifications.push({
    text: getRandom(texts),
    type: getRandom(types),
    sticky: isSticky
  });

  addNotification(notifications);
};

const remove = (removeNotification, notifications) => {
  notifications.shift();

  removeNotification(notifications);
};

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const position = select(
    'Position',
    ['top-left', 'top', 'top-right', 'bottom-right', 'bottom', 'bottom-left'],
    'bottom-left'
  );

  return (
    <NotificationsContextProvider>
      <NotificationsContextConsumer>
        {({ notifications, addNotification, removeNotification }) => (
          <React.Fragment>
            <Notifications notifications={notifications} position={position} />
            <Button onClick={() => add(addNotification, notifications)}>
              Add Notification
            </Button>
            <Button onClick={() => add(addNotification, notifications, true)}>
              Add Notification (sticky)
            </Button>
            <Button onClick={() => remove(removeNotification, notifications)}>
              Remove Notification
            </Button>
          </React.Fragment>
        )}
      </NotificationsContextConsumer>
    </NotificationsContextProvider>
  );
});
