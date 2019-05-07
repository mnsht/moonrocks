import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Flex from '../../flex';
import Box from '../../box';
import { Heading, Paragraph } from '../../typography';

const Step = styled(Box)(props => ({
  backgroundColor: props.selected
    ? themeGet('colors.primary')(props)
    : themeGet('colors.transparent')(props),
  color: props.selected
    ? themeGet('colors.white')(props)
    : themeGet('colors.black')(props),
  borderRadius: themeGet('radii.normal')(props),
  userSelect: 'none',
  cursor: props.selected ? 'default' : 'pointer',
  '&:last-child': {
    marginRight: 0
  }
}));

export default ({ steps, current = 0, onChange, ...props }) => {
  const [selected, setSelected] = useState(current);

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(selected);
    }
  }, [selected]);

  return (
    <Flex {...props}>
      {steps.map(({ complete, ready, title, description }, index) => (
        <Step
          key={index}
          selected={index === selected}
          onClick={() => setSelected(index)}
        >
          <Heading>{title}</Heading>
          <Paragraph>{description}</Paragraph>
        </Step>
      ))}
    </Flex>
  );
};
