import React from 'react';

import theme from '../theme';
import Card from '../card';
import Box from '../box';
import Flex from '../flex';
import Icon from '../icon';
import { Heading, Paragraph } from '../typography';

const getBorder = (type, isLarger) => {
  const border = `${isLarger ? theme.space[3] : theme.space[2]}px solid`;

  if (type === 'info') {
    return `${border} ${theme.colors.darkGray}`;
  } else if (type === 'primary') {
    return `${border} ${theme.colors.primary}`;
  } else if (type === 'success') {
    return `${border} ${theme.colors.success}`;
  } else if (type === 'warning') {
    return `${border} ${theme.colors.warning}`;
  } else if (type === 'error') {
    return `${border} ${theme.colors.error}`;
  }
};

export default ({ type = 'info', icon, title, content, ...props }) => (
  <Card
    {...props}
    borderLeft={[null, null, getBorder(type, true)]}
    borderTop={[getBorder(type), null, 'none']}
    padding={[3, null, 4]}
  >
    <Flex alignItems="center">
      {icon && (
        <Box borderRadius="round" backgroundColor="darkGray" p={2} mr={3}>
          <Icon icon={icon} color="white" size={1} />
        </Box>
      )}
      <Heading as="span" textStyle="h5" mt={0} mb={0}>
        {title}
      </Heading>
    </Flex>
    <Paragraph mt={[2, null, 3]} mb={0}>
      {content}
    </Paragraph>
  </Card>
);
