import React, { useState } from 'react';
import { Formik, Form as FormikForm, connect } from 'formik';
import constructInitialValues from './_initial';
import constructValidation from './_validation';
import createInput from './_input';
import Steps from './steps';
import WizardCard from './_wizard';

import { Row, Column } from '../grid';
import Box from '../box';
import Button from '../button';

let steps;

const constructSteps = (forms, errors, touched, validPages) => {
  const tempSteps = [];

  forms.forEach(({ title, description, page }, index) => {
    let complete = true;

    page.forEach(({ name }) => {
      if (
        (errors.hasOwnProperty(name) && errors[name] !== '') ||
        (!validPages[index] && !Object.keys(touched).length)
      ) {
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
  const initiallyValidPages = forms.map((form, index) => {
    const validator = constructValidation([form]);
    return !validator ? true : validator.isValidSync(initial);
  });
  const firstIncompletePage = initiallyValidPages.findIndex(
    page => page === false
  );
  const [currentPage, setCurrentPage] = useState(
    firstIncompletePage !== -1 ? firstIncompletePage : forms.length - 1
  );

  return (
    <Box {...props}>
      <Formik
        onSubmit={submit}
        initialValues={initial}
        validationSchema={validation}
      >
        {({ isSubmitting, isValid, ...formikProps }) => (
          <FormikForm>
            {constructSteps(
              forms,
              formikProps.errors,
              formikProps.touched,
              initiallyValidPages
            )}
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
    </Box>
  );
};

export { FormInsert, FormDivider, FormDescription } from './_inserts';
