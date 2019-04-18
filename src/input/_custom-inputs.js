import React, { useState } from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Select from "react-select";
import Cleave from "cleave.js/react";
import posed from "react-pose";
import { Check } from "styled-icons/fa-solid";

import { Input, determineInputRightPadding } from "./_base";

import theme from "../theme";
import Box from "../box";
import Flex from "../flex";
import Icon from "../icon";
import { InlineText } from "../typography";

const ChoiceLabel = styled(InlineText)(props => ({
  fontWeight: themeGet("fontWeights.bold")(props),
  userSelect: "none"
}));

ChoiceLabel.defaultProps = {
  as: "span",
  ml: 3
};

const ChoiceContainer = styled(Flex)({
  cursor: "pointer",
  alignItems: "center"
});

const choiceAnimation = {
  selected: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: parseInt(theme.animations.fast)
    }
  },
  unselected: {
    scale: 0.5,
    opacity: 0
  }
};

const CheckboxElem = styled(Box)(props => ({
  width: themeGet("widths.2")(props),
  height: themeGet("heights.2")(props),
  border: `1px solid ${themeGet("colors.snow")(props)}`,
  borderRadius: themeGet("radii.normal")(props)
}));

const PosedCheck = posed(Icon)(choiceAnimation);

export const Checkbox = props => {
  const [selected, setSelected] = useState(false);

  return (
    <ChoiceContainer onClick={() => setSelected(!selected)}>
      <CheckboxElem>
        <PosedCheck
          pose={selected ? "selected" : "unselected"}
          icon={Check}
          size={0}
          m={2}
          color="success"
        />
      </CheckboxElem>
      <ChoiceLabel>{props.label}</ChoiceLabel>
    </ChoiceContainer>
  );
};

const RadioElem = styled(Box)(props => ({
  width: themeGet("widths.1")(props),
  height: themeGet("heights.1")(props),
  border: `1px solid ${themeGet("colors.snow")(props)}`,
  borderRadius: themeGet("radii.round")(props)
}));

const RadioDot = styled(Box)(props => ({
  width: themeGet("widths.1")(props) * 0.5,
  height: themeGet("heights.1")(props) * 0.5,
  borderRadius: themeGet("radii.round")(props),
  margin: 5,
  backgroundColor: themeGet("colors.primary")(props)
}));

const PosedRadioDot = posed(RadioDot)(choiceAnimation);

export const Radios = props => {
  const [selected, setSelected] = useState(null);

  return (
    <ChoiceContainer onClick={() => setSelected(!selected)}>
      <RadioElem>
        <PosedRadioDot pose={selected ? "selected" : "unselected"} />
      </RadioElem>
      <ChoiceLabel ml={2}>{props.label}</ChoiceLabel>
    </ChoiceContainer>
  );
};

export const CustomPhone = props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numericOnly: true,
      blocks: [0, 3, 0, 3, 4],
      delimiters: ["(", ")", " ", "-"]
    }}
  />
);

export const CustomSSN = props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      blocks: [3, 2, 4],
      delimiter: "-",
      numericOnly: true
    }}
  />
);

export const CustomHiddenSSN = styled(InlineText)(props => ({
  fontWeight: themeGet("fontWeights.bold")(props),
  userSelect: "none",
  display: "block",
  padding: themeGet("space.3")(props)
}));

export const CustomCurrency = props => (
  <Input
    {...props}
    as={Cleave}
    options={{
      numeral: true,
      numeralThousandsGroupStyle: "thousand",
      prefix: "$"
    }}
  />
);

export const CustomDate = ({ hasYear, ...props }) => (
  <Input
    {...props}
    as={Cleave}
    options={{
      date: true,
      delimiter: "-",
      datePattern: hasYear ? ["m", "d", "Y"] : ["m", "d"]
    }}
  />
);

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    boxShadow: "none",
    borderRadius: state.selectProps.messages
      ? `${theme.radii.normal}px ${theme.radii.normal}px 0px 0px`
      : theme.radii.normal,
    borderColor: theme.colors.snow,
    borderWidth: state.selectProps.borderless ? "0px" : "1px",
    "&:hover": {
      borderColor: theme.colors.snow
    }
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    width: state.selectProps.borderless ? "0px" : "1px"
  }),
  valueContainer: (provided, state) => ({
    ...provided,
    padding:
      state.isMulti && state.hasValue ? theme.space[3] - 3 : theme.space[3],
    paddingRight: determineInputRightPadding(
      state.selectProps.required,
      state.selectProps.tooltip,
      theme.space[3]
    )
  }),
  singleValue: provided => ({
    ...provided,
    color: theme.colors.black
  }),
  input: provided => ({
    ...provided,
    margin: 0,
    paddingTop: 0,
    paddingBottom: 0
  })
};

const selectTheme = baseTheme => ({
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    primary: theme.colors.primary,
    primary75: theme.colors.primary,
    primary50: theme.colors.primary300,
    primary25: theme.colors.primary100,
    danger: theme.colors.error,
    dangerLight: theme.colors.error100
  }
});

// NOTE: This input does NOT use the _base.js Input
export const CustomSelect = props => (
  <Select
    {...props}
    isClearable={false}
    styles={selectStyles}
    theme={selectTheme}
  />
);

// NOTE: This input does NOT use the _base.js Input
export const CustomMultiSelect = props => (
  <Select
    {...props}
    isMulti
    isClearable={false}
    styles={selectStyles}
    theme={selectTheme}
  />
);
