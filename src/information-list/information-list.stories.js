import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';

import InformationList from './';

import { Paragraph, InlineText } from '../typography';

const stories = storiesOf('3. Complex|Information List', module);

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const title = text('Title', 'Account Owner', 'Main');
  const name = text('Name', 'Sam Wilkes', 'Main');

  const items = [
    {
      title: 'Birthdate',
      value: 'May 11th, 1992'
    },
    {
      title: 'Phone',
      value: '(615) 339-4303'
    },
    {
      title: 'SSN',
      value: '* * * - * * - 3 9 0 6'
    },
    {
      title: 'Address',
      value: ['2093 Oxford Street', 'Nashville, TN 37216']
    }
  ];

  return (
    <InformationList
      title={title}
      name={name}
      items={items}
      onChange={page => console.log('WE NEED TO CHANGE PAGES', page)}
    />
  );
});

stories.add('as an empty list', () => {
  const title = text('Title', 'Successor', 'Main');

  const message = (
    <Paragraph>
      Add a successor to take over the management of the account should anything
      happen to you. We <InlineText fontWeight="bold">highly</InlineText>{' '}
      suggest adding a successor.
    </Paragraph>
  );

  // NOTE: The message can also be a string
  return (
    <InformationList
      title={title}
      message={message}
      onChange={page => console.log('WE NEED TO CHANGE PAGES', page)}
    />
  );
});
