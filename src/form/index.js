import React, { useState } from 'react';
import { Formik, Form as FormikForm, connect } from 'formik';
import constructInitialValues from './_initial';
import constructValidation from './_validation';
import createInput from './_input';
import Steps from './steps';
import WizardCard from './_wizard';

import { Row, Column } from '../grid';
import Button from '../button';

let steps;

const constructSteps = (forms, errors) => {
  const tempSteps = [];

  forms.forEach(({ title, description, page }) => {
    let complete = true;

    page.forEach(({ name }) => {
      if (errors.hasOwnProperty(name) && errors[name] !== '') {
        complete = false;
      }
    });

    tempSteps.push({ title, description, complete });
  });

  steps = tempSteps;
};

export default ({ submit, button, forms, showSteps, ...props }) => {
  const initial = constructInitialValues(forms);
  const validation = constructValidation(forms);
  const isSingle = forms.length === 1;
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <Formik
      {...props}
      onSubmit={submit}
      initialValues={initial}
      validationSchema={validation}
    >
      {({ isSubmitting, isValid, ...formikProps }) => (
        <FormikForm>
          {/* TODO: @tcp, If you undo this line if you want to have a different error... */}
          {/* {constructSteps(forms, formikProps.errors)} */}
          {!isSingle && showSteps && (
            <Steps
              mb={4}
              steps={steps}
              currentPage={currentPage}
              onChange={page => setCurrentPage(page)}
            />
          )}
          {forms.map(({ page }, index) => {
            let FormPage = (
              <Row key={index} mt={isSingle ? 3 : 2}>
                {page.map(input => createInput(input, formikProps))}
              </Row>
            );

            if (!isSingle) {
              return (
                <WizardCard
                  key={`wizard-page-${index}`}
                  index={index}
                  forms={steps.map(({ complete }) => complete)}
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
