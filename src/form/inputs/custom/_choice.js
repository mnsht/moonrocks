import React, { useState } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import posed from 'react-pose';
import { Check } from 'styled-icons/fa-solid';

import Required from '../_required';
import Tooltip from '../_tooltip';
import theme from '../../../theme';
import Box from '../../../box';
import Flex from '../../../flex';
import Icon from '../../../icon';
import { InlineText } from '../../../typography';

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

const ChoiceContainer = styled(Flex)({
  cursor: 'pointer',
  alignItems: 'center'
});

ChoiceContainer.defaultProps = {
  mb: 2
};

const ChoiceElem = styled(Box)(props => ({
  width: themeGet('widths.1')(props),
  height: themeGet('heights.1')(props),
  border: `1px solid ${themeGet('colors.snow')(props)}`,
  borderRadius: props.isRadio
    ? themeGet('radii.round')(props)
    : themeGet('radii.normal')(props)
}));

const PosedCheck = posed(Icon)(choiceAnimation);

const RadioDot = styled(Box)(props => ({
  width: themeGet('widths.1')(props) * 0.5,
  height: themeGet('heights.1')(props) * 0.5,
  borderRadius: themeGet('radii.round')(props),
  margin: 5,
  backgroundColor: themeGet('colors.primary')(props)
}));

const PosedRadioDot = posed(RadioDot)(choiceAnimation);

const ChoiceLabel = ({ mb, ml, partOfGroup, handleClick, ...props }) => {
  const labelIsString = typeof props.label === 'string';
  const labelProps = { onClick: handleClick };

  if (!partOfGroup) {
    labelProps.pr = 3;
  }

  return (
    <Flex alignItems="center" mb={mb} ml={ml}>
      {labelIsString && <InlineText {...labelProps}>{props.label}</InlineText>}
      {!labelIsString && React.cloneElement(props.label, labelProps)}
      {props.required && <Required {...props} />}
      {props.tooltip && <Tooltip {...props} position="top-left" />}
    </Flex>
  );
};

export const CustomChoice = ({
  initialValue = false,
  isRadio,
  value,
  currentOption, // current values when part of a group
  groupOnChange, // onChange when part of a group
  onChange, // local onChange
  ...props
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
    <PosedRadioDot pose={selected ? 'selected' : 'unselected'} />
  ) : (
    <PosedCheck
      pose={selected ? 'selected' : 'unselected'}
      icon={Check}
      size={0}
      m="2px"
      color="primary"
    />
  );

  const handleOnClick = () => {
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
  };

  return (
    <ChoiceContainer>
      <ChoiceElem isRadio={isRadio} onClick={handleOnClick}>
        {ChoiceSelection}
      </ChoiceElem>
      <ChoiceLabel
        ml={3}
        partOfGroup={!!groupOnChange}
        handleClick={handleOnClick}
        {...props}
      />
    </ChoiceContainer>
  );
};

export const CustomChoices = ({ isRadio, options, onChange, ...props }) => {
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
      <ChoiceLabel mb={3} {...props} />
      {options.map((choiceProps, i) => (
        <CustomChoice
          key={i}
          {...choiceProps}
          isRadio={isRadio}
          currentOption={currentOption}
          groupOnChange={groupOnChange}
        />
      ))}
    </React.Fragment>
  );
};
