# Todos

## Complex Components

- Backer card
- Table (including header with sort functionality, and configurable table row)
- Transaction (desktop and mobile)

## Before Separation

- Examine and correct SR components within context of a grid, spacing could be off
- Ensure no margins are set by default on components
- Consider breakpoints being set at ['36em', '60em', '80em']; (at least for SR)
- Add 30 to size scale - especially for icons, it's too big of a jump between 24 and 36... const sizeScale = [18, 24, 36, 48, 64, 72, 96, 128]; - PLEASE CHECK EVERY COMPONENT AGAIN... this will have cascading effects
- Create real responsive avatar
- Create responsive icons
- **@tcp** - Investigate <FastField />
- **@tcp** - Perhaps allow multiple forms to be submitted remotely by a different button?... this would be helpful for "multi-column" forms.

## Refactors

- Conditional inputs (see "Future Projects")
- Move to personal public repo and add Lerna, forking for SRs
- Turn all Storybook buttons into withKnob buttons
- Consider refactoring how we're doing the React Select custom inputs
- Allow for remote submission on forms (even multiple forms) if there's no "button" key specified
- Consider setting up local visual regression testing before doing the following...
  - Remove styled-icons in favor of something smaller and that can play well with Emotion
  - Add emotion, remove styled-components
  - Adding and testing destructured props ("...props") for top level of all components to allow for custom margins and display to be set
  - Adding display to Box and removing specific overrides elsewhere
  - Removing font CSS from Box and inheritance, replacing all text strings into respective Typography components
  - Convert as many styled components over to using existing Box, Flex, and Card components
  - [Convert to styled-system/css](https://styled-system.com/css/) AND USE THE HOC METHOD, only using defaultProps when a value should be changable by a user
  - Figure out better way to do responsive styles or content if need be (see "Steps title text", maybe consider adding "display" as a prop on Box and Flex?)

## Known Problems

### Forms

- Some props get passed through to inputs (for instance, "lineHeight" on SSNInput) which throws a non-destructive error in React (see https://styled-system.com/guides/removing-props-from-html). This may beb a problem for more than just the inputs.

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
