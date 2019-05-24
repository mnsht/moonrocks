import React from 'react';
import { connect } from 'formik';
import Steps from './steps';

const constructSteps = (forms, errors) => {
  const steps = [];

  forms.forEach(({ title, description, page }) => {
    let complete = true;
    let ready = true;

    page.forEach(input => {
      if (
        input &&
        errors.hasOwnProperty(input.name) &&
        errors[input.name] !== ''
      ) {
        complete = false;
      }
    });

    steps.push({ title, description, complete, ready });
  });

  return steps;
};

const ConnectedSteps = ({ formik: { errors }, forms }) => {
  const steps = constructSteps(forms, errors);

  return <Steps steps={steps} mb={4} />;
};

export default connect(ConnectedSteps);
