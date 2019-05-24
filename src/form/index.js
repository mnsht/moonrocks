import React, { useState } from 'react';
import styled from 'styled-components';
import { display } from 'styled-system';
import { Formik, Form as FormikForm } from 'formik';
import constructInitialValues from './_initial';
import constructValidation from './_validation';
import createInput from './_input';
import Steps from './_steps';

import { Row, Column } from '../grid';
import Card from '../card';
import Button from '../button';

const WizardPage = styled(Card)(display);

export default ({ submit, button, startAt, forms, showSteps, ...props }) => {
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
          {!isSingle && showSteps && <Steps forms={forms} />}
          {forms.map(({ page }, index) => {
            let FormPage = (
              <Row key={index} mt={3}>
                {page.map(input => createInput(input, formikProps))}
              </Row>
            );

            if (!isSingle) {
              return (
                <WizardPage
                  key={`wizard-page-${index}`}
                  display={currentPage === index ? 'block' : 'none'}
                >
                  {FormPage}
                  {currentPage - 1 >= 0 && (
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setCurrentPage(currentPage - 1)}
                    >
                      Previous
                    </Button>
                  )}
                  {currentPage + 1 < forms.length && (
                    <Button
                      type="button"
                      variant="secondary"
                      onClick={() => setCurrentPage(currentPage + 1)}
                    >
                      Next
                    </Button>
                  )}
                </WizardPage>
              );
            }

            return FormPage;
          })}
          {isSingle && (
            <Row>
              <Column width={1}>
                <Button
                  mt={3}
                  type="submit"
                  disabled={isSubmitting || !isValid}
                >
                  {button}
                </Button>
              </Column>
            </Row>
          )}
        </FormikForm>
      )}
    </Formik>
  );
};
