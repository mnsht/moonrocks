import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed, { PoseGroup } from 'react-pose';
import { Times } from 'styled-icons/fa-solid';

import theme from '../theme';
import Flex from '../flex';
import Icon from '../icon';
import { InlineText } from '../typography';

// TODO: We cannot figure out how to remove notifications after a timeout

const NotificationsContext = React.createContext();

export const NotificationsConsumer = NotificationsContext.Consumer;

const uuid = () => {
  return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
    (
      c ^
      (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
    ).toString(16)
  );
};

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

const getIconColors = type => {
  if (type === 'success') {
    return {
      backgroundColor: theme.colors.success300,
      color: theme.colors.success700
    };
  } else if (type === 'warning') {
    return {
      backgroundColor: theme.colors.warning300,
      color: theme.colors.warning700
    };
  } else if (type === 'error') {
    return {
      backgroundColor: theme.colors.error300,
      color: theme.colors.error700
    };
  } else if (type === 'info') {
    return {
      backgroundColor: theme.colors.primary300,
      color: theme.colors.primary700
    };
  }

  return {
    backgroundColor: theme.colors.lightGray,
    color: theme.colors.darkGray
  };
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

const Notification = styled(Flex)(props => ({
  alignItems: 'center',
  justifyContent: 'space-between',
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

const NotificationText = styled(InlineText)({
  flex: 1
});

const RemoveIconElem = styled(Flex)(props => ({
  backgroundColor: getIconColors(props.type).backgroundColor,
  marginLeft: themeGet('space.2')(props),
  borderRadius: themeGet('radii.round')(props),
  width: themeGet('widths.1')(props),
  height: themeGet('heights.1')(props),
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center'
}));

const RemoveIcon = props => (
  <RemoveIconElem {...props}>
    <Icon icon={Times} size={0} color={getIconColors(props.type).color} />
  </RemoveIconElem>
);

export default ({
  children,
  position = 'bottom-left',
  duration = 3000,
  ...props
}) => {
  const [notifications, changeNotifications] = useState([]);

  const addNotification = notification => {
    const newNotifications = [...notifications];
    const id = uuid();

    notification.id = id;
    newNotifications.push(notification);

    changeNotifications(newNotifications);
  };

  const removeNotification = id => {
    console.log('removing', id);
    changeNotifications(notifications.filter(n => n.id !== id));
  };

  useEffect(() => {
    console.log('notifications', notifications);
    // if (notifications.length > 0) {
    //   const latest = notifications[notifications.length - 1];

    //   if (!latest.sticky) {
    //     setTimeout(() => removeNotification(latest.id), duration);
    //   }
    // }
  }, [notifications]);

  return (
    <NotificationsContext.Provider value={{ addNotification }}>
      <Notifications position={position} {...props}>
        <PoseGroup>
          {notifications.map(({ text, id, ...notification }) => (
            <PosedNotification key={id} position={position} {...notification}>
              <NotificationText>{text}</NotificationText>
              <RemoveIcon
                type={notification.type}
                onClick={() => removeNotification(id)}
              />
            </PosedNotification>
          ))}
        </PoseGroup>
      </Notifications>
      {children}
    </NotificationsContext.Provider>
  );
};
