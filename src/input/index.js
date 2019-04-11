import React from "react";
import styled from "styled-components";
import Box from "../box";
import Flex from "../flex";

const BaseInput = styled(Box)({});

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
