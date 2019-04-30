import React from 'react';
import styled from 'styled-components';
import { themeGet } from 'styled-system';
import { Times } from 'styled-icons/fa-solid';

import Card from '../card';
import Flex from '../flex';
import Box from '../box';
import { Heading as BaseHeading } from '../typography';
import Icon from '../icon';

const DIALOG_PADDING = 3;

const Dialog = styled(Card)(props => ({
  position: 'relative',
  padding: themeGet(`space.${DIALOG_PADDING}`)(props)
}));

const Heading = styled(BaseHeading)({
  marginTop: 0
});

Heading.defaultProps = {
  ...BaseHeading.defaultProps,
  as: 'span',
  textStyle: 'h3'
};

Heading.displayName = 'Heading';

const Content = styled(Box)(props => ({
  marginBottom: themeGet('space.4')(props)
}));

const Buttons = styled(Flex)({
  justifyContent: 'space-between'
});

const CloseButton = styled(Icon)(props => ({
  position: 'absolute',
  top: 0,
  right: 0,
  margin: themeGet(`space.${DIALOG_PADDING}`)(props),
  cursor: 'pointer',
  '& > svg': {
    color: themeGet('colors.snow')(props),
    transition: `color ${themeGet('animations.fast')(props)} ease-in-out`
  },
  '&:hover > svg': {
    color: themeGet('colors.mediumGray')(props)
  }
}));

CloseButton.defaultProps = {
  ...Icon.defaultProps,
  size: 2,
  icon: Times
};

CloseButton.displayName = 'CloseButton';

const handleClose = (closeFunc, onClose) => {
  closeFunc();

  if (onClose && typeof onClose === 'function') {
    onClose();
  }
};

const generateButtons = (buttons, closeFunc, onClose) => {
  const mappedButtons = (buttons, side) =>
    buttons && Array.isArray(buttons) && buttons.length > 0
      ? buttons.map((button, index) => {
          const commonProps = {
            key: `${side}-${index}`,
            mb: 0,
            onClick: () => {
              button.props.onClick();

              handleClose(closeFunc, onClose);
            }
          };

          return React.cloneElement(
            button,
            side === 'left'
              ? { ...commonProps, mr: 3 }
              : { ...commonProps, ml: 3 }
          );
        })
      : null;

  return {
    leftButtons: <Box>{mappedButtons(buttons.left, 'left')}</Box>,
    rightButtons: <Box>{mappedButtons(buttons.right, 'right')}</Box>
  };
};

/*
TODO:
 - Ensure it works on all screen sizes
 - Animation
 - Background (optional) - maybe a portal?
*/

export default ({
  isOpen,
  close,
  onOpen,
  onClose,
  heading,
  buttons,
  children,
  ...props
}) => {
  if (isOpen) {
    if (onOpen && typeof onOpen === 'function') {
      onOpen();
    }

    const { leftButtons, rightButtons } = generateButtons(
      buttons,
      close,
      onClose
    );

    return (
      <Dialog {...props}>
        <Heading>{heading}</Heading>
        <Content>{children}</Content>
        <Buttons>
          {leftButtons}
          {rightButtons}
        </Buttons>
        <CloseButton onClick={() => handleClose(close, onClose)} />
      </Dialog>
    );
  }

  return null;
};
