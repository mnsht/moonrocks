import * as Yup from 'yup';

export default forms => {
  const validations = {};

  const constructValidationString = (input, valid = '') => {
    const {
      type,
      validation: { required, min, max, reference, length }
    } = input;

    if (type === 'checkbox' || type === 'switch') {
      valid = Yup.boolean();

      if (required) {
        valid = valid.oneOf(
          [true],
          `You must ${
            type === 'checkbox' ? 'check this box' : 'switch this on'
          }`
        );
      }
    } else {
      if (type === 'checkboxes' || type === 'multiselect') {
        valid = Yup.array();
      } else if (type !== 'array') {
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

      if (length) {
        valid = valid.min(length, `Must have at least ${length} items`);
      }

      if (type === 'email') {
        valid = valid.email('Must be a valid email address');
      }

      if (type === 'currency') {
        valid = valid.matches(/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$/, {
          message: 'Must be a valid amount of money',
          excludeEmptyString: !required
        });
      }

      if (type === 'date') {
        if (input.hasYear) {
          valid = valid.matches(/^[0-9]{2}\-?[0-9]{2}\-?[0-9]{4}$/, {
            message: 'Must be a valid date',
            excludeEmptyString: !required
          });
        } else {
          valid = valid.matches(/^[0-9]{2}\-?[0-9]{2}$/, {
            message: 'Must be a valid date',
            excludeEmptyString: !required
          });
        }
      }

      if (type === 'ssn') {
        valid = valid.matches(/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/, {
          message: 'Must be a valid social security number',
          excludeEmptyString: !required
        });
      }

      if (type === 'phone') {
        valid = valid.matches(/^\+?[0-9]{10}$/, {
          message: 'Must be a valid phone number',
          excludeEmptyString: !required
        });
      }

      // TODO: Add default select (one of the options), multiselect (each one of the options), checkboxes, radio, and paragraph (with counter?) validation
      // TODO: Fix required on empty string for all "matches" statements (and potentially email?)
      // TODO: Add errors that don't have an input (checkbox, checkboxes, radio, switch, array) below items
      // TODO: Unchecked checkbox and untoggled switch don't fire until clicked once, meaning that the initial value isn't validated
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
            if (field.hasOwnProperty('validation')) {
              fieldValidation[field.name] = constructValidationString(field);
            }
          });

          validations[input.name] = constructValidationString(
            input,
            Yup.array().of(Yup.object().shape(fieldValidation))
          );
        } else if (input.hasOwnProperty('validation')) {
          validations[input.name] = constructValidationString(input);
        }
      }
    });
  });

  return Yup.object().shape(validations);
};
