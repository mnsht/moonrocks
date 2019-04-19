import React, { useState } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import posed from "react-pose";
import { Check } from "styled-icons/fa-solid";

import theme from "../../theme";
import Box from "../../box";
import Flex from "../../flex";
import Icon from "../../icon";
import { InlineText } from "../../typography";

const choiceAnimation = {
  selected: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: parseInt(theme.animations.fast)
    }
  },
  unselected: {
    scale: 0,
    opacity: 0
  }
};

const ChoiceLabel = styled(InlineText)(props => ({
  fontWeight: themeGet("fontWeights.bold")(props),
  marginLeft: themeGet("space.3")(props),
  userSelect: "none"
}));

const ChoiceContainer = styled(Flex)({
  cursor: "pointer",
  alignItems: "center"
});

ChoiceContainer.defaultProps = {
  mb: 2
};

const ChoiceElem = styled(Box)(props => ({
  width: themeGet("widths.1")(props),
  height: themeGet("heights.1")(props),
  border: `1px solid ${themeGet("colors.snow")(props)}`,
  borderRadius: props.isRadio
    ? themeGet("radii.round")(props)
    : themeGet("radii.normal")(props)
}));

const PosedCheck = posed(Icon)(choiceAnimation);

const RadioDot = styled(Box)(props => ({
  width: themeGet("widths.1")(props) * 0.5,
  height: themeGet("heights.1")(props) * 0.5,
  borderRadius: themeGet("radii.round")(props),
  margin: 5,
  backgroundColor: themeGet("colors.primary")(props)
}));

const PosedRadioDot = posed(RadioDot)(choiceAnimation);

export const CustomChoice = ({
  initialValue = false,
  isRadio,
  value,
  label,
  currentOption, // current values when part of a group
  groupOnChange, // onChange when part of a group
  onChange // local onChange
}) => {
  const [selected, setSelected] = useState(initialValue);

  if (
    isRadio &&
    currentOption !== null &&
    currentOption !== value &&
    selected !== false
  ) {
    setSelected(false);
  }

  const ChoiceSelection = isRadio ? (
    <PosedRadioDot pose={selected ? "selected" : "unselected"} />
  ) : (
    <PosedCheck
      pose={selected ? "selected" : "unselected"}
      icon={Check}
      size={0}
      m="2px"
      color="primary"
    />
  );

  return (
    <ChoiceContainer
      onClick={() => {
        if (!isRadio || (isRadio && selected !== true)) {
          const newSelectedValue = !selected;

          setSelected(newSelectedValue);

          if (!isRadio && onChange) {
            onChange(newSelectedValue);
          }

          if (groupOnChange && value) {
            groupOnChange({ [value]: newSelectedValue });
          }
        }
      }}
    >
      <ChoiceElem isRadio={isRadio}>{ChoiceSelection}</ChoiceElem>
      <ChoiceLabel>{label}</ChoiceLabel>
    </ChoiceContainer>
  );
};

export const CustomChoices = ({ isRadio, options, onChange }) => {
  const [currentOption, setCurrentOption] = useState(null);

  const groupOnChange = obj => {
    const key = Object.keys(obj)[0];
    const val = obj[key];

    if (isRadio) {
      if (val === true) {
        setCurrentOption(key);

        if (onChange) {
          onChange(key);
        }
      }
    } else {
      let optionsArray = Array.isArray(currentOption) ? currentOption : [];

      if (val === true) {
        optionsArray.push(key);
      } else {
        optionsArray = optionsArray.filter(i => i !== key);
      }

      setCurrentOption(optionsArray);

      if (onChange) {
        onChange(optionsArray);
      }
    }
  };

  return (
    <React.Fragment>
      {options.map((props, i) => (
        <CustomChoice
          key={i}
          {...props}
          isRadio={isRadio}
          currentOption={currentOption}
          groupOnChange={groupOnChange}
        />
      ))}
    </React.Fragment>
  );
};
