import { generateBlankFieldArray } from './_input';

export default forms => {
  const initialValues = {};

  forms.forEach(({ page }) => {
    page.forEach(({ type, name, fields, initialValue }) => {
      if (type === 'array') {
        initialValues[name] = initialValue || [generateBlankFieldArray(fields)];
      } else if (type === 'checkbox' || type === 'switch') {
        initialValues[name] = initialValue || false;
      } else if (type !== 'divider' && type !== 'heading') {
        initialValues[name] = initialValue || '';
      }
    });
  });

  return initialValues;
};
