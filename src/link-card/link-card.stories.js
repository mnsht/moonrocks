import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import { ChartLine } from 'styled-icons/fa-solid';

import LinkCard from '.';

import { Column } from '../grid';

const stories = storiesOf('3. Complex|Link Card', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const title = text('Title', 'Define  your goals', 'Main');
  const description = text(
    'Description',
    'Set up financial goals that you’d like to see your scholar hit.  Keep track of how much you’re earning and stay on track with helpful tips!',
    'Main'
  );
  const link = text('Link', '/plans/fw398y83/goals', 'Main');

  return (
    <Column width={[1, 1 / 2, 1 / 3]}>
      <LinkCard
        icon={ChartLine}
        title={title}
        description={description}
        link={link}
      />
    </Column>
  );
});
