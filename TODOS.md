# Todos

## Complex Components

- Link card (used in sidebar of add plan after)
- Statistic (used in dashboard card and plan overview)
- Short card (used on edit profile and on invitations, has a one or two button option)
- Table (including header with sort functionality, and configurable table row)
- Transaction (desktop and mobile)
- Backer card
- Payment method card
- Contribution card

## Refactors

- Move to personal public repo and add Lerna, forking for SRs
- Turn all Storybook buttons into withKnob buttons
- Consider refactoring how we're doing the React Select custom inputs
- Allow for remote submission on forms (even multiple forms) if there's no "button" key specified
- Consider setting up local visual regression testing before doing the following...
  - Remove styled-icons in favor of something smaller and that can play well with Emotion
  - Add emotion, remove styled-components
  - Add 30 to size scale - especially for icons, it's too big of a jump between 24 and 36... const sizeScale = [18, 24, 36, 48, 64, 72, 96, 128];
  - Adding and testing destructured props ("...props") for top level of all components to allow for custom margins and display to be set
  - Adding display to Box and removing specific overrides elsewhere
  - Removing font CSS from Box and inheritance, replacing all text strings into respective Typography components
  - Convert as many styled components over to using existing Box, Flex, and Card components
  - [Convert to styled-system/css](https://styled-system.com/css/) AND USE THE HOC METHOD, only using defaultProps when a value should be changable by a user
  - Figure out better way to do responsive styles or content if need be (see "Steps title text", maybe consider adding "display" as a prop on Box and Flex?)

## Known Problems

### Avatars

- Avatars aren't responsive, you can see this in the Header and DashboardCard components... this is because the lack of a width key on the theme and/or the themeGet function from styled-system being non-responsive

### Forms

- Some props get passed through to inputs (for instance, "lineHeight" on SSNInput) which throws a non-destructive error in React (see https://styled-system.com/guides/removing-props-from-html)

### Notifications

- [Notifications are always sticky and don't automatically disappear](src/notifications/index.js)
