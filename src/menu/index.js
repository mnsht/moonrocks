import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import { themeGet, borders } from 'styled-system';

import theme from '../theme';
import Box from '../box';
import Flex from '../flex';
import { CappedText } from '../typography';

const TRACK_SIZE = '2px';

const Item = styled(CappedText)(
  props => ({
    transition: `color ${themeGet('animations.fast')(
      props
    )} ease-in-out, border ${themeGet('animations.fast')(props)} ease-in-out`
  }),
  borders
);

const MenuItem = React.forwardRef((props, ref) => (
  <Item {...props} ref={ref} />
));

const Track = styled(Box)({
  height: TRACK_SIZE
});

const Progress = styled(Box)(props => ({
  height: TRACK_SIZE,
  transition: `width ${themeGet('animations.fast')(
    props
  )} ease-in-out, margin ${themeGet('animations.fast')(props)} ease-in-out`
}));

const border = `${theme.space[1]}px solid`;
const getBorder = isSelected =>
  isSelected
    ? `${border} ${theme.colors.primary}`
    : `${border} ${theme.colors.lightGray}`;

export default ({ pages, current, onChange, ...props }) => {
  const [selected, setSelected] = useState(null);
  const [selectedWidth, setSelectedWidth] = useState(0);
  const [selectedPosition, setSelectedPosition] = useState(0);

  const menuRef = useRef(null);
  const itemsRef = pages.map(() => useRef(null));

  const setEverything = index => {
    const { current } = itemsRef[index];
    const { href } = pages[index];

    setSelected(href);
    setSelectedWidth(current.offsetWidth);
    setSelectedPosition(current.offsetLeft - menuRef.current.offsetLeft);
  };

  useEffect(() => {
    if (!selected && !selectedWidth && !selectedPosition) {
      if (!current) {
        setEverything(0);
      } else {
        setEverything(pages.findIndex(p => p.href === current));
      }
    }

    if (onChange && typeof onChange === 'function' && selected) {
      onChange(selected);
    }
  }, [selected]);

  return (
    <Box display="inline-block" {...props} ref={menuRef}>
      <Flex flexDirection={['column', null, 'row']}>
        {pages.map(({ title, href }, index) => {
          const isSelected = href === selected;

          return (
            <MenuItem
              key={href}
              ref={itemsRef[index]}
              color={isSelected ? 'primary' : 'lightGray'}
              pl={[3, null, 0]}
              py={[2, null, 0]}
              mb={0}
              borderLeft={[getBorder(isSelected), null, 0]}
              marginRight={index !== pages.length - 1 && [null, null, 4]}
              style={{ cursor: isSelected ? 'default' : 'pointer' }}
              onClick={() => setEverything(index)}
            >
              {title}
            </MenuItem>
          );
        })}
      </Flex>
      <Track display={['none', null, 'block']} backgroundColor="snow" mt={2}>
        <Progress
          backgroundColor="primary"
          width={`${selectedWidth}px`}
          marginLeft={`${selectedPosition}px`}
        />
      </Track>
    </Box>
  );
};
