import React from 'react';
import Select from 'react-select';

import { determineInputRightPadding } from '../_base';
import { shouldShow as shouldShowMessages } from '../_messages';

import theme from '../../../theme';

const determineBorderRadius = props =>
  props.messages &&
  (shouldShowMessages(props.messages.warnings) ||
    shouldShowMessages(props.messages.errors));

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    marginBottom: theme.space[3],
    boxShadow: 'none',
    borderRadius: determineBorderRadius(state.selectProps)
      ? `${theme.radii.normal}px ${theme.radii.normal}px 0px 0px`
      : theme.radii.normal,
    borderColor: theme.colors.snow,
    borderWidth: state.selectProps.borderless ? '0px' : '1px',
    '&:hover': {
      borderColor: theme.colors.snow
    }
  }),
  indicatorSeparator: (provided, state) => ({
    ...provided,
    width: state.selectProps.borderless ? '0px' : '1px'
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

const selectProps = ({ value, initialValue, ...props }) => {
  const extra = {};

  // Formik Form will pass a value, using the input standalone might not
  if (value || initialValue) {
    const value = value || initialValue;

    if (Array.isArray(value)) {
      const mappedValues = [];

      value.forEach(iValue => {
        mappedValues.push(
          props.options.find(option => option.value === iValue)
        );
      });

      extra.defaultValue = mappedValues;
    } else {
      extra.defaultValue =
        props.options.find(option => option.value === value) || '';
    }
  }

  return {
    isClearable: false,
    styles: selectStyles,
    theme: selectTheme,
    ...extra,
    ...props
  };
};

// NOTE: This input does NOT use the _base.js Input, and therefore must be styled similarly from the styles and theme above
// https://react-select.com/styles
export const CustomSelect = props => <Select {...selectProps(props)} />;

// NOTE: This input does NOT use the _base.js Input, and therefore must be styled similarly from the styles and theme above
// https://react-select.com/styles
export const CustomMultiSelect = props => (
  <Select {...selectProps(props)} isMulti />
);
