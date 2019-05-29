import React from 'react';

import { Column } from '../grid';
import Divider from '../divider';
import { CappedText, Heading } from '../typography';

export const FormInsert = ({ children, formikProps, ...props }) => (
  <Column width={1} {...props}>
    {typeof children === 'function' ? children(formikProps) : children}
  </Column>
);

export const FormDivider = () => (
  <FormInsert>
    <Divider mt={3} mb={4} />
  </FormInsert>
);

export const FormDescription = ({ title, description }) => (
  <FormInsert mb={3}>
    {title && (
      <CappedText color="darkGray" style={{ display: 'block' }}>
        {title}
      </CappedText>
    )}
    {description && (
      <Heading as="span" textStyle="h4" color="mediumGray" fontWeight="normal">
        {description}
      </Heading>
    )}
  </FormInsert>
);
