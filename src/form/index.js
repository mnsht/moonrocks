import React from 'react';
import { Formik, Form as FormikForm, Field } from 'formik';

import { TextInput, EmailInput } from './inputs';
import { Row, Column } from '../grid';
import Button from '../button';

const getInputType = type => {
  if (type === 'text') {
    return TextInput;
  } else if (type === 'email') {
    return EmailInput;
  }

  return null;
};

export default ({ submit, button, initial, validation, forms, ...props }) => {
  const isSingle = forms.length === 1;

  const createInput = (
    { type, name, tooltip, width, ...input },
    formikProps
  ) => {
    const { errors, touched, setFieldValue, setFieldTouched } = formikProps;

    const required =
      validation.fields[name] && validation.fields[name]._exclusive.required;
    const messages =
      touched[name] && errors[name]
        ? { warnings: [], errors: [errors[name]] }
        : null;

    let FieldComponent;

    if (type === 'array') {
      console.log('DO AN ARRAY');
    } else {
      const Component = getInputType(type);

      FieldComponent = (
        <Field
          name={name}
          render={({ field }) => (
            <Component
              {...field}
              {...input}
              required={required}
              tooltip={tooltip}
              messages={messages}
              onChange={value => setFieldValue(name, value)}
              onBlur={() => setFieldTouched(name, true)}
            />
          )}
        />
      );
    }

    return (
      <Column key={name} width={width}>
        {FieldComponent}
      </Column>
    );
  };

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
