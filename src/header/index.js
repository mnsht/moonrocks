import React, { useState } from 'react';
import styled from 'styled-components';
import { themeGet, height, display, top } from 'styled-system';
import posed, { PoseGroup } from 'react-pose';

import Hamburger from './_hamburger';
import Links from './_links';

import { filterLinksBySecurity } from '../_helpers';
import Flex from '../flex';
import Box from '../box';
import Image from '../image';
import { ResponsiveAvatar } from '../avatar';
import Dialog from '../dialog';

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
    position: props.position,
    top: 0,
    left: 0,
    width: '100%',
    zIndex: themeGet('zIndicies.header')(props),
    ...getVariant(props)
  }),
  height
);

const UserLinksBox = posed(
  styled(Box)(
    props => ({
      position: 'absolute',
      padding: themeGet('space.2')(props),
      paddingLeft: themeGet('space.3')(props),
      ...getVariant(props)
    }),
    top,
    display
  )
)({
  enter: { opacity: 1, right: 0 },
  exit: { opacity: 0, right: -100 }
});

export default ({
  logo,
  currentPath = '/',
  links,
  user,
  variant = 'light',
  position = 'fixed',
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [avatarHovered, setAvatarHovered] = useState(false);
  const isLoggedIn = !!user;

  const headerHeight = [60, null, 80];
  const avatarMouseEvents = {
    onMouseEnter: () => setAvatarHovered(true),
    onMouseLeave: () => setAvatarHovered(false)
  };

  const allLinks = filterLinksBySecurity(isLoggedIn, [
    ...links.left,
    ...links.user,
    ...links.right
  ]);
  const leftLinks = filterLinksBySecurity(isLoggedIn, links.left);
  const userLinks = filterLinksBySecurity(isLoggedIn, links.user);
  const rightLinks = filterLinksBySecurity(isLoggedIn, links.right);

  const avatarSizes = [
    { size: 2, display: ['block', null, 'none'] },
    { size: 3, display: ['none', null, 'block'] }
  ];

  return (
    <HeaderContainer
      {...props}
      height={headerHeight}
      position={position}
      variant={variant}
      alignItems="center"
      justifyContent="space-between"
      px={3}
    >
      <Flex alignItems="center" style={{ height: '100%' }}>
        <Image src={logo} height={['70%', null, '60%']} mr={[0, null, 3]} />
        {leftLinks.length > 0 && (
          <Links current={currentPath} variant={variant} links={leftLinks} />
        )}
      </Flex>
      <Flex alignItems="center" style={{ height: '100%' }}>
        {rightLinks.length > 0 && (
          <Links current={currentPath} variant={variant} links={rightLinks} />
        )}
        {isLoggedIn && (
          <Flex
            {...avatarMouseEvents}
            mr={[3, null, 0]}
            alignItems="center"
            style={{ height: '100%', cursor: 'pointer' }}
          >
            <ResponsiveAvatar src={user} sizes={avatarSizes} />
          </Flex>
        )}
        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
        <PoseGroup>
          {avatarHovered && (
            <UserLinksBox
              key="user-links-box"
              variant={variant === 'transparent' ? 'light' : variant}
              top={headerHeight}
              display={['none', null, 'block']}
              {...avatarMouseEvents}
            >
              <Links
                current={currentPath}
                variant={variant}
                links={userLinks}
                isUserMenu
              />
            </UserLinksBox>
          )}
        </PoseGroup>
      </Flex>
      <Dialog hasBackground isOpen={isOpen} close={() => setIsOpen(!isOpen)}>
        <Links
          current={currentPath}
          variant="light"
          links={allLinks}
          isMobile
        />
      </Dialog>
    </HeaderContainer>
  );
};
