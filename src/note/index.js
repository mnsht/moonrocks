import styled from 'styled-components';
import Card from '../card';

const Note = styled(Card)({
  fontStyle: 'italic'
});

Note.defaultProps = {
  ...Card.defaultProps,
  as: 'div',
  variant: 'note',
  padding: 3,
  lineHeight: 'title'
};

Note.displayName = 'Note';

export default Note;
