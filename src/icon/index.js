import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Box from '../box';

const IconContainer = styled(Box)(props => ({
  position: 'relative',
  width: themeGet(`widths.${props.size}`)(props),
  height: themeGet(`heights.${props.size}`)(props),
  cursor: props.hoverColor && 'pointer',
  transition: `color ${themeGet('animations.fast')(props)} ease-in-out`,
  '&:hover': {
    color: props.hoverColor
      ? themeGet(`colors.${props.hoverColor}`, props.hoverColor)(props)
      : props.color
  }
}));

IconContainer.defaultProps = {
  size: 0,
  display: 'inline-block'
};

IconContainer.displayName = 'IconContainer';

export default React.forwardRef(
  ({ icon, size, color, hoverColor, ...props }, ref) => {
    const Icon = icon;
    const iconStyles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%'
    };

    // centering, responsive

    return (
      <IconContainer
        ref={ref}
        {...props}
        size={size}
        color={color}
        hoverColor={hoverColor}
      >
        <Icon style={iconStyles} />
      </IconContainer>
    );
  }
);
