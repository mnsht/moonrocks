import React from "react";
import { Box } from "rebass";

export default ({ children, ...props }) => {
  return <Box {...props}>{children}</Box>;
};
