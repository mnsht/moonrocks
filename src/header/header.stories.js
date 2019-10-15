import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import Header from './';

const stories = storiesOf('2. Simple|Header', module);

stories.addDecorator(withKnobs);

const links = {
  left: [
    {
      title: 'Dashboard',
      to: '/dashboard',
      authRequired: true
    },
    {
      title: 'Contributions',
      to: '/contributions',
      authRequired: true
    },
    {
      title: 'Features',
      to: '/features',
      unauthRequired: true
    },
    {
      title: 'About',
      to: '/about',
      unauthRequired: true
    },
    {
      title: 'Blog',
      to: 'https://blog.scholarraise.com',
      unauthRequired: true
    },
    {
      title: 'FAQ',
      to: 'https://help.scholarraise.com'
    },
    {
      title: 'Contact',
      onClick: () => console.log('Open Intercom'),
      authRequired: true
    }
  ],
  right: [
    {
      title: 'Login',
      to: '/login',
      unauthRequired: true
    },
    {
      title: 'Sign Up',
      to: '/signup',
      unauthRequired: true,
      button: true
    }
  ],
  user: [
    {
      title: 'Profile',
      to: '/account/profile',
      authRequired: true
    },
    {
      title: 'Payment Methods',
      to: '/account/payment-methods',
      authRequired: true
    },
    {
      title: 'Communications',
      to: '/account/communications',
      authRequired: true
    },
    {
      title: 'Security',
      to: '/account/security',
      authRequired: true
    },
    {
      title: 'Logout',
      to: '/logout',
      authRequired: true
    }
  ]
};

const user = {
  // Whatever the user object is...
  avatar_url: 'https://picsum.photos/200'
};

stories.add('default', () => {
  const logo = text(
    'Logo',
    'https://scholarraise.com/static/media/logo.8ecccc62.svg'
  );
  const current = text('Current path', '/dashboard');
  const variant = select('Variant', ['light', 'dark', 'transparent'], 'light');
  const position = select(
    'Position',
    ['relative', 'absolute', 'fixed'],
    'fixed'
  );
  const isLoggedIn = boolean('Logged in?', true);

  return (
    <Header
      logo={logo}
      currentPath={current}
      links={links}
      user={isLoggedIn ? user.avatar_url : null}
      position={position}
      variant={variant}
    />
  );
});
