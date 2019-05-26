import React, { useState } from 'react';
import styled from 'styled-components';
import { themeGet, height, display } from 'styled-system';

import Hamburger from './_hamburger';
import Links from './_links';

import Flex from '../flex';
import Image from '../image';
import { default as BaseAvatar } from '../avatar';
import Dialog from '../dialog';

/*
TODO:
- User hover menu
*/

// TODO: This is a placeholder for inevitably finding a better way to implement responsive widths in styled-system and thusly on Avatars
const ResponsiveAvatar = styled(BaseAvatar)(display);

const Avatar = props => {
  return (
    <React.Fragment>
      <ResponsiveAvatar {...props} size={2} display={['block', null, 'none']} />
      <ResponsiveAvatar {...props} size={3} display={['none', null, 'block']} />
    </React.Fragment>
  );
};

const getVariant = ({ variant, ...props }) => {
  if (variant === 'light') {
    return { backgroundColor: themeGet('colors.white')(props) };
  } else if (variant === 'dark') {
    return { backgroundColor: themeGet('colors.black')(props) };
  } else if (variant === 'transparent') {
    return { backgroundColor: 'transparent' };
  }

  return null;
};

const HeaderContainer = styled(Flex)(
  props => ({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    ...getVariant(props)
  }),
  height
);

const generateCombinedLinks = ({ left, right, user }) => {
  let links = [];

  if (left) links = [...links, ...left];
  if (user) links = [...links, ...user];
  if (right) links = [...links, ...right];

  return links;
};

const filterLinksBySecurity = (isLoggedIn, links) => {
  if (isLoggedIn) {
    return links.filter(
      link => link.authRequired || !link.hasOwnProperty('unauthRequired')
    );
  }

  return links.filter(
    link => link.unauthRequired || !link.hasOwnProperty('authRequired')
  );
};

export default ({ logo, links, user, variant = 'light', ...props }) => {
  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn = !!user;

  const allLinks = filterLinksBySecurity(
    isLoggedIn,
    generateCombinedLinks(links)
  );
  const leftLinks = filterLinksBySecurity(isLoggedIn, links.left);
  const userLinks = filterLinksBySecurity(isLoggedIn, links.user);
  const rightLinks = filterLinksBySecurity(isLoggedIn, links.right);

  return (
    <HeaderContainer
      {...props}
      height={['60px', null, '80px']}
      variant={variant}
      alignItems="center"
      justifyContent="space-between"
      px={3}
    >
      <Flex alignItems="center" style={{ height: '100%' }}>
        <Image src={logo} height="90%" />
        {leftLinks.length > 0 && (
          <Links variant={variant} links={leftLinks} breakpoint="above" />
        )}
      </Flex>
      <Flex alignItems="center" style={{ height: '100%' }}>
        {rightLinks.length > 0 && (
          <Links variant={variant} links={rightLinks} breakpoint="above" />
        )}
        {isLoggedIn && <Avatar src={user} mr={[3, null, 0]} />}
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Flex>
      <Dialog hasBackground isOpen={isOpen} close={() => setIsOpen(!isOpen)}>
        <Links variant={variant} links={allLinks} breakpoint="below" />
      </Dialog>
    </HeaderContainer>
  );
};
