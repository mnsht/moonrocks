import React, { useState } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import posed from "react-pose";

import theme from "../theme";
import Box from "../box";

export const TOOLTIP_SIZE = 24;
const TOOLTIP_SPACING = "space.2";

const determineRightPosition = props => {
  const { withinInput, inputType } = props;

  let additionalSpacing = 0;

  if (withinInput && (inputType === "select" || inputType === "multiselect")) {
    additionalSpacing += 38;
  }

  return themeGet("space.3")(props) + additionalSpacing;
};

const withinInputStyles = props => ({
  position: "absolute",
  top: 15,
  right: determineRightPosition(props)
});

const TooltipContainer = styled(Box)(props =>
  props.withinInput
    ? withinInputStyles(props)
    : {
        position: "relative"
      }
);

TooltipContainer.displayName = "TooltipContainer";

const TooltipIcon = styled(Box)(props => ({
  width: `${TOOLTIP_SIZE}px`,
  height: `${TOOLTIP_SIZE}px`,
  textAlign: "center",
  lineHeight: `${TOOLTIP_SIZE}px`,
  borderRadius: themeGet("radii.round")(props),
  backgroundColor: props.showing
    ? themeGet("colors.darkGray")(props)
    : themeGet("colors.mediumGray")(props),
  color: themeGet("colors.white")(props),
  fontSize: themeGet("fontSizes.1")(props),
  fontWeight: themeGet("fontWeights.extraBold")(props),
  userSelect: "none",
  cursor: "pointer",
  transition: `background ${themeGet("animations.fast")(props)} ease-in-out`,
  "&:hover": {
    backgroundColor: themeGet("colors.darkGray")(props)
  }
}));

TooltipIcon.displayName = "TooltipIcon";

const getPosition = (position, spacer) => {
  if (position === "top") {
    return {
      top: "0%",
      left: "50%",
      transform: "translateX(-50%) translateY(-100%)",
      marginTop: -spacer
    };
  }

  if (position === "top-right") {
    return {
      top: "0%",
      left: "100%",
      transform: "translateY(-100%)",
      marginTop: -spacer,
      marginLeft: spacer,
      borderBottomLeftRadius: 0
    };
  }

  if (position === "right") {
    return {
      top: "50%",
      left: "100%",
      transform: "translateY(-50%)",
      marginLeft: spacer
    };
  }

  if (position === "bottom-right") {
    return {
      top: "100%",
      left: "100%",
      transform: "none",
      marginTop: spacer,
      marginLeft: spacer,
      borderTopLeftRadius: 0
    };
  }

  if (position === "bottom") {
    return {
      top: "100%",
      left: "50%",
      transform: "translateX(-50%)",
      marginTop: spacer
    };
  }

  if (position === "bottom-left") {
    return {
      top: "100%",
      left: "0%",
      transform: "translateX(-100%)",
      marginTop: spacer,
      marginLeft: -spacer,
      borderTopRightRadius: 0
    };
  }

  if (position === "left") {
    return {
      top: "50%",
      left: "0%",
      transform: "translateX(-100%) translateY(-50%)",
      marginLeft: -spacer
    };
  }

  if (position === "top-left") {
    return {
      top: "0%",
      left: "0%",
      transform: "translateX(-100%) translateY(-100%)",
      marginTop: -spacer,
      marginLeft: -spacer,
      borderBottomRightRadius: 0
    };
  }
};

const posedTooltip = {
  showing: {
    opacity: 1,
    transition: {
      duration: parseInt(theme.animations.fast),
      ease: "easeInOut"
    }
  },
  hidden: {
    opacity: 0,
    transition: {
      duration: parseInt(theme.animations.fast),
      ease: "easeInOut"
    }
  }
};

const Tooltip = styled(posed(Box)(posedTooltip))(props => ({
  position: "absolute",
  backgroundColor: themeGet("colors.blacks.4")(props),
  color: themeGet("colors.white")(props),
  textAlign: "center",
  borderRadius: themeGet("radii.normal")(props),
  paddingTop: themeGet("space.2")(props),
  paddingBottom: themeGet("space.2")(props),
  paddingLeft: themeGet("space.3")(props),
  paddingRight: themeGet("space.3")(props),
  width: 240,
  boxShadow: themeGet("shadows.normal")(props),
  userSelect: "none",
  zIndex: themeGet("zIndicies.tooltip")(props),
  ...getPosition(props.position, themeGet(TOOLTIP_SPACING)(props))
}));

Tooltip.defaultProps = {
  position: "top"
};

Tooltip.displayName = "Tooltip";

export default ({ tooltip, position, withinInput, inputType }) => {
  const [showing, setShowing] = useState(false);

  if (withinInput) {
    position = "top-left";
  }

  return (
    <TooltipContainer withinInput={withinInput} inputType={inputType}>
      <TooltipIcon onClick={() => setShowing(!showing)} showing={showing}>
        ?
      </TooltipIcon>
      <Tooltip position={position} pose={showing ? "showing" : "hidden"}>
        {tooltip}
      </Tooltip>
    </TooltipContainer>
  );
};
