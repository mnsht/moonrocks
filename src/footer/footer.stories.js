import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';

import Footer from './';

const stories = storiesOf('2. Simple|Footer', module);

stories.addDecorator(withKnobs);

const links = [
  {
    title: 'Pages',
    links: [
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
        title: 'Logout',
        to: '/logout',
        authRequired: true
      },
      {
        title: 'Home',
        to: '/',
        unauthRequired: true
      },
      {
        title: 'Login',
        to: '/login',
        unauthRequired: true
      },
      {
        title: 'Sign Up',
        to: '/signup',
        unauthRequired: true
      }
    ]
  },
  {
    title: 'Support',
    links: [
      {
        title: 'Blog',
        to: 'https://blog.scholarraise.com'
      },
      {
        title: 'FAQ',
        to: 'https://help.scholarraise.com'
      },
      {
        title: 'Contact',
        onClick: () => console.log('Open Intercom')
      }
    ]
  },
  {
    title: 'Social',
    links: [
      {
        title: 'Facebook',
        to: 'https://facebook.com/scholarraise'
      },
      {
        title: 'Twitter',
        to: 'https://twitter.com/scholarraise'
      },
      {
        title: 'Instagram',
        to: 'https://instagram.com/scholarraise'
      }
    ]
  },
  {
    title: 'Legal',
    links: [
      {
        title: 'Privacy Policy',
        to: '/privacy'
      },
      {
        title: 'Terms of Service',
        to: '/terms'
      }
    ]
  }
];

const user = {
  // Whatever the user object is...
  avatar_url: 'https://picsum.photos/200'
};

const address = ['150 4th Avenue North', '20th Floor', 'Nashville, TN 37219'];
const madeIn = `Made with ❤️in Nashville and NYC`;
const copyright = `© ${new Date().getFullYear()} Scholar Raise, Inc.`;

stories.add('default', () => {
  const logo = text(
    'Logo',
    'https://scholarraise.com/static/media/logo.8ecccc62.svg'
  );
  const variant = select('Variant', ['light', 'dark', 'transparent'], 'dark');
  const isLoggedIn = boolean('Logged in?', true);

  return (
    <Footer
      logo={logo}
      links={links}
      user={isLoggedIn ? user.avatar_url : null}
      address={address}
      madeIn={madeIn}
      copyright={copyright}
      variant={variant}
    />
  );
});
