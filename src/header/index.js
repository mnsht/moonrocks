import React, { useState } from 'react';
import styled from 'styled-components';
import { themeGet, height, display } from 'styled-system';

import Hamburger from './_hamburger';

import Flex from '../flex';
import Image from '../image';
import { default as BaseAvatar } from '../avatar';

/*
TODO:
- Hide/show all menu items (Dialog component?)
- Add left and right menus
- Variants (light, dark, and transparent) as a prop, nothing to do with scroll
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

const getVariant = (where, { variant, ...props }) => {
  if (where === 'container') {
    if (variant === 'light') {
      return { backgroundColor: themeGet('colors.white')(props) };
    } else if (variant === 'dark') {
      return { backgroundColor: themeGet('colors.black')(props) };
    } else if (variant === 'transparent') {
      return { backgroundColor: 'transparent' };
    }
  }

  return null;
};

const HeaderContainer = styled(Flex)(
  props => ({
    ...getVariant('container', props)
  }),
  height
);

export default ({ logo, links, user, variant, ...props }) => {
  console.log(links, user, variant);

  const [isOpen, setIsOpen] = useState(false);
  const isLoggedIn =
    user && user.hasOwnProperty('name') && user.hasOwnProperty('avatar');

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
        <Image src={logo} height={['90%', null, '80%']} />
      </Flex>
      <Flex alignItems="center" style={{ height: '100%' }}>
        {isLoggedIn && (
          <Avatar src={user.avatar} alt={user.name} mr={[3, null, 0]} />
        )}
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      </Flex>
    </HeaderContainer>
  );
};
