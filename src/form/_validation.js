import * as Yup from 'yup';

export default forms => {
  const validations = {};

  forms.forEach(form => {
    form.forEach(({ name, type, validation }) => {
      let valid;

      if (type === 'checkbox' || type === 'switch') {
        valid = Yup.boolean();
      } else {
        if (type === 'checkboxes' || type === 'multiselect') {
          valid = Yup.array();
        } else {
          valid = Yup.string();
        }

        const { required, min, max } = validation;

        if (required) {
          valid = valid.required('This field is required');
        }

        if (min) {
          valid = valid.min(min, `Must be at least ${min} characters`);
        }

        if (max) {
          valid = valid.max(max, `Cannot be longer than ${max} characters`);
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
      }

      validations[name] = valid;
    });
  });

  return Yup.object().shape(validations);
};
