import React from 'react';
import styled from 'styled-components';
import {
  borderRadius,
  backgroundImage,
  display,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
  themeGet
} from 'styled-system';

import AvatarPlaceholder from './avatar.svg';

import Box from '../box';

const Avatar = styled(Box)(
  props => ({
    display: 'inline-block',
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat'
  }),
  borderRadius,
  backgroundImage,
  display,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight
);

Avatar.defaultProps = {
  as: 'div',
  borderRadius: 'round'
};

Avatar.displayName = 'Avatar';

export default ({ src, size = 3, ...props }) => {
  if (!src || src === '') src = AvatarPlaceholder;

  return (
    <Avatar
      {...props}
      minWidth={size}
      minHeight={size}
      maxWidth={size}
      maxHeight={size}
      backgroundImage={`url(${src})`}
    />
  );
};
