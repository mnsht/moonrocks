import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';

import Dialog from './';

import Flex from '../flex';
import Card from '../card';
import Button from '../button';

const reactContent = (
  <Flex flexWrap="wrap">
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
    <Card p={3} mb={3} mr={3}>
      Hello
    </Card>
    <Card p={3} mb={3} mr={3}>
      World
    </Card>
  </Flex>
);

const stories = storiesOf('Dialog', module);

const store = new Store({
  isOpen: false
});

stories.addDecorator(withKnobs);

stories.add('default', () => {
  const heading = text('Heading', 'This is my title', 'Main');
  const contentIsText = boolean('Content is text?', true, 'Main');
  const content = contentIsText
    ? text('Content', 'This is my title', 'Main')
    : reactContent;
  const hasBackground = boolean('Has background', true, 'Main');

  const buttons = {
    left: [
      <Button variant="error" onClick={() => console.log('Cancel')}>
        Cancel
      </Button>
    ],
    right: [
      <Button variant="secondary" onClick={() => console.log('Other')}>
        Other
      </Button>,
      <Button onClick={() => console.log('Primary')}>Primary</Button>
    ]
  };

  const toggleDialog = () => store.set({ isOpen: !store.get('isOpen') });

  return (
    <React.Fragment>
      <Button onClick={toggleDialog}>Open the dialog</Button>
      <State store={store}>
        {({ isOpen }) => [
          <Dialog
            key="my-dialog" // NOTE: Only needed for Storybook, don't use the key prop in production
            heading={heading}
            buttons={buttons}
            hasBackground={hasBackground}
            isOpen={isOpen} // Whether or not the dialog is open
            close={toggleDialog} // Function that closes the dialog
            onOpen={() => console.log('DIALOG', 'open')} // Event listener that fires when the dialog is opened
            onClose={() => console.log('DIALOG', 'close')} // Event listener that fires when the dialog is closed
          >
            {content}
          </Dialog>
        ]}
      </State>
    </React.Fragment>
  );
});
