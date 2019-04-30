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
  height: themeGet(`heights.${props.dimension}`)(props)
}));

Icon.defaultProps = {
  color: 'black'
};

Icon.displayName = 'Icon';

export default React.forwardRef(({ icon, size, color, ...props }, ref) => (
  <IconContainer {...props} dimension={size} ref={ref}>
    <Icon as={icon} color={color} dimension={size} />
  </IconContainer>
));
