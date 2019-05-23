import { generateBlankFieldArray } from './_input';

export default forms => {
  const initialValues = {};

  forms.forEach(({ page }) => {
    page.forEach(input => {
      if (input) {
        if (input.type === 'array') {
          initialValues[input.name] = input.initialValue || [
            generateBlankFieldArray(input.fields)
          ];
        } else {
          initialValues[input.name] = input.initialValue || '';
        }
      }
    });
  });

  return initialValues;
};
