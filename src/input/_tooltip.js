import React, { useState } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

export const TOOLTIP_SIZE = 24;

const withinInputStyles = props => ({
  position: "absolute",
  top: 15,
  right: themeGet("space.3")(props)
});

const TooltipContainer = styled("div")(props =>
  props.withinInput
    ? withinInputStyles(props)
    : {
        position: "relative"
      }
);

const TooltipIcon = styled("div")(props => ({
  width: `${TOOLTIP_SIZE}px`,
  height: `${TOOLTIP_SIZE}px`,
  textAlign: "center",
  lineHeight: `${TOOLTIP_SIZE}px`,
  borderRadius: themeGet("radii.round")(props),
  backgroundColor: themeGet("colors.mediumGray")(props),
  color: themeGet("colors.white")(props),
  fontSize: themeGet("fontSizes.2")(props),
  fontWeight: themeGet("fontWeights.extraBold")(props),
  userSelect: "none",
  cursor: "pointer",
  transition: `background ${themeGet("animations.fast")(props)} ease-in-out`,
  "&:hover": {
    backgroundColor: themeGet("colors.darkGray")(props)
  }
}));

const Tooltip = styled("span")({});

export default ({ tooltip, withinInput }) => {
  const [showing, setShowing] = useState(false);

  return (
    <TooltipContainer withinInput={withinInput}>
      <TooltipIcon onClick={() => setShowing(!showing)}>?</TooltipIcon>
      {showing && <Tooltip>{tooltip}</Tooltip>}
    </TooltipContainer>
  );
};
