import React from "react";
import styled from "styled-components";
import { themeGet } from "styled-system";
import Select from "react-select";
import Cleave from "cleave.js/react";

import { Input, determineInputRightPadding } from "./_base";

import theme from "../theme";
import { InlineText } from "../typography";

export const InputPhone = props => (
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

export const InputSSN = props => (
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

export const InputHiddenSSN = styled(InlineText)(props => ({
  fontWeight: themeGet("fontWeights.bold")(props),
  userSelect: "none"
}));

export const InputCurrency = props => (
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

export const InputDate = ({ hasYear, ...props }) => (
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

export const InputSelect = props => (
  <Select
    {...props}
    isClearable={false}
    styles={selectStyles}
    theme={selectTheme}
  />
);

export const InputMultiSelect = props => (
  <Select
    {...props}
    isMulti
    isClearable={false}
    styles={selectStyles}
    theme={selectTheme}
  />
);
