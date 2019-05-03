import React, { createContext, useState } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed, { PoseGroup } from 'react-pose';

import theme from '../theme';
import Box from '../box';
import Flex from '../flex';

const NotificationsContext = React.createContext();

export const NotificationsConsumer = NotificationsContext.Consumer;

const getPosition = position => {
  const positions = {
    'top-left': {
      top: 0,
      left: 0
    },
    top: {
      top: 0,
      left: '50%',
      transform: 'translate(-50%)'
    },
    'top-right': {
      top: 0,
      right: 0
    },
    'bottom-right': {
      bottom: 0,
      right: 0
    },
    bottom: {
      bottom: 0,
      left: '50%',
      transform: 'translate(-50%)'
    },
    'bottom-left': {
      bottom: 0,
      left: 0
    }
  };

  return positions[position];
};

const getColors = type => {
  if (type === 'success') {
    return {
      backgroundColor: theme.colors.success100,
      color: theme.colors.success700
    };
  } else if (type === 'warning') {
    return {
      backgroundColor: theme.colors.warning100,
      color: theme.colors.warning700
    };
  } else if (type === 'error') {
    return {
      backgroundColor: theme.colors.error100,
      color: theme.colors.error700
    };
  } else if (type === 'info') {
    return {
      backgroundColor: theme.colors.primary100,
      color: theme.colors.primary700
    };
  }

  return { backgroundColor: theme.colors.snow, color: theme.colors.darkGray };
};

const Notifications = styled(Flex)(props => ({
  position: 'fixed',
  zIndex: themeGet('zIndicies.notifications')(props),
  ...getPosition(props.position),
  flexDirection: props.position.includes('bottom')
    ? 'column-reverse'
    : 'column',
  padding: themeGet('space.2')(props)
}));

Notifications.defaultProps = {
  ...Flex.defaultProps,
  width: ['100%', '300px']
};

const Notification = styled(Box)(props => ({
  ...getColors(props.type),
  borderRadius: themeGet('radii.normal')(props),
  width: '100%',
  userSelect: 'none',
  padding: themeGet('space.2')(props),
  margin: props.position.includes('bottom')
    ? `${themeGet('space.1')(props)}px 0 0 0`
    : `0 0 ${themeGet('space.1')(props)}px 0`
}));

const PosedNotification = posed(Notification)({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
  transition: {
    duration: parseInt(theme.animations.fast),
    ease: 'easeInOut'
  }
});

/*
TODO:
- Close?
- Sticky and timed notifications?
*/

export default ({ children, position = 'bottom-left', ...props }) => {
  const [notifications, changeNotifications] = useState([]);

  const addNotification = notification => {
    const newNotifications = [...notifications];

    newNotifications.push(notification);

    changeNotifications(newNotifications);
  };

  return (
    <NotificationsContext.Provider value={{ addNotification }}>
      <Notifications position={position} {...props}>
        <PoseGroup>
          {notifications.map(({ text, ...notification }, index) => (
            <PosedNotification
              key={index}
              position={position}
              {...notification}
            >
              {text}
            </PosedNotification>
          ))}
        </PoseGroup>
      </Notifications>
      {children}
    </NotificationsContext.Provider>
  );
};
