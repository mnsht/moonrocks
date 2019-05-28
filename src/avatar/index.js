import React from 'react';
import styled from 'styled-components';
import {
  borderRadius,
  backgroundImage,
  display,
  themeGet
} from 'styled-system';

import AvatarPlaceholder from './avatar.svg';

import Box from '../box';

const Avatar = styled(Box)(
  props => ({
    display: 'inline-block',
    width: themeGet(`widths.${props.size}`)(props),
    height: themeGet(`heights.${props.size}`)(props),
    minWidth: themeGet(`widths.${props.size}`)(props),
    minHeight: themeGet(`heights.${props.size}`)(props),
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

const DefaultAvatar = ({ src, ...props }) => {
  if (!src || src === '') src = AvatarPlaceholder;

  return <Avatar {...props} backgroundImage={`url(${src})`} />;
};

export default DefaultAvatar;

const DisplayAvatar = styled(DefaultAvatar)(display);

export const ResponsiveAvatar = ({ sizes, ...props }) => (
  <React.Fragment>
    {sizes.map(({ size, display }) => (
      <DisplayAvatar {...props} size={size} display={display} />
    ))}
  </React.Fragment>
);
