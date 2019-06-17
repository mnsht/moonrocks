import React from 'react';
import styled from 'styled-components';
import {
  themeGet,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
} from 'styled-system';

import Box from '../box';

const IconContainer = styled(Box)(
  props => ({
    position: 'relative',
    cursor: props.hoverColor && 'pointer',
    transition: `color ${themeGet('animations.fast')(props)} ease-in-out`,
    '&:hover': {
      color: props.hoverColor
        ? themeGet(`colors.${props.hoverColor}`, props.hoverColor)(props)
        : props.color
    }
  }),
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
);

IconContainer.displayName = 'IconContainer';

export default React.forwardRef(
  ({ icon, size = 0, color, hoverColor, ...props }, ref) => {
    const Icon = icon;
    const iconStyles = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      height: '100%'
    };

    return (
      <IconContainer
        ref={ref}
        {...props}
        color={color}
        hoverColor={hoverColor}
        minWidth={size}
        minHeight={size}
        maxWidth={size}
        maxHeight={size}
      >
        <Icon style={iconStyles} />
      </IconContainer>
    );
  }
);
