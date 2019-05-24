# Todos

## Simple Components

- Form
  - Reference validation does not work for second form page only... WEIRD
  - Multiselect doesn't use options in validation
  - Finish and optimize the steps
  - Disable next and previous buttons for wizard once steps are done
- Header
- Footer

## Complex Components

- Dashboard card
- Context menu (used in Dashboard card)
- Information list (used in confirmation on add plan)
- Link card (used in sidebar of add plan after)
- Statistic (used in dashboard card and plan overview)
- Short card (used on edit profile and on invitations, has a one or two button option)
- Table (including header with sort functionality, and configurable table row)
- Transaction (desktop and mobile)
- Backer card
- Payment method card
- Contribution card

## Refactors

- Turn all Storybook buttons into withKnob buttons
- Consider refactoring how we're doing the React Select custom inputs
- Consider setting up local visual regression testing before doing the following...
- Convert as many styled components over to using existing Box, Flex, and Card components
- [Convert to styled-system/css](https://styled-system.com/css/) AND USE THE HOC METHOD, only using defaultProps when a value should be changable by a user
- Figure out better way to do responsive styles or content if need be (see "Steps title text", maybe consider adding "display" as a prop on Box and Flex?)
- Removing font CSS from Box and inheritance, replacing all text strings into respective Typography components

## Known Problems

### Avatars

- [Avatars don't have a fallback](src/avatar/index.js)

### Forms

- Some props get passed through to inputs (for instance, "lineHeight" on SSNInput) which throws a non-destructive error in React

### Notifications

- [Notifications are always sticky and don't automatically disappear](src/notifications/index.js)
