import styled from 'styled-components';
import {
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  display
} from 'styled-system';
import Box from '../box';

const Flex = styled(Box)(
  flexWrap,
  flexDirection,
  alignItems,
  justifyContent,
  display
);

Flex.defaultProps = {
  display: 'flex'
};

Flex.displayName = 'Flex';

export default Flex;
