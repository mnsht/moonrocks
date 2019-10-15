import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { sizeKnob, colorKnob } from '../../storybook-helpers';
import { FaCheck } from 'react-icons/fa';

import Icon from './';

const stories = storiesOf('2. Simple|Icon', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const size = sizeKnob('Size', 2);
  const color = colorKnob('Color', 'success');

  return <Icon icon={FaCheck} size={size} m={3} color={color} />;
});

stories.add('as an interactive icon', () => {
  const size = sizeKnob('Size', 2);
  const color = colorKnob('Color', 'success');
  const hoverColor = colorKnob('Hover color', 'success700');

  return (
    <Icon
      icon={FaCheck}
      size={size}
      m={3}
      color={color}
      hoverColor={hoverColor}
      onClick={() => console.log('Very interactive.')}
    />
  );
});
