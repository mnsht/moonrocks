import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themeGet, borders, display } from 'styled-system';
// import posed from 'react-pose';

import theme from '../theme';
import Box from '../box';
import Flex from '../flex';
import { CappedText } from '../typography';

const TRACK_SIZE = '2px';

const MenuItem = styled(CappedText)(
  props => ({
    cursor: 'pointer',
    transition: `color ${themeGet('animations.fast')(
      props
    )} ease-in-out, border ${themeGet('animations.fast')(props)} ease-in-out`
  }),
  borders
);

const Track = styled(Box)(display);

const border = `${theme.space[1]}px solid`;
const getBorder = isSelected =>
  isSelected
    ? `${border} ${theme.colors.primary}`
    : `${border} ${theme.colors.lightGray}`;

export default ({ pages, current, onChange, ...props }) => {
  if (!current) {
    current = pages[0].href;
  }

  const [selected, setSelected] = useState(current);

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(selected);
    }
  }, [selected]);

  return (
    <Box>
      <Flex {...props} flexDirection={['column', null, 'row']}>
        {pages.map(({ title, href }, index) => {
          const isSelected = href === selected;

          return (
            <MenuItem
              key={href}
              color={isSelected ? 'primary' : 'lightGray'}
              pl={[3, null, 0]}
              py={[2, null, 0]}
              mb={0}
              borderLeft={[getBorder(isSelected), null, 0]}
              marginRight={index !== pages.length - 1 && [null, null, 4]}
              onClick={() => setSelected(href)}
            >
              {title}
            </MenuItem>
          );
        })}
      </Flex>
      <Track
        display={['none', null, 'block']}
        backgroundColor="snow"
        pt={TRACK_SIZE}
        mt={2}
      >
        <Box backgroundColor="primary" />
      </Track>
    </Box>
  );
};
