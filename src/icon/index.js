import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

import Box from "../box";

const Icon = styled(Box)(props => ({
  width: themeGet(`widths.${props.dimension}`)(props),
  height: themeGet(`heights.${props.dimension}`)(props)
}));

Icon.defaultProps = {
  dimension: 0,
  color: "black"
};

Icon.displayName = "Icon";

export default React.forwardRef(({ icon, size, ...props }, ref) => (
  <Icon {...props} as={icon} dimension={size} ref={ref} />
));
