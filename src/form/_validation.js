import * as Yup from 'yup';

export default forms => {
  const validations = {};

  forms.forEach(form => {
    form.forEach(input => {
      if (input) {
        const {
          name,
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
            valid = valid.matches(/^\+?[0-9]{11}$/, {
              message: 'Must be a valid phone number',
              excludeEmptyString: !required
            });
          }

          // TODO: Currency, SSN (hidden), date, select, multiselect, checkbox, checkboxes, radio, switch, paragraph (with counter?)
          // TODO: Ensure all rules work ONLY if required is true, otherwise they can accept empty values
        }

        validations[name] = valid;
      }
    });
  });

  return Yup.object().shape(validations);
};
