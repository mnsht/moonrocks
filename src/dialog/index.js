import React from 'react';
import styled from 'styled-components';

import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { Heading } from '../typography';

const Dialog = styled(Card)({
  display: 'block'
});

Dialog.defaultProps = {
  ...Card.defaultProps,
  as: 'div'
};

Dialog.displayName = 'Dialog';

const mappedButtons = (buttons, side) =>
  buttons && Array.isArray(buttons) && buttons.length > 0
    ? buttons.map(button =>
        React.cloneElement(
          button,
          side === 'left' ? { mb: 0, mr: 3 } : { mb: 0, ml: 3 }
        )
      )
    : null;

const generateButtons = buttons => ({
  leftButtons: <Box>{mappedButtons(buttons.left, 'left')}</Box>,
  rightButtons: <Box>{mappedButtons(buttons.right, 'right')}</Box>
});

export default ({ isOpen, heading, buttons, ...props }) => {
  const { leftButtons, rightButtons } = generateButtons(buttons);

  return (
    <Dialog p={3}>
      <Heading as="span" textStyle="h3" mt={0}>
        {heading}
      </Heading>
      <Flex justifyContent="space-between">
        {leftButtons}
        {rightButtons}
      </Flex>
    </Dialog>
  );
};
