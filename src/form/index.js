import React from 'react';
import { Formik, Form as FormikForm } from 'formik';
import constructValidation from './_validation';
import createInput from './_input';

import { Row, Column } from '../grid';
import Button from '../button';

const constructInitialValues = forms => {
  const initialValues = {};

  forms.forEach(form => {
    form.forEach(({ name, value }) => {
      initialValues[name] = value || '';
    });
  });

  return initialValues;
};

export default ({ submit, button, forms, ...props }) => {
  const initial = constructInitialValues(forms);
  const validation = constructValidation(forms);
  const isSingle = forms.length === 1;

  return (
    <Formik
      {...props}
      onSubmit={submit}
      initialValues={initial}
      validationSchema={validation}
    >
      {({ isSubmitting, isValid, ...formikProps }) => (
        <FormikForm>
          {isSingle && (
            <Row>{forms[0].map(input => createInput(input, formikProps))}</Row>
          )}
          <Row>
            <Column width={1}>
              <Button type="submit" disabled={isSubmitting || !isValid}>
                {button}
              </Button>
            </Column>
          </Row>
        </FormikForm>
      )}
    </Formik>
  );
};
