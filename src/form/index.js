import React, { useState } from 'react';
import styled from 'styled-components';
import { display } from 'styled-system';
import { Formik, Form as FormikForm } from 'formik';
import constructValidation from './_validation';
import createInput from './_input';

import { Row, Column } from '../grid';
import Card from '../card';
import Button from '../button';

const WizardPage = styled(Card)(display);

const constructInitialValues = forms => {
  const initialValues = {};

  forms.forEach(form => {
    form.forEach(({ name, initialValue }) => {
      initialValues[name] = initialValue || '';
    });
  });

  return initialValues;
};

export default ({ submit, button, startAt, forms, ...props }) => {
  const initial = constructInitialValues(forms);
  const validation = constructValidation(forms);
  const isSingle = forms.length === 1;
  const [currentPage, setCurrentPage] = useState(startAt || 0);

  return (
    <Formik
      {...props}
      onSubmit={submit}
      initialValues={initial}
      validationSchema={validation}
    >
      {({ isSubmitting, isValid, ...formikProps }) => (
        <FormikForm>
          {forms.map((form, index) => {
            if (isSingle) {
              return (
                <Row>{form.map(input => createInput(input, formikProps))}</Row>
              );
            }

            // TODO: Finish the form wizard
            return (
              <WizardPage display={currentPage === index ? 'block' : 'none'}>
                <p>Form Wizard - Page {currentPage}</p>
                <Row>{form.map(input => createInput(input, formikProps))}</Row>
                {currentPage - 1 >= 0 && (
                  <Button
                    variant="secondary"
                    onClick={() => setCurrentPage(currentPage - 1)}
                  >
                    Previous
                  </Button>
                )}
                {currentPage + 1 < forms.length && (
                  <Button
                    variant="secondary"
                    onClick={() => setCurrentPage(currentPage + 1)}
                  >
                    Next
                  </Button>
                )}
              </WizardPage>
            );
          })}
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
