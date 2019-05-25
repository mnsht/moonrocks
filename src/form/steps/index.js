import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themeGet, display, borders } from 'styled-system';
import { Check } from 'styled-icons/fa-solid';

import theme from '../../theme';
import Flex from '../../flex';
import Box from '../../box';
import Icon from '../../icon';
import { CappedText, Paragraph, InlineText } from '../../typography';

const StatusContainer = styled(Flex)({ width: '100%' }, display);

const Status = styled(Flex)(props => ({
  width: themeGet('widths.2')(props),
  height: themeGet('heights.2')(props),
  borderRadius: themeGet('radii.round')(props),
  backgroundColor: props.selectable
    ? themeGet('colors.darkGray')(props)
    : themeGet('colors.lightGray')(props)
}));

const Line = styled(Box)(props => ({
  height: themeGet('space.1')(props),
  margin: themeGet('space.2')(props),
  flex: 1,
  background: themeGet('colors.snow')(props)
}));

const Title = styled(CappedText)(
  props => ({
    transition: `color ${themeGet('animations.fast')(
      props
    )} ease-in-out, border ${themeGet('animations.fast')(props)} ease-in-out`
  }),
  display,
  borders
);

const Description = styled(Paragraph)(display);

const MobileCheckIcon = styled(Icon)(display);

const getBorder = (selected, complete) => {
  const border = `${theme.space[1]}px solid`;

  if (selected) {
    return `${border} ${theme.colors.primary700}`;
  } else {
    if (complete) {
      return `${border} ${theme.colors.primary}`;
    } else {
      return `${border} ${theme.colors.lightGray}`;
    }
  }
};

export default ({ steps, onChange, currentPage, ...props }) => {
  const getCurrentStep = () => {
    let lastReady = 0;

    steps.forEach(({ complete }, index) => {
      if (complete && index + 1 < steps.length) {
        lastReady = index + 1;
      }
    });

    return lastReady;
  };

  const [selected, setSelected] = useState(currentPage || getCurrentStep());

  useEffect(() => {
    setSelected(currentPage);
  }, [currentPage]);

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(selected);
    }
  }, [selected]);

  return (
    <Flex {...props} flexDirection={['column', null, 'row']}>
      {steps.map(({ complete, title, description }, index) => {
        const ready = index === 0 || steps[index - 1].complete;
        const isSelected = index === selected;

        const titleProps = {
          color: isSelected || complete ? 'darkGray' : 'lightGray',
          pl: [3, null, 0],
          py: [2, null, 0],
          mr: 3,
          mb: 0,
          borderLeft: [getBorder(isSelected, complete), null, 0]
        };

        return (
          <Flex
            key={index}
            flexDirection={['row', null, 'column']}
            justifyContent={'space-between'}
            alignItems={['center', null, 'flex-start']}
            onClick={ready ? () => setSelected(index) : null}
            style={{ cursor: ready ? 'pointer' : 'default' }}
          >
            <StatusContainer
              display={['none', null, 'flex']}
              alignItems="center"
              mb={3}
            >
              <Status
                selectable={ready || complete}
                justifyContent="center"
                alignItems="center"
              >
                {complete && <Icon icon={Check} color="success" size={0} />}
                {!complete && (
                  <InlineText color="white" fontWeight="extraBold">
                    {index + 1}
                  </InlineText>
                )}
              </Status>
              <Line />
            </StatusContainer>
            <Title {...titleProps} display={['block', null, 'none']}>
              {index + 1}. {title}
            </Title>
            <Title {...titleProps} display={['none', null, 'block']}>
              {title}
            </Title>
            <Description
              display={['none', null, 'block']}
              color="mediumGray"
              lineHeight="title"
              mt={2}
              mr={3}
              mb={0}
            >
              {description}
            </Description>
            {complete && (
              <MobileCheckIcon
                display={['block', null, 'none']}
                icon={Check}
                color="success"
              />
            )}
          </Flex>
        );
      })}
    </Flex>
  );
};
