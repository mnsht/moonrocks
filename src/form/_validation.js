import * as Yup from 'yup';

const errors = {
  required: 'This field is required',
  reference: 'This should match the previous field',
  minimum: min => `Must be at least ${min} characters`,
  maximum: max => `Must be shorter than ${max} characters`,
  length: length => `Must have at least ${length} items`,
  validOption: 'Must be a valid value',
  email: 'Must be a valid email address',
  currency: 'Must be a valid amount of money',
  date: 'Must be a valid date',
  ssn: 'Must be a valid social security number',
  phone: 'Must be a valid phone number',
  checkboxTrue: 'You must check this box',
  switchTrue: 'You must switch this on'
};

export default forms => {
  const validations = {};

  const constructValidationString = (
    { type, validation, ...input },
    valid = ''
  ) => {
    const { required, min, max, reference, length } = validation || false;

    if (type === 'checkbox' || type === 'switch') {
      valid = Yup.boolean();

      if (required) {
        valid = valid.oneOf(
          [true],
          type === 'checkbox' ? errors.checkboxTrue : errors.switchTrue
        );
      }
    } else {
      if (type === 'checkboxes' || type === 'multiselect') {
        valid = Yup.array();
      } else if (type !== 'array') {
        valid = Yup.string();
      }

      if (required) {
        valid = valid.required(errors.required);
      }

      if (min) {
        valid = valid.min(min, errors.minimum(min));
      }

      if (max) {
        valid = valid.max(max, errors.maximum(max));
      }

      if (reference) {
        valid = valid.oneOf([Yup.ref(reference)], errors.reference);
      }

      if (length) {
        valid = valid.min(length, errors.length(length));
      }

      if (type === 'select' || type === 'multiselect') {
        valid = valid.oneOf(
          input.options.map(({ value }) => value),
          errors.validOption
        );
      }

      if (type === 'email') {
        valid = valid.email(errors.email);
      }

      if (type === 'currency') {
        valid = valid.matches(/^[+-]?[0-9]{1,3}(?:,?[0-9]{3})*\.[0-9]{2}$/, {
          message: errors.currency,
          excludeEmptyString: !required
        });
      }

      if (type === 'date') {
        if (input.hasYear) {
          valid = valid.matches(/^[0-9]{2}\-?[0-9]{2}\-?[0-9]{4}$/, {
            message: errors.date,
            excludeEmptyString: !required
          });
        } else {
          valid = valid.matches(/^[0-9]{2}\-?[0-9]{2}$/, {
            message: errors.date,
            excludeEmptyString: !required
          });
        }
      }

      if (type === 'ssn') {
        valid = valid.matches(/^[0-9]{3}\-?[0-9]{2}\-?[0-9]{4}$/, {
          message: errors.ssn,
          excludeEmptyString: !required
        });
      }

      if (type === 'phone') {
        valid = valid.matches(/^\+?[0-9]{10}$/, {
          message: errors.phone,
          excludeEmptyString: !required
        });
      }
    }

    return valid;
  };

  forms.forEach(({ page }) => {
    page.forEach(({ type, fields, name, ...input }) => {
      if (type === 'array' && fields) {
        const fieldValidation = {};

        fields.forEach(field => {
          fieldValidation[field.name] = constructValidationString(field);
        });

        validations[name] = constructValidationString(
          input,
          Yup.array().of(Yup.object().shape(fieldValidation))
        );
      } else if (type !== 'divider' && type !== 'heading') {
        validations[name] = constructValidationString(input);
      }
    });
  });

  return Yup.object().shape(validations);
};
