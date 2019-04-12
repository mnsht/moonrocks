import React from "react";
import styled from "styled-components";
import Select from "react-select";
import Cleave from "cleave.js/react";

import { Input } from "./_base";

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

const styles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue"
  }),
  control: provided => ({
    ...provided,
    height: 200
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  }
};

export const InputSelect = props => <Select {...props} styles={styles} />;

export const InputMultiSelect = props => (
  <Select {...props} isMulti styles={styles} />
);
