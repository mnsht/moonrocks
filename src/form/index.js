import React, { useState } from 'react';
import { Formik, Form as FormikForm } from 'formik';
import constructInitialValues from './_initial';
import constructValidation from './_validation';
import createInput from './_input';
import Steps from './_steps';
import WizardCard from './_wizard';

import { Row, Column } from '../grid';
import Button from '../button';

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
                <WizardCard
                  key={`wizard-page-${index}`}
                  index={index}
                  forms={forms}
                  currentPage={currentPage}
                  setCurrentPage={setCurrentPage}
                  submitDisabled={isSubmitting || !isValid}
                  submitButton={button}
                >
                  {FormPage}
                </WizardCard>
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
