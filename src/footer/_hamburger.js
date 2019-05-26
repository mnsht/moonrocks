import React from 'react';
import styled from 'styled-components';
import { themeGet, display } from 'styled-system';

import Box from '../box';

const PATTY_UNIT = 4;

const HamburgerContainer = styled(Box)(
  {
    position: 'relative',
    cursor: 'pointer',
    width: PATTY_UNIT * 6,
    height: PATTY_UNIT * 5
  },
  display
);

const getPattyDimensions = ({ index, isOpen }) => {
  const dimensions = {};

  let top, left, width;

  if (index === 0) top = !isOpen ? 0 : 10;
  if (index === 1 || index === 2) top = PATTY_UNIT * 2;
  if (index === 3) top = !isOpen ? PATTY_UNIT * 4 : 10;

  if ((index === 0 || index === 3) && isOpen) left = '50%';
  else left = 0;

  if ((index === 0 || index === 3) && isOpen) width = 0;
  else width = '100%';

  if (index === 1 && isOpen) dimensions.transform = 'rotate(45deg)';
  if (index === 2 && isOpen) dimensions.transform = 'rotate(-45deg)';

  dimensions.top = top;
  dimensions.left = left;
  dimensions.width = width;

  return dimensions;
};

const HamburgerPatty = styled(Box)(props => ({
  position: 'absolute',
  ...getPattyDimensions(props),
  height: PATTY_UNIT,
  display: 'block',
  background: themeGet('colors.lightGray')(props),
  borderRadius: themeGet('radii.round')(props),
  transition: `all ${themeGet('animations.fast')(props)} ease-in-out`
}));

HamburgerPatty.defaultProps = {
  ...Box.defaultProps,
  as: 'span'
};

HamburgerPatty.displayName = 'HamburgerPatty';

export default ({ isOpen, onClick }) => {
  return (
    <HamburgerContainer onClick={onClick} display={['block', null, 'none']}>
      {[...Array(4)].map((empty, index) => (
        <HamburgerPatty key={index} isOpen={isOpen} index={index} />
      ))}
    </HamburgerContainer>
  );
};
