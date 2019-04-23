import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import Flex from './';
import Card from '../card';

const stories = storiesOf('Flex', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const content = text('Text', 'Sample Text', 'Main');

  return (
    <Flex flexDirection={['column', null, 'row']}>
      <Card p={2} m={2}>
        {content}
      </Card>
      <Card p={2} m={2}>
        {content}
      </Card>
      <Card p={2} m={2}>
        {content}
      </Card>
    </Flex>
  );
});
