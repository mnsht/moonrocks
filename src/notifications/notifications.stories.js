import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, select, button } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';

import Notifications from './';

const stories = storiesOf('Notifications', module);

const store = new Store({
  notifications: []
});

const addNotification = (isSticky = false) => {
  const texts = [
    'This is a great notification',
    'Perhaps the greatest ever',
    'Notifications will never be the same',
    'God bless notifications',
    'No more crooked notifications'
  ];

  const types = ['success', 'warning', 'error', 'info'];

  const getRandom = items => items[Math.floor(Math.random() * items.length)];

  const notifications = store.get('notifications');

  notifications.push({
    text: getRandom(texts),
    type: getRandom(types),
    sticky: isSticky
  });

  store.set({ notifications });
};

const removeNotification = () => {
  const notifications = store.get('notifications');

  notifications.shift();

  store.set({ notifications });
};

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const position = select(
    'Position',
    ['top-left', 'top', 'top-right', 'bottom-right', 'bottom', 'bottom-left'],
    'bottom-left'
  );

  button('Add notification', addNotification);
  button('Add sticky notification', () => addNotification(true));
  button('Remove notification', removeNotification);

  return (
    <State store={store}>
      {({ notifications }) => [
        <Notifications
          key="my-Notifications"
          notifications={notifications}
          position={position}
        />
      ]}
    </State>
  );
});
