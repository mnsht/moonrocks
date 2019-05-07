import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { themeGet, display, borders } from 'styled-system';
import { Check } from 'styled-icons/fa-solid';

import theme from '../../theme';
import Flex from '../../flex';
import Icon from '../../icon';
import { CappedText, Paragraph } from '../../typography';

const Step = styled(Flex)({});

const Title = styled(CappedText)(
  props => ({
    transition: `color ${themeGet('animations.fast')(
      props
    )} ease-in-out, border ${themeGet('animations.fast')(props)} ease-in-out`
  }),
  display,
  borders
);

const Description = styled(Paragraph)({ width: '75%' }, display);

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

export default ({ steps, onChange, ...props }) => {
  const getCurrentStep = () => {
    let lastReady = 0;

    steps.forEach(({ complete }, index) => {
      if (complete && index + 1 < steps.length) {
        lastReady = index + 1;
      }
    });

    return lastReady;
  };

  const [selected, setSelected] = useState(getCurrentStep());

  useEffect(() => {
    setSelected(getCurrentStep());
  }, [steps]);

  useEffect(() => {
    if (onChange && typeof onChange === 'function') {
      onChange(selected);
    }
  }, [selected]);

  return (
    <Flex {...props} flexDirection={['column', null, 'row']}>
      {steps.map(({ complete, ready, title, description }, index) => {
        const isSelected = index === selected;

        const titleProps = {
          color: isSelected || complete ? 'darkGray' : 'lightGray',
          pl: [3, null, 0],
          py: [2, null, 0],
          mb: 0,
          borderLeft: [getBorder(isSelected, complete), null, 0],
          marginRight: index !== steps.length - 1 && [null, null, 4]
        };

        return (
          <Step
            key={index}
            flexDirection={['row', null, 'column']}
            justifyContent={'space-between'}
            alignItems={['center', null, 'flex-start']}
            onClick={ready ? () => setSelected(index) : null}
            style={{ cursor: ready ? 'pointer' : 'default' }}
          >
            <Title {...titleProps} display={['block', null, 'none']}>
              {index + 1}. {title}
            </Title>
            <Title {...titleProps} display={['none', null, 'block']}>
              {title}
            </Title>
            <Description
              display={['none', null, 'block']}
              color="mediumGray"
              mt={2}
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
          </Step>
        );
      })}
    </Flex>
  );
};
