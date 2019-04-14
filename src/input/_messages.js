import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import posed, { PoseGroup } from "react-pose";

import Box from "../box";

/*
- Get PoseGroup to work
*/

const MessagesContainer = styled(Box)(props => ({
  position: "absolute",
  top: "100%",
  left: 0,
  marginTop: -1,
  width: "100%",
  overflow: "hidden",
  borderBottomLeftRadius: themeGet("radii.normal")(props),
  borderBottomRightRadius: themeGet("radii.normal")(props)
}));

MessagesContainer.displayName = "MessagesContainer";

const Message = styled(Box)(props => ({
  background: themeGet(`colors.${props.type}100`)(props),
  color: themeGet(`colors.${props.type}700`)(props),
  fontSize: themeGet("fontSizes.1")(props)
}));

Message.defaultProps = {
  px: 3,
  py: 2
};

Message.displayName = "Message";

const PosedMessage = posed(Message)({
  enter: { y: 0, opacity: 1 },
  exit: { y: -20, opacity: 0 }
});

export const shouldShow = messages => messages && messages.length > 0;

const preparedMessages = ({ errors, warnings }) => {
  const allMessages = [];

  if (shouldShow(errors)) {
    errors.map((message, index) => {
      allMessages.push(
        <PosedMessage key={`error-${index}`} type="error">
          {message}
        </PosedMessage>
      );
    });
  }

  if (shouldShow(warnings)) {
    warnings.map((message, index) => {
      allMessages.push(
        <PosedMessage key={`warning-${index}`} type="warning">
          {message}
        </PosedMessage>
      );
    });
  }

  return allMessages;
};

export default ({ messages }) => (
  <MessagesContainer>
    <PoseGroup>{preparedMessages(messages)}</PoseGroup>
  </MessagesContainer>
);
