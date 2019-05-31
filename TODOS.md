# Todos

## Before Separation

- **@tcp** - Investigate <FastField />
- **@tcp** - Perhaps allow multiple forms to be submitted remotely by a different button?... this would be helpful for "multi-column" forms.

## Refactors

- Move to personal public repo and add Lerna, forking for SRs
- Turn all Storybook buttons into withKnob buttons
- Consider refactoring how we're doing the React Select custom inputs
- Consider setting up local visual regression testing before doing the following...
- Add emotion, remove styled-components
- Run analyzer to get bundle size down, look to maybe not have so many bundled dependencies
- Investigate doing Formik validation per page only
- Migrate to V5
- Removing font CSS from Box and inheritance, replacing all text strings into respective Typography components
- Convert as many styled components over to using existing Box, Flex, and Card components
- [Convert to styled-system/css](https://styled-system.com/css/) AND USE THE HOC METHOD, only using defaultProps when a value should be changable by a user

## Known Problems

### Forms

- Some props get passed through to inputs (for instance, "lineHeight" on SSNInput) which throws a non-destructive error in React (see https://styled-system.com/guides/removing-props-from-html). This may be a problem for more than just the inputs.

### Menu

- When you click on a mobile link, it doesn't always change on desktop... or something like that. Switching back and forth while clicking is a bit burdensome.

### Notifications

- [Notifications are always sticky and don't automatically disappear](src/notifications/index.js)

## Future Projects

- Conditional inputs, something like this:

```js
  {
    name: 'checkbox_conditional',
    type: 'checkbox',
    label: 'Try toggling my value',
    width: [1],
    initialValue: false
  },
  {
    name: 'text_conditional',
    type: 'text',
    placeholder: 'Here I am...',
    width: [1, null, 1 / 3],
    conditions: values => {
      if(values['checkbox_conditional'] === true) {
        return true;  // Show it
      }

      return false;  // Hide it
    },
    validation: {
      min: 2,
      max: 50,
      required: true
    }
  }
```

- Add bounds to tooltip or consider using a library
- Table support?
