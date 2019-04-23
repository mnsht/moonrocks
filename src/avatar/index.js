import React from 'react';
import styled from 'styled-components';
import { borderRadius, backgroundImage, themeGet } from 'styled-system';

import Box from '../box';

// TODO: Default placeholder isn't working on this version of webpack (maybe need 5.1.0 when it comes out?)

const Avatar = styled(Box)(
  props => ({
    display: 'inline-block',
    width: themeGet(`widths.${props.size}`)(props),
    height: themeGet(`heights.${props.size}`)(props),
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }),
  borderRadius,
  backgroundImage
);

Avatar.defaultProps = {
  as: 'div',
  size: 3,
  borderRadius: 'round'
};

Avatar.displayName = 'Avatar';

export default ({ src, ...props }) => (
  <Avatar {...props} backgroundImage={`url(${src})`} />
);
