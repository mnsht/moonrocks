import React from "react";
import styled from "styled-components";
import { themeGet, space, color } from "styled-system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Icon = styled(FontAwesomeIcon)(
  props => ({
    fontSize: themeGet(`widths.${props.dimension}`)(props),
    maxWidth: themeGet(`widths.${props.dimension}`)(props),
    height: themeGet(`heights.${props.dimension}`)(props)
  }),
  space,
  color
);

Icon.defaultProps = {
  dimension: 0
};

Icon.displayName = "Icon";

// NOTE: We have to change size to dimension internally because size is an expected prop for FontAwesomeIcon
export default ({ size, ...props }) => <Icon dimension={size} {...props} />;
