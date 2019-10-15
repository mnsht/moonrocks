import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import { buttonVariantKnob } from '../../storybook-helpers';

import Button from './';

const stories = storiesOf('1. Foundation|Button', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text('Text', 'Sample Button');
  const disabled = boolean('Is disabled?', false);
  const variant = buttonVariantKnob('Type', 'primary');

  return (
    <Button disabled={disabled} variant={variant}>
      {content}
    </Button>
  );
});
