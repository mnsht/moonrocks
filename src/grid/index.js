import styled from 'styled-components';
import Box from '../box';
import Flex from '../flex';

import theme from '../theme';

export const Container = styled(Box)({
  width: '100%',
  [theme.media.desktop]: { width: 1024 },
  [theme.media.widescreen]: { width: 1200 }
});

Container.defaultProps = {
  as: 'div',
  mx: 'auto'
};

Container.displayName = 'Container';

export const Row = styled(Flex)({});

Row.defaultProps = {
  as: 'div',
  flexWrap: 'wrap'
};

Row.displayName = 'Row';

export const Column = styled(Box)({});

Column.defaultProps = {
  as: 'div',
  px: 2
};

Column.displayName = 'Column';
