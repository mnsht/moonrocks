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
  dimension: 0,
  color: "black"
};

Icon.displayName = "Icon";

// NOTE: We have to change size to dimension internally because size is an expected prop for FontAwesomeIcon
export default ({ size, ...props }) => <Icon dimension={size} {...props} />;

// NOTE: Export the library so we can add icons to it from the app
export { library as iconLibrary } from "@fortawesome/fontawesome-svg-core";
