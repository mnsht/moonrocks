import React from 'react';
import styled from 'styled-components';
import { themeGet, height } from 'styled-system';

import Flex from '../flex';
import Image from '../image';

/*
TODO:
- Add logo
- Mobile menu with hamburger
- Hide/show all menu items (Dialog component?)
- Optional user avatar
- Add left and right menus
- Variants (light, dark, and transparent) as a prop, nothing to do with scroll
*/

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

  return (
    <HeaderContainer
      {...props}
      height={['60px', null, '80px']}
      variant={variant}
      alignItems="center"
    >
      <Image src={logo} height={['90%', null, '80%']} />
    </HeaderContainer>
  );
};
