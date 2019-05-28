import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Box from '../box';

const IconContainer = styled(Box)(props => ({
  width: themeGet(`widths.${props.dimension}`)(props),
  height: themeGet(`heights.${props.dimension}`)(props)
}));

IconContainer.defaultProps = {
  dimension: 0
};

IconContainer.displayName = 'IconContainer';

const Icon = styled(Box)(props => ({
  width: themeGet(`widths.${props.dimension}`)(props),
  height: themeGet(`heights.${props.dimension}`)(props),
  cursor: props.hoverColor && 'pointer',
  transition: `color ${themeGet('animations.fast')(props)} ease-in-out`,
  '&:hover': {
    color: props.hoverColor
      ? themeGet(`colors.${props.hoverColor}`, props.hoverColor)(props)
      : props.color
  }
}));

Icon.defaultProps = {
  color: 'black'
};

Icon.displayName = 'Icon';

export default React.forwardRef(
  ({ icon, size, color, hoverColor, ...props }, ref) => (
    <IconContainer {...props} dimension={size} ref={ref}>
      <Icon as={icon} color={color} hoverColor={hoverColor} dimension={size} />
    </IconContainer>
  )
);
