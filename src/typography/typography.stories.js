import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select } from '@storybook/addon-knobs';

import {
  InlineText,
  Paragraph,
  CappedText,
  Heading,
  InternalLink,
  ExternalLink,
  InteractiveLink
} from './';

const sampleParagraph = `
  This is just a sample paragraph with no exact meaning. The official records have been lost
  for decades and I am entering a hyperloop. One should approach such matters with precaution
  in order to maintain the status quo. Before I was a child, I had dreams of ribbons in the sky,
  but do not fall prey to the lies of elders. And as always, remember the timecube.
`;

const stories = storiesOf('1. Foundation|Typography', module);

stories.addDecorator(withKnobs);

stories.add('as inline text', () => {
  const content = text('Text', 'Sample Text', 'Main');

  return <InlineText>{content}</InlineText>;
});

stories.add('as a parargaph', () => {
  const content = text('Text', sampleParagraph, 'Main');

  return (
    <React.Fragment>
      <Paragraph>{content}</Paragraph>
      <Paragraph>{content}</Paragraph>
    </React.Fragment>
  );
});

stories.add('as capped text', () => {
  const content = text('Text', 'Important Title', 'Main');

  return (
    <React.Fragment>
      <CappedText>{content}</CappedText>
      <Paragraph>Content of something important</Paragraph>
    </React.Fragment>
  );
});

stories.add('as a heading', () => {
  const content = text('Text', 'My Heading', 'Main');

  const headingSizes = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
  const elem = select('Element', headingSizes, 'h3', 'Main');
  const variant = select(
    'Variant',
    headingSizes.concat(headingSizes.map(heading => heading + 'Static')).sort(),
    'h3',
    'Main'
  );

  return (
    <React.Fragment>
      <Heading as={elem} textStyle={variant}>
        {content}
      </Heading>
      <Paragraph>{sampleParagraph}</Paragraph>
    </React.Fragment>
  );
});

stories.add('as an internal link', () => {
  const content = text('Text', 'Shall we go home?', 'Main');
  const color = select(
    'Color',
    ['primary', 'success', 'warning', 'error'],
    'primary',
    'Main'
  );

  return (
    <InternalLink to="/" colors={color}>
      {content}
    </InternalLink>
  );
});

stories.add('as an external link', () => {
  const content = text('Text', 'Going somewhere?', 'Main');
  const color = select(
    'Color',
    ['primary', 'success', 'warning', 'error'],
    'primary',
    'Main'
  );

  return (
    <ExternalLink to="https://google.com" colors={color}>
      {content}
    </ExternalLink>
  );
});

stories.add('as an interactive link', () => {
  const content = text('Text', 'I am interactive!', 'Main');
  const color = select(
    'Color',
    ['primary', 'success', 'warning', 'error'],
    'primary',
    'Main'
  );

  return (
    <InteractiveLink
      onClick={action('We did something special!')}
      colors={color}
    >
      {content}
    </InteractiveLink>
  );
});
