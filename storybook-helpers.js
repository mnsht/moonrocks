import { select, number } from "@storybook/addon-knobs";
import theme from "./src/theme";

const SPACE_OPTS = {
  min: 0,
  max: theme.space.length - 1,
  step: 1
};

const FONT_SIZE_OPTS = {
  min: 0,
  max: theme.fontSizes.length - 1,
  step: 1
};

const SIZE_OPTS = {
  min: 0,
  max: theme.widths.length - 1,
  step: 1
};

export const spacingKnob = (title, defaultValue, group) =>
  number(title, defaultValue, SPACE_OPTS, group);

export const fontSizeKnob = (title, defaultValue, group) =>
  number(title, defaultValue, FONT_SIZE_OPTS, group);

export const sizeKnob = (title, defaultValue, group) =>
  number(title, defaultValue, SIZE_OPTS, group);

export const colorKnob = (title, defaultValue, group) =>
  select(
    title,
    theme.colors,
    theme.colors[defaultValue] ? theme.colors[defaultValue] : defaultValue,
    group
  );

export const buttonVariantKnob = (title, defaultValue, group) =>
  select(title, Object.keys(theme.buttons), defaultValue, group);
