import React, { useState } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";

import Box from "../../box";
import Flex from "../../flex";
import { InlineText } from "../../typography";

const SWITCH_PADDING = 3;

const SwitchTrack = styled(Box)(props => ({
  position: "relative",
  width: themeGet("widths.1")(props) * 2 + SWITCH_PADDING * 4,
  height: themeGet("heights.1")(props) + SWITCH_PADDING * 2,
  background: props.selected
    ? themeGet("colors.primary")(props)
    : themeGet("colors.snow")(props),
  borderRadius: themeGet("radii.round")(props),
  cursor: "pointer",
  transition: `background ${themeGet("animations.fast")(props)} ease-in-out`
}));

const SwitchBall = styled(Box)(props => ({
  position: "absolute",
  top: 0,
  left: props.selected ? "50%" : "0%",
  margin: SWITCH_PADDING,
  width: themeGet("widths.1")(props),
  height: themeGet("heights.1")(props),
  background: props.selected
    ? themeGet("colors.white")(props)
    : themeGet("colors.darkGray")(props),
  borderRadius: themeGet("radii.round")(props),
  transition: `left ${themeGet("animations.fast")(
    props
  )} ease-in-out, background ${themeGet("animations.fast")(props)} ease-in-out`
}));

export default ({ initialValue = false, on, off, onChange }) => {
  const [selected, setSelected] = useState(initialValue);

  return (
    <Flex alignItems="center">
      {off && (
        <InlineText fontWeight="bold" mr={2}>
          {off}
        </InlineText>
      )}
      <SwitchTrack
        selected={selected}
        onClick={() => {
          const newSelectedValue = !selected;

          setSelected(newSelectedValue);

          if (onChange) {
            onChange(newSelectedValue);
          }
        }}
      >
        <SwitchBall selected={selected} />
      </SwitchTrack>
      {on && (
        <InlineText fontWeight="bold" ml={2}>
          {on}
        </InlineText>
      )}
    </Flex>
  );
};
