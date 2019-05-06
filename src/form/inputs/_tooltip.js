import React, { useState } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed, { PoseGroup } from 'react-pose';

import theme from '../../theme';
import Box from '../../box';

export const TOOLTIP_SIZE = theme.widths[1];
const TOOLTIP_SPACING = theme.space[2];

const determineRightPosition = props => {
  const { withinInput, type } = props;

  let additionalSpacing = 0;

  if (withinInput && (type === 'select' || type === 'multiselect')) {
    additionalSpacing += 38;
  }

  return themeGet('space.3')(props) + additionalSpacing;
};

const withinInputStyles = props => ({
  position: 'absolute',
  top: 15,
  right: determineRightPosition(props)
});

const TooltipContainer = styled(Box)(props =>
  props.withinInput
    ? withinInputStyles(props)
    : {
        position: 'relative'
      }
);

TooltipContainer.displayName = 'TooltipContainer';

const TooltipIcon = styled(Box)(props => ({
  width: `${TOOLTIP_SIZE}px`,
  height: `${TOOLTIP_SIZE}px`,
  textAlign: 'center',
  lineHeight: `${TOOLTIP_SIZE}px`,
  borderRadius: themeGet('radii.round')(props),
  backgroundColor: props.showing
    ? themeGet('colors.darkGray')(props)
    : themeGet('colors.mediumGray')(props),
  color: themeGet('colors.white')(props),
  fontSize: themeGet('fontSizes.1')(props),
  fontWeight: themeGet('fontWeights.extraBold')(props),
  userSelect: 'none',
  cursor: 'pointer',
  transition: `background ${themeGet('animations.fast')(props)} ease-in-out`,
  '&:hover': {
    backgroundColor: themeGet('colors.darkGray')(props)
  }
}));

TooltipIcon.displayName = 'TooltipIcon';

const getPosition = (position, spacer, justMargins) => {
  let returnedPositions;

  if (position === 'top') {
    returnedPositions = {
      top: '0%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-100%)',
      marginTop: -spacer
    };
  }

  if (position === 'top-right') {
    returnedPositions = {
      top: '0%',
      left: '100%',
      transform: 'translateY(-100%)',
      marginTop: -spacer,
      marginLeft: spacer,
      borderBottomLeftRadius: 0
    };
  }

  if (position === 'right') {
    returnedPositions = {
      top: '50%',
      left: '100%',
      transform: 'translateY(-50%)',
      marginLeft: spacer
    };
  }

  if (position === 'bottom-right') {
    returnedPositions = {
      top: '100%',
      left: '100%',
      transform: 'none',
      marginTop: spacer,
      marginLeft: spacer,
      borderTopLeftRadius: 0
    };
  }

  if (position === 'bottom') {
    returnedPositions = {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%)',
      marginTop: spacer
    };
  }

  if (position === 'bottom-left') {
    returnedPositions = {
      top: '100%',
      left: '0%',
      transform: 'translateX(-100%)',
      marginTop: spacer,
      marginLeft: -spacer,
      borderTopRightRadius: 0
    };
  }

  if (position === 'left') {
    returnedPositions = {
      top: '50%',
      left: '0%',
      transform: 'translateX(-100%) translateY(-50%)',
      marginLeft: -spacer
    };
  }

  if (position === 'top-left') {
    returnedPositions = {
      top: '0%',
      left: '0%',
      transform: 'translateX(-100%) translateY(-100%)',
      marginTop: -spacer,
      marginLeft: -spacer,
      borderBottomRightRadius: 0
    };
  }

  const marginKeys = ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'];

  const filterMargins = (myObj, flipped) =>
    Object.keys(myObj)
      .filter(key =>
        flipped ? !marginKeys.includes(key) : marginKeys.includes(key)
      )
      .reduce((obj, key) => {
        return {
          ...obj,
          [key]: myObj[key]
        };
      }, {});

  if (justMargins) {
    return filterMargins(returnedPositions);
  } else {
    return filterMargins(returnedPositions, true);
  }
};

const tooltipTransition = {
  transition: {
    duration: parseInt(theme.animations.fast),
    ease: 'easeInOut'
  }
};

const posedTooltip = position => ({
  enter: {
    opacity: 1,
    ...getPosition(position, TOOLTIP_SPACING, true),
    ...tooltipTransition
  },
  exit: {
    opacity: 0,
    ...tooltipTransition
  }
});

const Tooltip = styled(
  posed(Box)(poseProps => posedTooltip(poseProps.position))
)(props => ({
  position: 'absolute',
  backgroundColor: themeGet('colors.blacks.4')(props),
  color: themeGet('colors.white')(props),
  textAlign: 'center',
  borderRadius: themeGet('radii.normal')(props),
  padding: `${themeGet('space.2')(props)}px ${themeGet('space.3')(props)}px`,
  width: 240,
  boxShadow: themeGet('shadows.normal')(props),
  userSelect: 'none',
  zIndex: themeGet('zIndicies.tooltip')(props),
  ...getPosition(props.position, TOOLTIP_SPACING)
}));

Tooltip.defaultProps = {
  position: 'top'
};

Tooltip.displayName = 'Tooltip';

export default ({ tooltip, position, withinInput, type }) => {
  const [showing, setShowing] = useState(false);

  if (withinInput) {
    position = 'top-left';
  }

  return (
    <TooltipContainer withinInput={withinInput} type={type}>
      <TooltipIcon onClick={() => setShowing(!showing)} showing={showing}>
        ?
      </TooltipIcon>
      <PoseGroup>
        {showing && (
          <Tooltip key="tooltip" position={position}>
            {tooltip}
          </Tooltip>
        )}
      </PoseGroup>
    </TooltipContainer>
  );
};
