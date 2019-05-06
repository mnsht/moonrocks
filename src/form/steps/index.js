import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';

import Flex from '../../flex';
import Box from '../../box';

const Page = styled(Box)(props => ({
  width: themeGet('widths.2')(props),
  height: themeGet('heights.2')(props),
  lineHeight: `${themeGet('heights.2')(props)}px`,
  textAlign: 'center',
  backgroundColor: props.selected
    ? themeGet('colors.primary')(props)
    : themeGet('colors.transparent')(props),
  color: props.selected
    ? themeGet('colors.white')(props)
    : themeGet('colors.black')(props),
  borderRadius: themeGet('radii.normal')(props),
  marginRight: themeGet('space.1')(props),
  fontWeight: themeGet('fontWeights.bold')(props),
  userSelect: 'none',
  cursor: props.selected ? 'default' : 'pointer',
  '&:last-child': {
    marginRight: 0
  }
}));

export default ({ pages, current = 1, onChange, ...props }) => {
  const [selected, setSelected] = useState(current);

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(selected);
    }
  }, [selected]);

  return (
    <Flex {...props}>
      {[...Array(pages)].map((empty, index) => {
        const realNum = index + 1;

        return (
          <Page
            key={index}
            selected={realNum === selected}
            onClick={() => setSelected(realNum)}
          >
            {realNum}
          </Page>
        );
      })}
    </Flex>
  );
};
