import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed, { PoseGroup } from 'react-pose';

import Box from '../../box';
import { InlineText } from '../../typography';

// NOTE: If we want styles to sit below the input, rather than float on top, then simply flip this value... :)
const IS_FLOATING = true;

const floatingStyles = type => {
  return (
    IS_FLOATING && {
      position: 'absolute',
      top: '100%',
      left: 0,
      marginTop: type === 'paragraph' ? -5 : -1
    }
  );
};

const MessagesContainer = styled(Box)(props => ({
  ...floatingStyles(props.type),
  zIndex: themeGet('zIndicies.messages')(props),
  width: '100%',
  overflow: 'hidden',
  borderBottomLeftRadius: themeGet('radii.normal')(props),
  borderBottomRightRadius: themeGet('radii.normal')(props)
}));

MessagesContainer.displayName = 'MessagesContainer';

const Message = styled(Box)(props => ({
  background: themeGet(`colors.${props.type}100`)(props),
  color: themeGet(`colors.${props.type}700`)(props),
  fontSize: themeGet('fontSizes.1')(props)
}));

Message.defaultProps = {
  px: 3,
  py: 2
};

Message.displayName = 'Message';

const animationDelay = 100;

const PosedMessage = posed(Message)({
  enter: { y: 0, opacity: 1, delay: ({ i }) => i * animationDelay },
  exit: { y: -30, opacity: 0 }
});

export const shouldShow = messages => messages && messages.length > 0;

const preparedMessages = (
  { errors, warnings },
  MessageComponent = PosedMessage
) => {
  const allMessages = [];

  if (shouldShow(errors)) {
    errors.map((message, i) => {
      allMessages.push(
        <MessageComponent key={`error-${i}`} i={i} type="error">
          {message}
        </MessageComponent>
      );
    });
  }

  if (shouldShow(warnings)) {
    warnings.map((message, i) => {
      allMessages.push(
        <MessageComponent key={`warning-${i}`} i={i} type="warning">
          {message}
        </MessageComponent>
      );
    });
  }

  return allMessages;
};

export default ({ messages, type }) => (
  <MessagesContainer type={type}>
    <PoseGroup>{preparedMessages(messages)}</PoseGroup>
  </MessagesContainer>
);

const BareMessage = styled(InlineText)(props => ({
  display: 'block',
  marginTop: themeGet('space.2')(props),
  marginBottom: themeGet('space.2')(props),
  color: themeGet(`colors.${props.type}`)(props),
  fontSize: themeGet('fontSizes.1')(props)
}));

export const BareMessages = ({ messages }) => (
  <React.Fragment>{preparedMessages(messages, BareMessage)}</React.Fragment>
);
