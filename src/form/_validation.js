import * as Yup from 'yup';

export default forms => {
  const validations = {};

  const constructValidationString = input => {
    const {
      type,
      validation: { required, min, max, reference }
    } = input;

    let valid;

    if (type === 'checkbox' || type === 'switch') {
      valid = Yup.boolean();
    } else {
      if (type === 'checkboxes' || type === 'multiselect') {
        valid = Yup.array();
      } else {
        valid = Yup.string();
      }

      if (required) {
        valid = valid.required('This field is required');
      }

      if (min) {
        valid = valid.min(min, `Must be at least ${min} characters`);
      }

      if (max) {
        valid = valid.max(max, `Cannot be longer than ${max} characters`);
      }

      if (reference) {
        valid = valid.oneOf(
          [Yup.ref(reference), null],
          'This should match the previous field'
        );
      }

      if (type === 'email') {
        valid = valid.email('Must be a valid email address');
      }

      if (type === 'ssn') {
        // TODO: Required isn't quite right here, check the empty string if required... perhaps separate into another if statement
        valid = valid.matches(/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/, {
          message: 'Must be a valid social security number',
          excludeEmptyString: !required
        });
      }

      if (type === 'phone') {
        // TODO: Required isn't quite right here, check the empty string if required... perhaps separate into another if statement
        valid = valid.matches(/^\+?[0-9]{10}$/, {
          message: 'Must be a valid phone number',
          excludeEmptyString: !required
        });
      }

      // TODO: Currency, SSN (hidden), date, select, multiselect, checkbox, checkboxes, radio, switch, paragraph (with counter?)
      // TODO: Ensure all rules work ONLY if required is true, otherwise they can accept empty values
    }

    return valid;
  };

  forms.forEach(form => {
    form.forEach(input => {
      if (input) {
        if (input.type === 'array' && input.hasOwnProperty('fields')) {
          const fieldValidation = {};

          input.fields.forEach(field => {
            fieldValidation[field.name] = constructValidationString(field);
          });

          validations[input.name] = Yup.array().of(
            Yup.object().shape(fieldValidation)
          );
        } else if (input.hasOwnProperty('validation')) {
          validations[input.name] = constructValidationString(input);
        }
      }
    });
  });

  return Yup.object().shape(validations);
};
