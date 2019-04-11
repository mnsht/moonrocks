import React from "react";
import styled from "styled-components";
import Flex from "../flex";

const BaseInput = styled.input({
  WebkitFontSmoothing: "antialiased",
  outline: "none"
});

BaseInput.defaultProps = {
  as: "input",
  fontFamily: "main",
  fontSize: 2,
  lineHeight: "normal"
};

BaseInput.displayName = "BaseInput";

export const TextInput = props => (
  <Flex>
    <BaseInput {...props} type="text" />
  </Flex>
);
