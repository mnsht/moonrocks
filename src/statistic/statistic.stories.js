import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';

import Statistic from '.';

const stories = storiesOf('3. Complex|Statistic', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const title = text('Title', 'Account Balance', 'Main');
  const value = text('Value', '$1,234.56', 'Main');
  const tooltip = text('Tooltip', 'Hello world!', 'Main');
  const isImportant = boolean('Is it important?', false, 'Main');

  return (
    <Statistic
      title={title}
      important={isImportant}
      value={value}
      tooltip={tooltip}
    />
  );
});
