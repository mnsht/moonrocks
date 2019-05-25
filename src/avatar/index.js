import React from 'react';
import styled from 'styled-components';
import { borderRadius, backgroundImage, themeGet } from 'styled-system';

import DefaultAvatar from './avatar.svg';

import Box from '../box';

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

export default ({ src, ...props }) => {
  if (!src || src === '') src = DefaultAvatar;

  return <Avatar {...props} backgroundImage={`url(${src})`} />;
};
