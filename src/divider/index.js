import styled from 'styled-components';

import Box from '../box';

const Divider = styled(Box)({
  height: '1px',
  border: 0
});

Divider.defaultProps = {
  as: 'hr',
  backgroundColor: 'snow'
};

Divider.displayName = 'Divider';

export default Divider;
