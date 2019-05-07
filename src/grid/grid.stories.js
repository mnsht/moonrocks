import React from 'react';
import { storiesOf } from '@storybook/react';

import { Container, Row, Column } from './';
import Card from '../card';

const stories = storiesOf('1. Foundation|Grid', module);

stories.add('default', () => {
  return (
    <Container>
      <Row>
        <Column width={[1, null, 1 / 2]}>
          <Card p={2} my={2}>
            1 / 2
          </Card>
        </Column>
        <Column width={[1, null, 1 / 2]}>
          <Card p={2} my={2}>
            1 / 2
          </Card>
        </Column>
      </Row>
      <Row>
        <Column width={1 / 3}>
          <Card p={2} my={2}>
            1 / 3
          </Card>
        </Column>
        <Column width={1 / 3}>
          <Card p={2} my={2}>
            1 / 3
          </Card>
        </Column>
        <Column width={1 / 3}>
          <Card p={2} my={2}>
            1 / 3
          </Card>
        </Column>
      </Row>
    </Container>
  );
});
