import React from 'react';
import styled from 'styled-components';
import { borderRadius, backgroundImage, themeGet } from 'styled-system';

import Box from '../box';

const Header = styled(Box)(
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

Header.defaultProps = {
  as: 'div',
  size: 3,
  borderRadius: 'round'
};

Header.displayName = 'Header';

export default ({ src, ...props }) => {
  return <Header {...props} backgroundImage={`url(${src})`} />;
};
